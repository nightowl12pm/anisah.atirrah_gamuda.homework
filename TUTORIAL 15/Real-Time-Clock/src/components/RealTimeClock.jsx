import { useState, useEffect } from 'react';

export default function RealTimeClock() { /*ini export function yang ada di tengah-tengah.
    nda sudah meletakkan perkataan export default di bahagian hadapan fungsi (export default function RealTimeClock()),
    ia sudah cukup untuk memberitahu React bahawa komponen ini dieksport.

    Cara Pertama (Inline Export - yang anda guna sekarang):
    Anda letak export default terus di depan fungsi.

    Cara Kedua (Asingkan di Hujung):
    Anda buat fungsi seperti biasa, kemudian tulis arahan eksport di baris paling bawah.

    Tapi untuk sekarang anda, tidak tulis export function di bahagian paling bawah code.
    */
    const [time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true);
    const [format24Hour, setFormat24Hour] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(new Date());
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning]);

    useEffect(() => {
        document.title = `Clock = ${formatTime(time)}`;

        return () => {
            document.title = 'React App';
        };
    }, [time, format24Hour]);

    const formatTime = (date) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: !format24Hour
        };

        return date.toLocaleTimeString('en-US', options);
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="clock-container" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', display: 'inline-block' }}>
            <div className="date"><strong>{formatDate(time)}</strong></div>
            <div className="time" style={{ fontSize: '2rem', margin: '10px 0' }}>{formatTime(time)}</div>

            <div className="controls" style={{ marginBottom: '10px' }}>
                <button onClick={() => setIsRunning(!isRunning)} style={{ marginRight: '10px', padding: '5px 10px' }}>
                    {isRunning ? 'Pause' : 'Resume'}
                </button>
                <label>
                    <input
                        type="checkbox"
                        checked={format24Hour}
                        onChange={(e) => setFormat24Hour(e.target.checked)}
                    />
                    24-hour format
                </label>
            </div>

            <div className="status" style={{ fontSize: '0.9rem', color: '#666' }}>
                Clock is {isRunning ? 'running' : 'paused'}
            </div>
        </div>
    );
}

