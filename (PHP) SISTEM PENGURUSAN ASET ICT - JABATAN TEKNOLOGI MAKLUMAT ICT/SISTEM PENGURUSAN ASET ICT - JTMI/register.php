<?php
// Database configuration
$host = "localhost";
$dbname = "ict_asset_db";
$username = "root"; // Change to your database username
$password = "";     // Change to your database password

$message = "";

// Establish Database Connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Database Connection failed: " . $e->getMessage());
}

// Handle Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and capture input
    $fullName = trim(htmlspecialchars($_POST['full_name']));
    $employeeId = trim(htmlspecialchars($_POST['employee_id']));
    $email = trim(htmlspecialchars($_POST['email']));
    $phone = trim(htmlspecialchars($_POST['phone']));
    $pass = $_POST['password'];
    $confirmPass = $_POST['confirm_password'];

    // Basic Validation
    if (empty($fullName) || empty($employeeId) || empty($email) || empty($pass)) {
        $message = "<div class='alert error'>Please fill in all required fields.</div>";
    } elseif ($pass !== $confirmPass) {
        $message = "<div class='alert error'>Passwords do not match.</div>";
    } else {
        // Hash the password securely
        $hashedPassword = password_hash($pass, PASSWORD_DEFAULT);

        // Check if Employee ID or Email already exists
        $checkStmt = $pdo->prepare("SELECT id FROM users WHERE employee_id = ? OR email = ?");
        $checkStmt->execute([$employeeId, $email]);
        
        if ($checkStmt->rowCount() > 0) {
            $message = "<div class='alert error'>Employee ID or Email already registered.</div>";
        } else {
            // Insert new IT Officer into database
            $sql = "INSERT INTO users (full_name, employee_id, email, phone, password, role) 
                    VALUES (?, ?, ?, ?, ?, 'IT_Officer')";
            $stmt = $pdo->prepare($sql);
            
            if ($stmt->execute([$fullName, $employeeId, $email, $phone, $hashedPassword])) {
                $message = "<div class='alert success'>IT Officer registered successfully! You can now access the ICT Asset Management System.</div>";
            } else {
                $message = "<div class='alert error'>Registration failed. Please try again.</div>";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PENDAFTARAN PEGAWAI BERTUGAS | SISTEM DIGITAL PENGURUSAN ASET ICT </title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7f6;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        .register-container {
            background: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 450px;
        }
        .register-container h2 {
            text-align: center;
            color: #333;
            margin-bottom: 5px;
        }
        .register-container p.subtitle {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-bottom: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #333;
            font-weight: bold;
            font-size: 14px;
        }
        .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 14px;
        }
        .form-group input:focus {
            border-color: #007bff;
            outline: none;
        }
        .btn-submit {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
        }
        .btn-submit:hover {
            background-color: #0056b3;
        }
        .alert {
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 4px;
            font-size: 14px;
            text-align: center;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
    </style>
</head>
<body>

<div class="register-container">
    <h2>PENDAFTARAN PEGAWAI BERTUGAS</h2>
    <p class="subtitle">SISTEM DIGITAL PENGURUSAN ASET ICT</p>

    <!-- Display Success or Error Messages -->
    <?php if(!empty($message)) echo $message; ?>

    <form action="register.php" method="POST">
        <div class="form-group">
            <label for="full_name">Nama Penuh Pegawai *</label>
            <input type="text" id="full_name" name="full_name" required placeholder="John Doe">
        </div>

        <div class="form-group">
            <label for="employee_id">ID Pegawai *</label>
            <input type="text" id="employee_id" name="employee_id" required placeholder="IT-10293">
        </div>

        <div class="form-group">
            <label for="email">Emel Korporat *</label>
            <input type="email" id="email" name="email" required placeholder="john.doe@namajabatan.com">
        </div>

        <div class="form-group">
            <label for="phone">Nombor Telefon</label>
            <input type="text" id="phone" name="phone" placeholder="+60 1234 5678">
        </div>

        <div class="form-group">
            <label for="password">Kata Laluan *</label>
            <input type="password" id="password" name="password" required placeholder="••••••••">
        </div>

        <div class="form-group">
            <label for="confirm_password">Pengesahan Kata Laluan *</label>
            <input type="password" id="confirm_password" name="confirm_password" required placeholder="••••••••">
        </div>

        <button type="submit" class="btn-submit">Daftar Pegawai IT</button>

        <div style="text-align: center; margin-top: 15px;">
            <p style="font-size: 14px; color: #666;">Sudah Berdaftar?</p>
            <a href="homepage_1.php" style="display: inline-block; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none; border-radius: 4px; font-size: 14px;">Klik Untuk Log Masuk</a>
        </div>
    </form>

</div>
    </form>
</div>

</body>
</html>