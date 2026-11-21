<?php
session_start();

// 1. TURN ON ERROR REPORTING (To see exactly why data isn't showing)
error_reporting(E_ALL);
ini_set('display_errors', 1);

/* 
  TEMPORARILY DISABLED LOGIN CHECK FOR DEBUGGING 
  (So you can view the page even if your session expired)
*/
// if (!isset($_SESSION['user_id'])) {
//     header("Location: homepage_1.php");
//     exit();
// }

// 2. Database configuration
$host = "localhost";
$dbname = "ict_asset_db";
$db_user = "root"; 
$db_pass = ""; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Get Summary Data (Total Assets)
    $stmt = $pdo->query("SELECT COUNT(*) as total FROM assets");
    $total_assets = $stmt->fetch()['total'];

    // Get Summary Data (Total Value)
    $stmt = $pdo->query("SELECT SUM(price) as total_value FROM assets");
    $total_value = $stmt->fetch()['total_value'];
    if(!$total_value) $total_value = 0; 

    // Get Summary Data (Needs Action)
    $stmt = $pdo->query("SELECT COUNT(*) as action_needed FROM assets WHERE status IN ('Rosak', 'Perlu Dinaik Taraf')");
    $action_needed = $stmt->fetch()['action_needed'];

    // Fetch all assets for the table
    $stmt = $pdo->prepare("SELECT * FROM assets ORDER BY date_registered DESC");
    $stmt->execute();
    $assets = $stmt->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $e) {
    // IF DATABASE FAILS, SHOW A BIG RED BOX WITH THE EXACT ERROR
    die("<div style='background:red; color:white; padding:20px; font-family:sans-serif; margin:20px; border-radius:10px;'>
            <h2>⚠️ PANGKALAN DATA GAGAL DISAMBUNG! (DATABASE ERROR)</h2>
            <p><strong>Punca Ralat:</strong> " . $e->getMessage() . "</p>
            <p>Sila pastikan jadual 'assets' telah dicipta di dalam phpMyAdmin (ict_asset_db).</p>
         </div>");
}
?>

<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laporan Aset ICT</title>
    <!-- Google Fonts: Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary-dark: #1e3a8a;
            --primary-light: #3b82f6;
            --bg-body: #f3f4f6;
            --bg-white: #ffffff;
            --text-dark: #1f2937;
            --text-muted: #6b7280;
            --border-color: #e5e7eb;
            --status-good-bg: #d1fae5;
            --status-good-text: #065f46;
            --status-warn-bg: #fef3c7;
            --status-warn-text: #92400e;
            --status-bad-bg: #fee2e2;
            --status-bad-text: #b91c1c;
            --radius: 12px;
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
        body { background-color: var(--bg-body); min-height: 100vh; display: flex; flex-direction: column; }

        .navbar { background-color: var(--bg-white); padding: 15px 40px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100; }
        .brand { display: flex; align-items: center; gap: 10px; font-size: 1.25rem; font-weight: 700; color: #1e3a8a; }
        .nav-buttons { display: flex; gap: 15px; }
        .nav-btn { text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; display: flex; align-items: center; gap: 8px; transition: all 0.3s ease; }
        .btn-back { border: 2px solid var(--text-muted); color: var(--text-muted); }
        .btn-back:hover { border-color: var(--text-dark); color: var(--text-dark); }
        .btn-home { background-color: #1e3a8a; color: white; border: 2px solid #1e3a8a; }
        .btn-home:hover { background-color: #1e40af; }
        .btn-logout { background-color: #ef4444; color: white; border: 2px solid #ef4444; }
        .btn-logout:hover { background-color: #dc2626; }

        .container { max-width: 1200px; margin: 40px auto; padding: 0 20px; width: 100%; }
        .page-header { margin-bottom: 30px; display: flex; justify-content: space-between; align-items: end; }
        .page-title h1 { font-size: 2rem; color: var(--text-dark); }
        .page-title p { color: var(--text-muted); }
        .print-btn { background: var(--bg-white); border: 1px solid var(--border-color); padding: 10px 15px; border-radius: 8px; cursor: pointer; color: var(--text-dark); font-weight: 500; display: flex; align-items: center; gap: 8px; transition: 0.3s; }
        .print-btn:hover { background: #f9fafb; border-color: var(--primary-light); }

        .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .summary-card { background: var(--bg-white); padding: 20px; border-radius: var(--radius); box-shadow: var(--shadow); border-left: 5px solid var(--primary-light); display: flex; justify-content: space-between; align-items: center; }
        .summary-info h3 { font-size: 0.9rem; color: var(--text-muted); font-weight: 500; }
        .summary-info p { font-size: 1.5rem; font-weight: 700; color: var(--text-dark); }
        .summary-icon { font-size: 2rem; color: var(--primary-light); opacity: 0.2; }

        .table-container { background: var(--bg-white); border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; border: 1px solid var(--border-color); }
        .table-responsive { overflow-x: auto; width: 100%; }
        table { width: 100%; border-collapse: collapse; min-width: 900px; }
        thead { background-color: #1e3a8a; color: white; }
        th { text-align: left; padding: 18px 20px; font-weight: 500; font-size: 0.95rem; letter-spacing: 0.5px; white-space: nowrap; }
        td { padding: 12px 20px; border-bottom: 1px solid var(--border-color); font-size: 0.9rem; color: var(--text-dark); vertical-align: middle; }
        tr:last-child td { border-bottom: none; }
        tbody tr:hover { background-color: #f8fafc; }

        .col-id { font-family: monospace; font-weight: 600; color: #1e3a8a; }
        .col-price { font-weight: 600; }

        .asset-thumb { width: 45px; height: 45px; object-fit: cover; border-radius: 8px; border: 2px solid #e5e7eb; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
        .asset-thumb:hover { transform: scale(1.1); box-shadow: 0 4px 8px rgba(0,0,0,0.15); border-color: var(--primary-light); }

        .status-badge { padding: 6px 12px; border-radius: 50px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; display: inline-block; }
        .status-upgrade { background-color: var(--status-warn-bg); color: var(--status-warn-text); }
        .status-good { background-color: var(--status-good-bg); color: var(--status-good-text); }
        .status-bad { background-color: var(--status-bad-bg); color: var(--status-bad-text); }

        .modal { display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.8); backdrop-filter: blur(5px); align-items: center; justify-content: center; animation: fadeIn 0.3s; }
        .modal-content { max-width: 80%; max-height: 80%; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 4px solid white; }
        .modal-close { position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; font-weight: bold; cursor: pointer; transition: 0.3s; }
        .modal-close:hover { color: var(--primary-light); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        footer { margin-top: auto; text-align: center; padding: 20px; color: var(--text-muted); font-size: 0.85rem; }
        @media print { .navbar, .print-btn, footer { display: none; } .container { margin: 0; width: 100%; max-width: 100%; } }
    </style>
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar">
        <div class="brand">
            <i class="fa-solid fa-layer-group"></i>
            <span>Sistem Laporan Aset</span>
        </div>
        <div class="nav-buttons">
            <a href="halaman_pendaftaran_maklumat_aset_1.php" class="nav-btn btn-back"><i class="fa-solid fa-plus"></i> Daftar Aset Baru</a>
            <a href="dashboard_1.php" class="nav-btn btn-home"><i class="fa-solid fa-house"></i> Utama</a>
            <a href="logout.php" class="nav-btn btn-logout"><i class="fa-solid fa-power-off"></i> Log Keluar</a>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="container">
        <div class="page-header">
            <div class="page-title">
                <h1>Laporan Aset ICT</h1>
                <p>Senarai lengkap aset yang telah didaftarkan dalam sistem setakat hari ini.</p>
            </div>
            <button class="print-btn" onclick="window.print()">
                <i class="fa-solid fa-print"></i> Cetak Laporan
            </button>
        </div>

        <!-- DYNAMIC Summary Cards -->
        <div class="summary-grid">
            <div class="summary-card">
                <div class="summary-info">
                    <h3>Jumlah Keseluruhan Aset</h3>
                    <p><?php echo $total_assets; ?></p>
                </div>
                <i class="fa-solid fa-cubes summary-icon"></i>
            </div>
            <div class="summary-card" style="border-left-color: #10b981;">
                <div class="summary-info">
                    <h3>Nilai Keseluruhan</h3>
                    <p>RM <?php echo number_format($total_value, 2); ?></p>
                </div>
                <i class="fa-solid fa-money-bill-wave summary-icon" style="color: #10b981;"></i>
            </div>
            <div class="summary-card" style="border-left-color: #f59e0b;">
                <div class="summary-info">
                    <h3>Aset Perlu Tindakan / Rosak</h3>
                    <p><?php echo $action_needed; ?></p>
                </div>
                <i class="fa-solid fa-triangle-exclamation summary-icon" style="color: #f59e0b;"></i>
            </div>
        </div>

        <!-- DYNAMIC Table -->
        <div class="table-container">
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th style="width: 80px;">Gambar</th>
                            <th>No Daftar</th>
                            <th>Nama Aset</th>
                            <th>Kategori</th>
                            <th>Tarikh Dibeli</th>
                            <th>Harga (RM)</th>
                            <th>Status Aset</th>
                            <th>Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if (count($assets) > 0): ?>
                            <!-- This LOOP generates a row for every asset in your database -->
                            <?php foreach ($assets as $asset): ?>
                                <?php 
                                    // Determine Status Badge Color
                                    $status_class = "status-good"; // Default 'Baik'
                                    if ($asset['status'] == 'Perlu Dinaik Taraf') {
                                        $status_class = "status-upgrade";
                                    } elseif ($asset['status'] == 'Rosak') {
                                        $status_class = "status-bad";
                                    }

                                    // Check Image (If no image uploaded, show a grey placeholder)
                                    $img_src = !empty($asset['image_path']) ? htmlspecialchars($asset['image_path']) : "https://via.placeholder.com/150/e5e7eb/6b7280?text=Tiada+Gambar";
                                ?>
                                <tr>
                                    <td>
                                        <img src="<?php echo $img_src; ?>" 
                                             alt="Gambar Aset" 
                                             class="asset-thumb" 
                                             onclick="openModal(this.src)">
                                    </td>
                                    <td class="col-id"><?php echo htmlspecialchars($asset['asset_no']); ?></td>
                                    <td style="font-weight: 500;"><?php echo htmlspecialchars($asset['asset_name']); ?></td>
                                    <td><?php echo htmlspecialchars($asset['category']); ?></td>
                                    
                                    <!-- Format Date to DD/MM/YYYY -->
                                    <td><?php echo date('d/m/Y', strtotime($asset['date_registered'])); ?></td>
                                    
                                    <!-- Format Price to RM X,XXX.XX -->
                                    <td class="col-price"><?php echo number_format($asset['price'], 2); ?></td>
                                    
                                    <td><span class="status-badge <?php echo $status_class; ?>"><?php echo htmlspecialchars($asset['status']); ?></span></td>
                                    <td><?php echo htmlspecialchars($asset['description']); ?></td>
                                </tr>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <!-- Show this if the database is empty -->
                            <tr>
                                <td colspan="8" style="text-align: center; padding: 40px; color: #6b7280; font-style: italic;">
                                    <i class="fa-solid fa-folder-open" style="font-size: 2rem; margin-bottom: 10px; color: #d1d5db; display: block;"></i>
                                    Tiada data aset direkodkan dalam pangkalan data setakat ini. <br>
                                    Sila daftar aset baru di borang pendaftaran.
                                </td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <footer>
        &copy; <?php echo date("Y"); ?> Jabatan Perkhidmatan Komputer Negeri Sabah (JPKN)
    </footer>

    <!-- Image Modal (Hidden by default, pops up when image clicked) -->
    <div id="imageModal" class="modal">
        <span class="modal-close" onclick="closeModal()">&times;</span>
        <img class="modal-content" id="modalImg">
    </div>

    <!-- JavaScript for Image pop-up Modal -->
    <script>
        function openModal(src) {
            var modal = document.getElementById("imageModal");
            var modalImg = document.getElementById("modalImg");
            modal.style.display = "flex";
            modalImg.src = src;
        }

        function closeModal() {
            document.getElementById("imageModal").style.display = "none";
        }

        window.onclick = function(event) {
            var modal = document.getElementById("imageModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>

</body>
</html>