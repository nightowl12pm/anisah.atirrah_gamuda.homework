import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Key, ShieldCheck, Fingerprint, Check } from 'lucide-react';

// Logo kecil (buah koko + tanda semak) - diletakkan terus di sini supaya fail ini tidak bergantung pada fail lain
function BrandLogo({ size = 44 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} role="img" aria-label="CocoaCheck Sabah logo" style={{ display: 'block', flexShrink: 0 }}>
      <rect width="64" height="64" rx="14" fill="#5A3825" />
      <path d="M32 8 C47 14 51 34 32 57 C13 34 17 14 32 8 Z" fill="#D9A441" />
      <g fill="none" stroke="#5A3825" strokeWidth="1.8" strokeLinecap="round" opacity="0.55">
        <path d="M32 10 C30 24 30 40 32 55" />
        <path d="M32 10 C41 22 42 40 32 55" />
        <path d="M32 10 C23 22 22 40 32 55" />
      </g>
      <path d="M32 8 C32 5 34 3.5 36 3" fill="none" stroke="#D9A441" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="45" cy="45" r="11" fill="#FAF6F0" stroke="#5A3825" strokeWidth="2.5" />
      <path d="M39.5 45.5 L43.5 49.5 L51 41" fill="none" stroke="#276735" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Cincin peratusan kecil (cth. keyakinan AI 87%)
function ProgressRing({ value = 87, size = 56 }) {
  const r = 21;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" aria-label={`${value}%`}>
      <circle cx="27" cy="27" r={r} fill="none" stroke="#EFE5D6" strokeWidth="6" />
      <circle
        cx="27" cy="27" r={r} fill="none" stroke="#386641" strokeWidth="6" strokeLinecap="round"
        strokeDasharray={`${(c * value) / 100} ${c}`} transform="rotate(-90 27 27)"
      />
      <text x="27" y="31" textAnchor="middle" fontSize="12" fontWeight="600" fill="#2B1D16">{value}%</text>
    </svg>
  );
}

// Ilustrasi asal: buah koko besar + daun + biji koko (dilukis dengan kod, tiada fail gambar)
function HeroIllustration() {
  return (
    <svg viewBox="0 0 560 480" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
      <defs>
        <linearGradient id="ccPodGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0C25E" />
          <stop offset="100%" stopColor="#C98A25" />
        </linearGradient>
        <path id="ccLeaf2" d="M0 0 C22 -30 70 -30 92 0 C70 30 22 30 0 0 Z" />
      </defs>

      {/* Latar bulat lembut */}
      <circle cx="280" cy="235" r="185" fill="#EFE1CB" />
      <circle cx="280" cy="235" r="140" fill="#F6ECDC" />

      {/* Garisan melengkung hiasan */}
      <path d="M150 300 C105 175 185 105 232 138 C238 92 318 80 338 128 C394 100 458 160 425 300" fill="none" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="236" cy="150" rx="10" ry="14" fill="none" stroke="#D9A441" strokeWidth="3" transform="rotate(-20 236 150)" />
      <ellipse cx="336" cy="140" rx="10" ry="14" fill="none" stroke="#D9A441" strokeWidth="3" transform="rotate(20 336 140)" />

      {/* Bayang tanah */}
      <ellipse cx="280" cy="388" rx="150" ry="16" fill="#5A3825" opacity="0.12" />

      {/* Daun */}
      <g fill="#386641">
        <use href="#ccLeaf2" transform="translate(236 382) rotate(-165) scale(1.15)" opacity="0.95" />
        <use href="#ccLeaf2" transform="translate(236 382) rotate(-130) scale(0.8)" opacity="0.8" />
        <use href="#ccLeaf2" transform="translate(326 382) rotate(-15) scale(1.15)" opacity="0.95" />
        <use href="#ccLeaf2" transform="translate(326 382) rotate(-50) scale(0.8)" opacity="0.8" />
      </g>

      {/* Buah koko utama */}
      <g className="cc-bob">
        <g transform="translate(104 56) scale(5.5)">
          <path d="M32 8 C47 14 51 34 32 57 C13 34 17 14 32 8 Z" fill="url(#ccPodGrad)" />
          <g fill="none" stroke="#5A3825" strokeWidth="0.9" strokeLinecap="round" opacity="0.45">
            <path d="M32 10 C30 24 30 40 32 55" />
            <path d="M32 10 C41 22 42 40 32 55" />
            <path d="M32 10 C23 22 22 40 32 55" />
          </g>
          <path d="M32 8 C32 5 34 3.5 36 3" fill="none" stroke="#C98A25" strokeWidth="1.4" strokeLinecap="round" />
          <ellipse cx="25" cy="24" rx="3" ry="9" fill="#fff" opacity="0.28" transform="rotate(12 25 24)" />
        </g>
        {/* Lencana semak */}
        <circle cx="352" cy="318" r="40" fill="#FAF6F0" stroke="#5A3825" strokeWidth="6" />
        <path d="M334 318 L347 331 L372 303" fill="none" stroke="#276735" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Biji koko */}
      <g fill="#5A3825">
        <g transform="translate(150 405) rotate(-25)">
          <ellipse rx="16" ry="10" />
          <path d="M-13 0 Q0 -3 13 0" stroke="#FAF6F0" strokeWidth="1.5" fill="none" opacity="0.7" />
        </g>
        <g transform="translate(205 420) rotate(15)">
          <ellipse rx="13" ry="8" />
          <path d="M-10 0 Q0 -2 10 0" stroke="#FAF6F0" strokeWidth="1.4" fill="none" opacity="0.7" />
        </g>
        <g transform="translate(420 402) rotate(20)">
          <ellipse rx="16" ry="10" />
          <path d="M-13 0 Q0 -3 13 0" stroke="#FAF6F0" strokeWidth="1.5" fill="none" opacity="0.7" />
        </g>
      </g>

      {/* Kilauan */}
      <g stroke="#D9A441" strokeWidth="3" strokeLinecap="round">
        <path d="M468 118 v18 M459 127 h18" />
        <path d="M92 250 v14 M85 257 h14" />
        <path d="M455 300 v12 M449 306 h12" />
      </g>
    </svg>
  );
}

const slides = [
  { lead: 'Make cocoa quality checks easier and organized with', strong: 'CocoaCheck Sabah' },
  { lead: 'Spot defects faster with', strong: 'AI visual screening' },
  { lead: 'Keep every batch compliant with', strong: 'clear, traceable rules' },
];

const altLogins = [
  { label: 'Staff ID', icon: Key },
  { label: 'SSO', icon: ShieldCheck },
  { label: 'Biometric', icon: Fingerprint },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  .cc-root { display: grid; grid-template-columns: 1fr 1.08fr; min-height: 100vh; width: 100%; background: #fff; font-family: 'Poppins', 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #2B1D16; }

  .cc-left { display: flex; flex-direction: column; padding: 28px 48px 32px; box-sizing: border-box; min-height: 100vh; }
  .cc-center { flex: 1; display: flex; align-items: center; justify-content: center; }
  .cc-form { width: 100%; max-width: 460px; }

  .cc-right { padding: 28px 28px 28px 0; box-sizing: border-box; }
  .cc-panel { position: relative; height: 100%; min-height: calc(100vh - 56px); border-radius: 28px; overflow: hidden; background: linear-gradient(160deg, #FAF4EA 0%, #F3E7D3 100%); display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 32px 32px 40px; box-sizing: border-box; }
  .cc-stage { position: relative; width: min(100%, 560px); aspect-ratio: 560 / 480; margin: auto 0; }

  .cc-input { width: 100%; height: 56px; box-sizing: border-box; border-radius: 999px; border: 1.5px solid #cdbfae; background: #fff; color: #2B1D16; font-family: inherit; font-size: 15px; padding: 0 56px 0 26px; outline: none; transition: border-color .2s, box-shadow .2s, transform .2s; }
  .cc-input::placeholder { color: #9a9087; }
  .cc-input:hover { border-color: #a99a89; }
  .cc-input:focus { border-color: #5A3825; box-shadow: 0 0 0 4px rgba(90, 56, 37, 0.12); }
  .cc-pw { position: relative; }
  .cc-eye { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #736b65; padding: 8px; border-radius: 50%; display: flex; transition: background .2s, color .2s; }
  .cc-eye:hover { background: #F3E9DA; color: #2B1D16; }

  .cc-btn { width: 100%; height: 56px; border-radius: 999px; border: none; background: #5A3825; color: #fff; font-family: inherit; font-size: 16px; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: background .2s, transform .15s, box-shadow .2s; }
  .cc-btn:hover:not(:disabled) { background: #3f2517; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(90, 56, 37, 0.3); }
  .cc-btn:active:not(:disabled) { transform: translateY(0); box-shadow: 0 3px 8px rgba(90, 56, 37, 0.25); }
  .cc-btn:disabled { opacity: .85; cursor: not-allowed; }
  .cc-spinner { width: 18px; height: 18px; border: 2px solid rgba(255,255,255,.35); border-top-color: #fff; border-radius: 50%; animation: ccSpin .7s linear infinite; }
  @keyframes ccSpin { to { transform: rotate(360deg); } }

  .cc-divider { display: flex; align-items: center; gap: 16px; color: #2B1D16; font-size: 15px; }
  .cc-divider::before, .cc-divider::after { content: ''; flex: 1; height: 1px; background: #d9d0c4; }

  .cc-social { width: 64px; height: 64px; border-radius: 50%; border: none; background: #2B1D16; color: #FAF6F0; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background .2s, transform .2s, box-shadow .2s; }
  .cc-social:hover { background: #5A3825; transform: translateY(-4px) scale(1.06); box-shadow: 0 10px 18px rgba(43, 29, 22, 0.25); }
  .cc-social:active { transform: translateY(0) scale(0.98); }

  .cc-link { color: #5A3825; font-weight: 600; text-decoration: none; background: none; border: none; cursor: pointer; font-family: inherit; font-size: inherit; padding: 0; transition: color .2s; }
  .cc-link:hover { color: #B9811D; text-decoration: underline; }

  .cc-error { animation: ccShake .35s; }
  @keyframes ccShake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
  .cc-notice { animation: ccFade .3s; }

  .cc-card { position: absolute; background: #fff; border: 1px solid #2B1D16; box-shadow: 0 10px 24px rgba(43, 29, 22, 0.08); }
  .cc-avatar { position: absolute; width: 58px; height: 58px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 16px; color: #2B1D16; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(43, 29, 22, 0.15); }
  .cc-pill { display: inline-block; border: 1px solid #2B1D16; border-radius: 999px; padding: 4px 14px; font-size: 13px; background: #fff; }

  .cc-float { animation: ccFloat 7s ease-in-out infinite; }
  .cc-float-b { animation-duration: 9s; animation-delay: -2s; }
  .cc-float-c { animation-duration: 11s; animation-delay: -4s; }
  @keyframes ccFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  .cc-bob { animation: ccBob 6s ease-in-out infinite; }
  @keyframes ccBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

  .cc-dot { width: 10px; height: 10px; border-radius: 999px; border: none; padding: 0; cursor: pointer; background: #d9cdb9; transition: width .3s, background .3s; }
  .cc-dot:hover { background: #b9a98f; }
  .cc-dot.active { width: 26px; background: #2B1D16; }
  .cc-caption { animation: ccFade .5s; }
  @keyframes ccFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

  @media (max-width: 960px) {
    .cc-root { grid-template-columns: 1fr; }
    .cc-right { display: none; }
    .cc-left { padding: 24px; }
  }
`;

export default function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);
  const [slide, setSlide] = useState(0);

  // Tukar teks di panel kanan secara automatik (dan set semula bila dot diklik)
  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, [slide]);

  const handleLogin = (e) => {
    e.preventDefault();
    setNotice('');
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }
    setError('');
    setLoading(true);
    // Simulasi log masuk sebentar supaya butang nampak interaktif
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 900);
  };

  const current = slides[slide];

  return (
    <div className="cc-root">
      <style>{styles}</style>

      {/* ===== Kiri: borang log masuk ===== */}
      <div className="cc-left">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BrandLogo size={44} />
          <div>
            <div style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.2 }}>CocoaCheck Sabah</div>
            <div style={{ fontSize: '12px', color: '#736b65' }}>Quality Assurance Portal</div>
          </div>
        </div>

        <div className="cc-center">
          <div className="cc-form">
            <h1 style={{ margin: '0 0 14px 0', textAlign: 'center', fontSize: '46px', lineHeight: 1.15, fontWeight: 700, letterSpacing: '-0.5px', color: '#2B1D16', fontFamily: 'inherit' }}>
              Welcome back!
            </h1>
            <p style={{ margin: '0 0 36px 0', textAlign: 'center', fontSize: '14px', lineHeight: 1.7, color: '#595048' }}>
              Review cocoa batches and keep every assessment on record
              <br />
              with <strong style={{ color: '#2B1D16' }}>CocoaCheck Sabah</strong>.
            </p>

            {error && (
              <div
                key={error}
                className="cc-error"
                style={{ background: '#FDF2F2', color: '#9B1C1C', border: '1px solid #f5c6c6', padding: '10px 18px', borderRadius: '999px', fontSize: '13px', marginBottom: '16px', textAlign: 'center' }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input
                className="cc-input"
                type="email"
                placeholder="Staff email"
                aria-label="Staff email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />

              <div className="cc-pw">
                <input
                  className="cc-input"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="cc-eye"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div style={{ textAlign: 'right', marginTop: '-4px' }}>
                <button
                  type="button"
                  className="cc-link"
                  style={{ fontSize: '13px', fontWeight: 500, color: '#2B1D16' }}
                  onClick={() => setNotice('Please contact your administrator to reset your password.')}
                >
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="cc-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="cc-spinner" /> Signing in...
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </form>

            <div className="cc-divider" style={{ margin: '28px 0 22px' }}>or continue with</div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '28px' }}>
              {altLogins.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  className="cc-social"
                  title={label}
                  aria-label={`Continue with ${label}`}
                  onClick={() => setNotice(`${label} sign-in is not available yet. Please use your email and password.`)}
                >
                  <Icon size={26} />
                </button>
              ))}
            </div>

            {notice && (
              <div key={notice} className="cc-notice" style={{ marginTop: '18px', textAlign: 'center', fontSize: '12px', color: '#946900', background: '#FDF6E2', border: '1px solid #fae3b0', borderRadius: '999px', padding: '8px 16px' }}>
                {notice}
              </div>
            )}
          </div>
        </div>

        <div style={{ textAlign: 'center', fontSize: '14px', color: '#2B1D16' }}>
          Don't have an account?{' '}
          <button type="button" className="cc-link" onClick={() => setNotice('Staff accounts are created by your administrator.')}>
            Contact admin
          </button>
        </div>
      </div>

      {/* ===== Kanan: panel ilustrasi ===== */}
      <div className="cc-right">
        <div className="cc-panel">
          <div className="cc-stage">
            <HeroIllustration />

            {/* Avatar */}
            <div className="cc-avatar cc-float" style={{ left: '8%', top: '9%', background: '#EAD3A8' }}>AZ</div>
            <div className="cc-avatar cc-float cc-float-b" style={{ right: '1%', top: '50%', background: '#C9DDCB' }}>NA</div>

            {/* Kad penilaian */}
            <div className="cc-card cc-float cc-float-c" style={{ left: '0%', bottom: '2%', width: '40%', minWidth: '172px', borderRadius: '20px', padding: '14px 16px' }}>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>Batch SBH-TAW-042</div>
              <div style={{ fontSize: '12px', color: '#736b65', marginTop: '2px' }}>AI confidence</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '10px' }}>
                <span className="cc-pill">Grade B</span>
                <ProgressRing value={87} size={54} />
              </div>
            </div>

            {/* Chip kecil */}
            <div className="cc-card cc-float cc-float-b" style={{ right: '3%', top: '5%', borderRadius: '999px', padding: '8px 14px 8px 8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 500 }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EAF3EC', color: '#276735', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={14} strokeWidth={3} />
              </span>
              Within limit
            </div>
          </div>

          {/* Dot + kapsyen */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '26px' }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`cc-dot ${i === slide ? 'active' : ''}`}
                  aria-label={`Show message ${i + 1}`}
                  onClick={() => setSlide(i)}
                />
              ))}
            </div>
            <p key={slide} className="cc-caption" style={{ margin: 0, fontSize: '24px', lineHeight: 1.5, fontWeight: 400, maxWidth: '520px' }}>
              {current.lead}
              <br />
              <strong style={{ fontWeight: 600 }}>{current.strong}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}