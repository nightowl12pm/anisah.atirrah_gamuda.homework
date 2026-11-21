<?php
session_start();

// PROTECT THE PAGE: Redirect to login if not logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: homepage_1.php");
    exit();
}

// Database configuration
$host = "localhost";
$dbname = "ict_asset_db";
$db_user = "root"; 
$db_pass = ""; 

// Establish Database Connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Fetch all registered users from the database
    $stmt = $pdo->prepare("SELECT full_name, employee_id, email, phone, role, created_at FROM users ORDER BY created_at DESC");
    $stmt->execute();
    $officers = $stmt->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $e) {
    die("Pangkalan Data Gagal Disambung: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Senarai Pegawai IT - Sistem Pengurusan Aset ICT</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary-color: #0f4c81; 
            --secondary-color: #2c3e50;
            --accent-color: #3498db;
            --bg-color: #f3f4f6;
            --card-bg: #ffffff;
            --text-color: #333333;
            --text-light: #6b7280;
            --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background-color: var(--bg-color); color: var(--text-color); display: flex; flex-direction: column; min-height: 100vh; }

        header { background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 2rem 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        header h1 { font-weight: 700; font-size: 1.8rem; margin-bottom: 0.5rem; }

        .container { display: grid; grid-template-columns: 250px 1fr; gap: 2rem; max-width: 1200px; margin: -2rem auto 2rem; padding: 0 1.5rem; width: 100%; align-items: start; }
        
        .card { background: var(--card-bg); border-radius: 12px; padding: 1.5rem; box-shadow: var(--shadow); border: 1px solid rgba(0,0,0,0.05); }

        /* Navigation */
        .nav-menu { display: flex; flex-direction: column; gap: 0.8rem; }
        .nav-btn { display: flex; align-items: center; gap: 10px; padding: 1rem; background-color: white; color: var(--secondary-color); text-decoration: none; font-weight: 500; border-radius: 8px; transition: all 0.3s ease; border: 1px solid #e5e7eb; }
        .nav-btn:hover { background-color: var(--primary-color); color: white; transform: translateX(5px); }
        .nav-logout { background-color: #fee2e2; color: #dc2626; border-color: #fca5a5; margin-top: 1rem;}
        .nav-logout:hover { background-color: #dc2626; color: white; }

        /* Table Styles */
        .content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 2px solid #e5e7eb; padding-bottom: 0.5rem; }
        .content-header h2 { color: var(--primary-color); }
        
        .table-container { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.95rem; }
        th, td { padding: 12px 15px; text-align: left; border-bottom: 1px solid #e5e7eb; }
        th { background-color: var(--primary-color); color: white; font-weight: 600; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.5px; }
        
        /* Make the first table header have rounded corners */
        th:first-child { border-top-left-radius: 8px; }
        th:last-child { border-top-right-radius: 8px; }
        
        tbody tr:hover { background-color: #f8fafc; transition: background-color 0.2s; }
        
        .badge { padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 600; background-color: #e0f2fe; color: #0284c7; }

        footer { margin-top: auto; text-align: center; padding: 1.5rem; background-color: white; color: var(--text-light); font-size: 0.9rem; border-top: 1px solid #e5e7eb; }

        @media (max-width: 900px) {
            .container { grid-template-columns: 1fr; margin-top: 1rem; }
        }
    </style>
</head>
<body>

    <header>
        <h1>SISTEM DIGITAL PENGURUSAN ASET ICT</h1>
        <p>Jabatan Perkhidmatan Komputer Negeri Sabah</p>
    </header>

    <div class="container">
        
        <!-- Left Sidebar: Navigation -->
        <nav class="nav-menu">
            <a href="dashboard_1.php" class="nav-btn card">
                <i class="fas fa-tachometer-alt"></i> Dashboard
            </a>
            <!-- Active Button -->
            <a href="pegawai_bertugas.php" class="nav-btn card" style="background-color: var(--primary-color); color: white;">
                <i class="fas fa-users"></i> Senarai Pegawai IT
            </a>
            <a href="simpan_maklumat_aset_1.php" class="nav-btn card">
                <i class="fas fa-desktop"></i> Senarai Aset
            </a>
            <a href="halaman_pendaftaran_maklumat_aset_1.php" class="nav-btn card">
                <i class="fas fa-plus-circle"></i> Daftar Aset Baru
            </a>
            
            <a href="exit_page_1.php" class="nav-btn card nav-logout">
                <i class="fas fa-sign-out-alt"></i> Log Keluar
            </a>
        </nav>

        <!-- Center: Table Content -->
        <main class="card">
            <div class="content-header">
                <h2>Senarai Pegawai IT Berdaftar</h2>
                <a href="register.php" class="badge" style="text-decoration: none; padding: 8px 12px; background-color: var(--accent-color); color: white;">
                    <i class="fas fa-user-plus"></i> Tambah Pegawai
                </a>
            </div>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama Penuh</th>
                            <th>ID Pekerja</th>
                            <th>Emel Rasmi</th>
                            <th>No. Telefon</th>
                            <th>Peranan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if (count($officers) > 0): ?>
                            <?php $count = 1; foreach ($officers as $officer): ?>
                                <tr>
                                    <td><?php echo $count++; ?></td>
                                    <td style="font-weight: 500; color: var(--secondary-color);">
                                        <?php echo htmlspecialchars($officer['full_name']); ?>
                                    </td>
                                    <td><?php echo htmlspecialchars($officer['employee_id']); ?></td>
                                    <td><?php echo htmlspecialchars($officer['email']); ?></td>
                                    <td><?php echo htmlspecialchars($officer['phone']) ?: '-'; ?></td>
                                    <td><span class="badge"><?php echo htmlspecialchars($officer['role']); ?></span></td>
                                </tr>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <tr>
                                <td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-light);">
                                    Tiada rekod pegawai IT dijumpai.
                                </td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </main>

    </div>

    <footer>
        &copy; 2025 Jabatan Perkhidmatan Komputer Negeri Sabah
    </footer>

</body>
</html>