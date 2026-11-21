<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log Keluar - Aset ICT</title>
    <!-- Google Fonts: Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            /* Theme Colors: "Chocolate Blue" */
            --primary-dark: #1e3a8a; /* Deep Royal Blue */
            --primary-light: #3b82f6;
            --accent: #f59e0b; /* Amber/Gold accent for "Sabah" feel */
            --text-white: #ffffff;
            --text-muted: #e0e7ff;
            
            /* Glassmorphism Effect Variables */
            --glass-bg: rgba(30, 58, 138, 0.85); /* Deep Blue with opacity */
            --glass-border: rgba(255, 255, 255, 0.2);
            --shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            
            /* Background: (JTMI HQ Building) */
            /* Using a high-quality Wikimedia Commons image of the JTMI Administrative Centre */
            background-image: url('www.google.com');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        /* The Overlay to ensure text readability & Theme Color */
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(15, 23, 42, 0.85) 100%);
            z-index: 1;
        }

        /* Main Card Container */
        .logout-card {
            position: relative;
            z-index: 10;
            background: rgba(255, 255, 255, 0.1); /* Frosted Glass */
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
            padding: 50px 40px;
            border-radius: 20px;
            text-align: center;
            max-width: 500px;
            width: 90%;
            box-shadow: var(--shadow);
            color: var(--text-white);
            animation: fadeIn 0.8s ease-out;
        }

        /* Animation for smooth entry */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Icon Styling */
        .icon-wrapper {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px auto;
            border: 2px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }

        .icon-wrapper i {
            font-size: 2.5rem;
            color: #fff;
        }

        /* Typography */
        h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
        }

        p.subtitle {
            font-size: 1.1rem;
            font-weight: 300;
            color: var(--text-muted);
            margin-bottom: 5px;
            line-height: 1.6;
        }

        .farewell {
            font-size: 1.2rem;
            font-weight: 600;
            margin-top: 20px;
            margin-bottom: 40px;
            color: var(--accent); /* Gold accent for "Jumpa Lagi" */
        }

        /* Button */
        .btn-login {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background-color: var(--text-white);
            color: var(--primary-dark);
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-login:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            background-color: #f8fafc;
        }

        /* Footer */
        .footer-text {
            position: absolute;
            bottom: 20px;
            width: 100%;
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.8rem;
            z-index: 10;
        }

    </style>
</head>
<body>

    <!-- Dark Blue Overlay -->
    <div class="overlay"></div>

    <!-- Main Content Card -->
    <div class="logout-card">
        <div class="icon-wrapper">
            <i class="fa-solid fa-check"></i>
        </div>
        
        <h1>Terima Kasih</h1>
        <p class="subtitle">Kerana Menggunakan Perkhidmatan Kami.</p>
        <p class="farewell">Jumpa Lagi.</p>

        <a href="homepage_1.php" class="btn-login">
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
            Log Masuk Semula
        </a>
    </div>

    <!-- Footer Copyright -->
    <div class="footer-text">
        &copy; 2026 Jabatan Teknologi Maklumat ICT (JTMI)
    </div>

</body>
</html>