<?php
session_start();

// Database configuration
$host = "localhost";
$dbname = "ict_asset_db";
$db_user = "root"; 
$db_pass = ""; // Leave blank if default XAMPP

$error = "";

// Establish Database Connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Pangkalan Data Gagal Disambung: " . $e->getMessage());
}

// Handle Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $id = trim($_POST['id']);
    $password = $_POST['password'];

    if (empty($id) || empty($password)) {
        $error = "Sila masukkan ID Pengguna dan Kata Laluan.";
    } else {
        // Fetch user by Employee ID from the database
        $stmt = $pdo->prepare("SELECT * FROM users WHERE employee_id = ?");
        $stmt->execute([$id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verify user exists AND hashed password matches
        if ($user && password_verify($password, $user['password'])) {
            
            // Login Success: Store data in Session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['full_name'] = $user['full_name'];
            $_SESSION['role'] = $user['role'];
            
            // Redirect to your specific dashboard
            header("Location: dashboard_1.php");
            exit();

        } else {
            // Login Failed
            $error = "ID Pengguna atau Kata Laluan salah.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistem Pengurusan Aset ICT - JPKN</title>
    <!-- Importing a nice font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary-color: #0f4c81; /* JPKN Corporate Blue feel */
            --secondary-color: #2c3e50;
            --accent-color: #3498db;
            --bg-color: #f3f4f6;
            --card-bg: #ffffff;
            --text-color: #333333;
            --text-light: #6b7280;
            --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        /* Header Section */
        header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 3rem 1rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        header h2 {
            font-weight: 400;
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 0.5rem;
            letter-spacing: 1px;
        }

        header h1 {
            font-weight: 700;
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        header h3 {
            font-weight: 500;
            font-size: 1.2rem;
            opacity: 0.9;
        }

        /* Main Container Layout */
        .container {
            display: grid;
            grid-template-columns: 250px 1fr 300px;
            gap: 2rem;
            max-width: 1200px;
            margin: -2rem auto 2rem; /* Negative top margin to overlap header slightly */
            padding: 0 1.5rem;
            width: 100%;
            align-items: start;
        }

        /* Shared Card Styles */
        .card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: var(--shadow);
            border: 1px solid rgba(0,0,0,0.05);
        }

        /* Left Sidebar - Navigation */
        .nav-menu {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }

        .nav-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 1rem;
            background-color: white;
            color: var(--secondary-color);
            text-decoration: none;
            font-weight: 500;
            border-radius: 8px;
            transition: all 0.3s ease;
            border: 1px solid #e5e7eb;
        }

        .nav-btn:hover {
            background-color: var(--primary-color);
            color: white;
            transform: translateX(5px);
            border-color: var(--primary-color);
        }

        /* Center - Login Form */
        .login-card {
            padding: 2.5rem;
            text-align: center;
        }

        .login-card h2 {
            color: var(--primary-color);
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 1rem;
        }

        .login-card h4 {
            color: var(--text-light);
            font-weight: 500;
            margin-bottom: 1.5rem;
            text-align: left;
        }

        .form-group {
            margin-bottom: 1.5rem;
            text-align: left;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            font-size: 0.9rem;
            color: var(--secondary-color);
            text-transform: uppercase;
        }

        .form-group input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 1rem;
            transition: border-color 0.3s;
            font-family: inherit;
        }

        .form-group input:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        .btn-login {
            width: 100%;
            padding: 0.85rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 0.5rem;
        }

        .btn-login:hover {
            background-color: #0b3d69;
        }

        .new-user-link {
            display: block;
            margin-top: 1.5rem;
            color: var(--accent-color);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
        }

        .new-user-link:hover {
            text-decoration: underline;
        }

        /* Right Sidebar - About */
        .info-card h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.25rem;
        }

        .info-content {
            font-size: 0.95rem;
            color: var(--text-light);
            line-height: 1.6;
        }

        .info-content p {
            margin-bottom: 1rem;
        }

        .address-box {
            background: #f8fafc;
            padding: 1rem;
            border-radius: 8px;
            border-left: 4px solid var(--accent-color);
        }

        /* Footer */
        footer {
            margin-top: auto;
            text-align: center;
            padding: 1.5rem;
            background-color: white;
            color: var(--text-light);
            font-size: 0.9rem;
            border-top: 1px solid #e5e7eb;
        }

        /* Mobile Responsiveness */
        @media (max-width: 900px) {
            .container {
                grid-template-columns: 1fr;
                margin-top: 1rem;
            }
            
            header h1 { font-size: 1.5rem; }
            header h2, header h3 { font-size: 1rem; }
            
            .nav-menu {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .nav-btn {
                flex: 1 1 150px; /* Buttons grow to fit width */
                justify-content: center;
            }
        }
        
        /* Error Alert styling added */
        .alert-error {
            background-color: #f8d7da;
            color: #721c24;
            padding: 10px;
            border-radius: 6px;
            margin-bottom: 15px;
            border: 1px solid #f5c6cb;
            text-align: left;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>

    <!-- Header Section -->
    <header>
        <h2>SELAMAT DATANG KE</h2>
        <h1>SISTEM DIGITAL PENGURUSAN ASET ICT</h1>
        <h3>Jabatan Perkhidmatan Komputer Negeri Sabah</h3>
    </header>

    <!-- Main Content Grid -->
    <div class="container">
        
        <!-- Left Sidebar: Navigation -->
        <nav class="nav-menu">
            <a href="https://jpkn.sabah.gov.my/" class="nav-btn card">
                <i class="fas fa-home"></i> Laman Utama
            </a>
            <a href="https://api.whatsapp.com/send?phone=6088368833&text=%F0%9F%93%9E" class="nav-btn card">
                <i class="fas fa-question-circle"></i> Bantuan Sistem
            </a>
            <a href="https://amc.edu.my/government-sponsored-programme/" class="nav-btn card">
                <i class="fas fa-chalkboard-teacher"></i> Latihan ICT
            </a>
            <a href="https://jpkn.sabah.gov.my/direktori-jpkn/" class="nav-btn card">
                <i class="fas fa-phone-alt"></i> Hubungi Kami
            </a>
        </nav>

        <!-- Center: Login Portal -->
        <main class="card login-card">
            <h2>PORTAL PENDAFTARAN ASET ICT</h2>
            <h4>Log Masuk</h4>
            
            <!-- This shows the Error Message if login fails -->
            <?php if(!empty($error)): ?>
                <div class="alert-error">
                    <i class="fas fa-exclamation-circle"></i> <?php echo $error; ?>
                </div>
            <?php endif; ?>
            
            <form action="" method="POST">
                <div class="form-group">
                    <label for="id">ID Pengguna</label>
                    <input type="text" id="id" name="id" placeholder="Contoh: 78905632 (Sila Masukkan Angka Sahaja)" required>
                </div>
                
                <div class="form-group">
                    <label for="password">Kata Laluan</label>
                    <input type="password" id="password" name="password" placeholder="••••••••" required>
                </div>

                <button type="submit" class="btn-login">
                    Login <i class="fas fa-sign-in-alt" style="margin-left: 5px;"></i>
                </button>

                <a href="register.php" class="new-user-link"> ANDA PENGGUNA BARU? SILA DAFTAR DI SINI.</a>
            </form>
        </main>

        <!-- Right Sidebar: Info -->
        <aside class="card info-card">
            <h3>Mengenai JPKN</h3>
            <div class="info-content">
                <p>Jabatan Perkhidmatan Komputer Negeri.</p>
                <div class="address-box">
                    <strong>Alamat:</strong><br>
                    Jabatan Perkhidmatan Komputer Negeri<br>
                    Tingkat 6 & 7, Blok A<br>
                    Menara Kinabalu Jalan UMS,<br>
                    Teluk Likas, 88400,<br>
                    Kota Kinabalu, SABAH.
                </div>
            </div>
        </aside>

    </div>

    <!-- Footer -->
    <footer>
        &copy; 2025 Jabatan Perkhidmatan Komputer Negeri Sabah
    </footer>

</body>
</html>