// import { useState } from 'react';

// function TemperatureConverter() {
//     const [temperature, setTemperature] = useState({
//         celsius: '',
//         fahrenheit: ''
//     });

//     const handleCelsiusChange = (e) => {
//         const value = e.target.value;
//         if (value === '') {
//             setTemperature({ celsius: '', fahrenheit: '' });
//         } else {
//             const celsiusNum = parseFloat(value);
//             const fahrenheitNum = (celsiusNum * 9/5) + 32;
//             setTemperature({
//                 celsius: value,
//                 fahrenheit: isNaN(fahrenheitNum) ? '' : fahrenheitNum.toFixed(2)
//             });
//         }
//     };

//     const handleFahrenheitChange = (e) => {
//         const value = e.target.value;
//         if (value === '') {
//             setTemperature({ celsius: '', fahrenheit: '' });
//         } else {
//             const fahrenheitNum = parseFloat(value);
//             const celsiusNum = (fahrenheitNum - 32) * 5/9;
//             setTemperature({
//                 celsius: isNaN(celsiusNum) ? '' : celsiusNum.toFixed(2),
//                 fahrenheit: value
//             });
//         }
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <h3>Exercise 1: Temperature Converter</h3>
//             <div style={{ marginBottom: '10px' }}>
//                 <label>
//                     Celsius: {' '}
//                     <input
//                         type="number"
//                         value={temperature.celsius}
//                         onChange={handleCelsiusChange}
//                         placeholder="Enter Celsius"
//                     />
//                 </label>
//             </div>
//             <div>
//                 <label>
//                     Fahrenheit: {' '}
//                     <input
//                         type="number"
//                         value={temperature.fahrenheit}
//                         onChange={handleFahrenheitChange}
//                         placeholder="Enter Fahrenheit"
//                     />
//                 </label>
//             </div>
//         </div>
//     );
// }

// export default TemperatureConverter;

import { useState } from "react";

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        setFahrenheit(value === '' ? '' : ((value * 9) / 5 + 32).toFixed(2));
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        setCelsius(value === '' ? '' : (((value - 32) * 5) / 9).toFixed(2));
    };

    return (
        <div>
            <h2>Temperature Converter</h2>
            <label>
                Celsius:
                <input type="number" value={celsius} onChange={handleCelsiusChange} />
            </label>
            <br />
            <label>
                Fahrenheit:
                <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
            </label>
        </div>
    );
}

export default TemperatureConverter;