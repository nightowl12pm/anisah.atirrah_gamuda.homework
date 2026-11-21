<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background-color: #0056b3;
            color: white;
            padding: 15px 0;
            text-align: center;
            margin-bottom: 20px;
        }
        h1 {
            margin: 0;
        }
        main {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #007bff;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tr:hover {
            background-color: #e9e9e9;
        }
        footer {
            text-align: center;
            margin-top: 30px;
            color: #666;
            font-size: 0.9em;
        }
    </style>
</head>
<body>

    <header>
        <h1>Laporan Bulanan Aset ICT</h1>
    </header>

    <main>
        <section>
            <h2>Sales Overview</h2>
            <p>This report provides an overview of sales performance for the current month, detailing product sales and regional distribution.</p>
        </section>

        <section>
            <h2>Detailed Sales Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Region</th>
                        <th>Quantity Sold</th>
                        <th>Unit Price</th>
                        <th>Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>P001</td>
                        <td>Laptop X</td>
                        <td>North</td>
                        <td>15</td>
                        <td>$1200.00</td>
                        <td>$18000.00</td>
                    </tr>
                    <tr>
                        <td>P002</td>
                        <td>Smartphone Y</td>
                        <td>South</td>
                        <td>25</td>
                        <td>$800.00</td>
                        <td>$20000.00</td>
                    </tr>
                    <tr>
                        <td>P003</td>
                        <td>Tablet Z</td>
                        <td>East</td>
                        <td>10</td>
                        <td>$500.00</td>
                        <td>$5000.00</td>
                    </tr>
                    <tr>
                        <td>P004</td>
                        <td>Monitor A</td>
                        <td>West</td>
                        <td>8</td>
                        <td>$300.00</td>
                        <td>$2400.00</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Jabatan Teknologi Maklumat ICT (JTMI). All rights reserved.</p>
    </footer>

</body>
</html>