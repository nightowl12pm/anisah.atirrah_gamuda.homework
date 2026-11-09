import React, { useState } from 'react';
import { Sliders, Shield, AlertCircle, Edit2, Lock } from 'lucide-react';

const initialRules = [
  { rule: 'Moisture content', source: 'Measurement', condition: 'Must be at most', limit: '7.5 %', ifNotMet: 'Quality concern', active: true },
  { rule: 'Bean count per 100 g', source: 'Measurement', condition: 'Must be at most', limit: '110', ifNotMet: 'Quality concern', active: true },
  { rule: 'Foreign matter', source: 'Measurement', condition: 'Must be at most', limit: '1.0 %', ifNotMet: 'Quality concern', active: true },
  { rule: 'AI-flagged defects', source: 'AI', condition: 'Must be at most', limit: '3 % of beans', ifNotMet: 'Quality concern', active: true },
  { rule: 'AI average confidence', source: 'AI', condition: 'Must be at least', limit: '70 %', ifNotMet: 'Ask staff to retake photo', active: true },
];

export default function RulesPage() {
  const [rules, setRules] = useState(initialRules);

  const toggleRule = (index) => {
    const updated = [...rules];
    updated[index].active = !updated[index].active;
    setRules(updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Title & Version info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ margin: '0 0 6px 0', color: '#2B1D16', fontSize: '24px', fontWeight: 'bold' }}>Assessment Rules</h1>
          <p style={{ margin: 0, color: '#736b65', fontSize: '14px' }}>Conditions used to produce the preliminary result</p>
        </div>
        <div style={{
          background: '#FDF6E2', border: '1px solid #fae3b0', padding: '6px 12px',
          borderRadius: '6px', fontSize: '12px', color: '#946900', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px'
        }}>
          ● Current version v1.2 · updated 28/09/2026
        </div>
      </div>

      {/* Notice Banner */}
      <div style={{
        background: '#fff', border: '1px solid #e6dfd5', borderRadius: '8px', padding: '16px 20px',
        display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px', color: '#595048'
      }}>
        <AlertCircle size={18} color="#736b65" style={{ flexShrink: 0, marginTop: '1px' }} />
        <div>
          Threshold values are placeholders pending verification against the relevant Malaysian cocoa standard. Changes apply to new assessments only; past assessments keep the rules used at the time.
        </div>
      </div>

      {/* Active Inspection Rules Section */}
      <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#2B1D16', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sliders size={16} color="#5A3825" /> Active Inspection Rules
          </h3>
          <span style={{ fontSize: '12px', color: '#736b65', fontWeight: 600 }}>5 Rules Active</span>
        </div>

        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px', minWidth: '850px' }}>
            <thead>
              <tr style={{ color: '#736b65', borderBottom: '1px solid #e6dfd5', fontSize: '11px', textTransform: 'uppercase' }}>
                <th style={{ padding: '12px 10px' }}>Rule</th>
                <th style={{ padding: '12px 10px' }}>Source</th>
                <th style={{ padding: '12px 10px' }}>Condition</th>
                <th style={{ padding: '12px 10px' }}>Limit</th>
                <th style={{ padding: '12px 10px' }}>If not met</th>
                <th style={{ padding: '12px 10px' }}>Active</th>
                <th style={{ padding: '12px 10px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {rules.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #f2ede4' }}>
                  <td style={{ padding: '14px 10px', fontWeight: 600, color: '#2B1D16' }}>{item.rule}</td>
                  <td style={{ padding: '14px 10px' }}>
                    <span style={{ padding: '2px 8px', background: '#faf6f0', border: '1px solid #e6dfd5', borderRadius: '4px', fontSize: '11px', fontWeight: 600, color: '#595048' }}>
                      {item.source}
                    </span>
                  </td>
                  <td style={{ padding: '14px 10px', color: '#736b65' }}>{item.condition}</td>
                  <td style={{ padding: '14px 10px', fontWeight: 'bold', color: '#2B1D16' }}>{item.limit}</td>
                  <td style={{ padding: '14px 10px' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: '4px', fontSize: '12px', display: 'inline-block',
                      backgroundColor: item.ifNotMet === 'Quality concern' ? '#FDF2F2' : '#FDF6E2',
                      color: item.ifNotMet === 'Quality concern' ? '#9B1C1C' : '#946900',
                      border: `1px solid ${item.ifNotMet === 'Quality concern' ? '#f5c6c6' : '#fae3b0'}`
                    }}>
                      ⚠️ {item.ifNotMet}
                    </span>
                  </td>
                  <td style={{ padding: '14px 10px' }}>
                    <input
                      type="checkbox"
                      checked={item.active}
                      onChange={() => toggleRule(index)}
                      style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: '#5A3825' }}
                    />
                  </td>
                  <td style={{ padding: '14px 10px' }}>
                    <button style={{ background: 'none', border: 'none', color: '#5A3825', cursor: 'pointer', fontWeight: 600, fontSize: '13px' }}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How the result is decided Section */}
      <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e6dfd5', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 'bold', color: '#2B1D16' }}>How the result is decided</h3>
            <p style={{ margin: 0, fontSize: '12px', color: '#736b65' }}>Automated deterministic classification matrix applied to aggregated batch inspection metrics.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', border: '1px solid #e6dfd5', padding: '6px 12px', borderRadius: '6px', color: '#736b65', background: '#faf6f0' }}>
            <Lock size={13} /> Read-only evaluation logic
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Grade A */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', border: '1px solid #c6ebd0', background: '#EAF3EC', borderRadius: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: '#276735', color: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#276735', fontWeight: 600 }}>Threshold Criterion</div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#2B1D16' }}>0 concerns</div>
              </div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#276735', background: '#fff', padding: '4px 12px', borderRadius: '4px', border: '1px solid #c6ebd0' }}>
              ✔ A · No Major Concerns
            </div>
          </div>

          {/* Grade B */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', border: '1px solid #fae3b0', background: '#FDF6E2', borderRadius: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: '#946900', color: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>B</div>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#946900', fontWeight: 600 }}>Threshold Criterion</div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#2B1D16' }}>1 concern</div>
              </div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#946900', background: '#fff', padding: '4px 12px', borderRadius: '4px', border: '1px solid #fae3b0' }}>
              ⚠️ B · Further Inspection Recommended
            </div>
          </div>

          {/* Grade C */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', border: '1px solid #f5c6c6', background: '#FDF2F2', borderRadius: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: '#9B1C1C', color: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>C</div>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#9B1C1C', fontWeight: 600 }}>Threshold Criterion</div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#2B1D16' }}>2 or more concerns</div>
              </div>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#9B1C1C', background: '#fff', padding: '4px 12px', borderRadius: '4px', border: '1px solid #f5c6c6' }}>
              ❌ C · Significant Concerns Detected
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div style={{ textAlign: 'center', fontSize: '12px', color: '#736b65', paddingBottom: '10px' }}>
        CocoaCheck Sabah · Sabah Cocoa Board (Lembaga Koko Malaysia) Quality Assurance Operations
      </div>
    </div>
  );
}