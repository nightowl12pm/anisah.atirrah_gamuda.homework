<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aset ICT Dashboard</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            /* Theme Colors: "Chocolate Blue" Interpretation (Rich Royal Blue & Slate) */
            --primary-dark: #1e3a8a; /* Deep Blue */
            --primary-light: #3b82f6; /* Brighter Blue */
            --accent-purple: #4f46e5; /* Indigo accent */
            --bg-body: #f3f4f6;
            --bg-white: #ffffff;
            --text-dark: #1f2937;
            --text-muted: #6b7280;
            --success: #10b981;
            
            /* Spacing & Borders */
            --radius: 12px;
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            --sidebar-width: 260px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: var(--bg-body);
            display: flex;
            min-height: 100vh;
            color: var(--text-dark);
        }

        /* --- Sidebar --- */
        .sidebar {
            width: var(--sidebar-width);
            background: var(--bg-white);
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100vh;
            border-right: 1px solid #e5e7eb;
            z-index: 10;
        }

        .logo-area {
            padding: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--primary-dark);
            font-size: 1.5rem;
            font-weight: 700;
            border-bottom: 1px solid #f0f0f0;
        }

        .logo-area i {
            color: var(--primary-light);
        }

        .nav-links {
            list-style: none;
            padding: 20px 15px;
            flex-grow: 1;
        }

        .nav-links li {
            margin-bottom: 8px;
        }

        .nav-links a {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 14px 18px;
            text-decoration: none;
            color: var(--text-muted);
            font-weight: 500;
            border-radius: var(--radius);
            transition: all 0.3s ease;
        }

        .nav-links a:hover, .nav-links a.active {
            background-color: #eff6ff; /* Light blue tint */
            color: var(--primary-dark);
        }

        .nav-links a i {
            font-size: 1.2rem;
            width: 24px;
            text-align: center;
        }

        .logout-area {
            padding: 20px;
            border-top: 1px solid #f0f0f0;
        }

        .logout-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #ef4444; /* Red for logout */
            text-decoration: none;
            font-weight: 600;
            padding: 10px;
        }

        /* --- Main Content --- */
        .main-content {
            margin-left: var(--sidebar-width);
            flex: 1;
            padding: 20px 40px;
        }

        /* Top Bar */
        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            background: var(--bg-white);
            padding: 15px 30px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
        }

        .search-box {
            background: #f3f4f6;
            padding: 10px 20px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            width: 400px;
        }

        .search-box input {
            border: none;
            background: transparent;
            outline: none;
            width: 100%;
            margin-left: 10px;
            color: var(--text-dark);
        }

        .user-profile {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .user-info {
            text-align: right;
        }

        .user-info h4 {
            font-size: 0.9rem;
            margin-bottom: 2px;
        }

        .user-info p {
            font-size: 0.75rem;
            color: var(--text-muted);
        }

        .avatar {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--primary-light);
        }

        /* Dashboard Cards */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .card {
            /* The Chocolate Blue Gradient */
            background: linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-purple) 100%);
            padding: 30px;
            border-radius: 20px;
            color: white;
            box-shadow: 0 10px 20px -5px rgba(30, 58, 138, 0.4);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card-content h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .card-content p {
            font-size: 0.9rem;
            opacity: 0.9;
            font-weight: 300;
        }

        .card-icon {
            position: absolute;
            right: 25px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 3rem;
            opacity: 0.2;
        }

        /* Specific Gradient Tweaks for Variety (Optional) */
        .card:nth-child(2) { background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); }
        .card:nth-child(3) { background: linear-gradient(135deg, #4338ca 0%, #6366f1 100%); }
        .card:nth-child(4) { background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%); }


        /* Table Section */
        .table-section {
            background: var(--bg-white);
            border-radius: 20px;
            padding: 30px;
            box-shadow: var(--shadow);
        }

        .table-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }

        .table-header h3 {
            font-size: 1.4rem;
            color: var(--primary-dark);
        }

        .btn-view {
            background: var(--text-dark);
            color: white;
            padding: 10px 25px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            transition: background 0.3s;
        }

        .btn-view:hover {
            background: black;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            text-align: left;
            padding: 15px 10px;
            color: var(--text-muted);
            font-weight: 600;
            font-size: 0.9rem;
            border-bottom: 2px solid #f3f4f6;
        }

        td {
            padding: 18px 10px;
            border-bottom: 1px solid #f3f4f6;
            font-size: 0.95rem;
            color: var(--text-dark);
            font-weight: 500;
        }

        tr:last-child td {
            border-bottom: none;
        }

        tr:hover td {
            background-color: #f9fafb;
        }

        .status-badge {
            background-color: #d1fae5;
            color: #065f46;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: inline-block;
        }

    </style>
</head>
<body>

    <!-- Sidebar -->
    <aside class="sidebar">
        <div class="logo-area">
            <i class="fa-solid fa-layer-group"></i>
            Aset ICT
        </div>
        <ul class="nav-links">
            <li><a href="dashboard_1.php" class="active"><i class="fa-solid fa-grid-2"></i> Utama</a></li>
            <li><a href="halaman_pendaftaran_maklumat_aset_1.php"><i class="fa-solid fa-calculator"></i> Daftar Aset ICT</a></li>
            <li><a href="data_saved_table_view_1.php"><i class="fa-solid fa-file-lines"></i> Laporan</a></li>
            <li><a href="simpan_maklumat_aset_1.php"><i class="fa-solid fa-building-columns"></i> Penempatan Aset</a></li>
            <li><a href="pegawai_bertugas.php"><i class="fa-solid fa-user-tie"></i> Pegawai Bertugas</a></li>
            <li><a href="senarai_pegawai.php"><i class="fa-solid fa-gear"></i> Tetapan</a></li>
        </ul>
        <div class="logout-area">
            <a href="exit_page_1.php" class="logout-btn"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Keluar</a>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        
        <!-- Top Bar -->
        <header class="top-bar">
            <div class="hamburger">
                <i class="fa-solid fa-bars" style="font-size: 1.5rem; cursor: pointer; color: var(--text-muted);"></i>
            </div>
            
            <div class="search-box">
                <i class="fa-solid fa-magnifying-glass" style="color: #9ca3af;"></i>
                <input type="text" placeholder="Search...">
            </div>

            <div class="user-profile">
                <div class="user-info">
                    <h4>Selamat Datang, Nur Anisah</h4>
                    <p>Admin</p>
                </div>
                <!-- Using a placeholder image for avatar -->
                <img src="https://ui-avatars.com/api/?name=Nur+Anisah&background=1e3a8a&color=fff" alt="Profile" class="avatar">
            </div>
        </header>

        <!-- Stats Cards -->
        <section class="card-grid">
            <div class="card">
                <div class="card-content">
                    <h2>60.5k</h2>
                    <p>Jumlah Keseluruhan Tahun</p>
                </div>
                <i class="fa-solid fa-eye card-icon"></i>
            </div>

            <div class="card">
                <div class="card-content">
                    <h2>150</h2>
                    <p>Kepuasan Pengguna</p>
                </div>
                <i class="fa-solid fa-thumbs-up card-icon"></i>
            </div>

            <div class="card">
                <div class="card-content">
                    <h2>320</h2>
                    <p>Aduan</p>
                </div>
                <i class="fa-solid fa-comments card-icon"></i>
            </div>

            <div class="card">
                <div class="card-content">
                    <h2>70</h2>
                    <p>Projek Selesai</p>
                </div>
                <i class="fa-solid fa-circle-check card-icon"></i>
            </div>
        </section>

        <!-- Registration Table -->
        <section class="table-section">
            <div class="table-header">
                <h3>Senarai Pendaftaran</h3>
                <a href="#" class="btn-view">Paparkan</a>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Aset ICT</th>
                        <th>Kos</th>
                        <th>Maklum Balas</th>
                        <th style="text-align: right;">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aset 73</td>
                        <td>2.9k</td>
                        <td>210</td>
                        <td style="text-align: right;"><span class="status-badge">Selesai</span></td>
                    </tr>
                    <tr>
                        <td>Aset 72</td>
                        <td>1.5k</td>
                        <td>360</td>
                        <td style="text-align: right;"><span class="status-badge">Selesai</span></td>
                    </tr>
                    <tr>
                        <td>Aset 71</td>
                        <td>1.1k</td>
                        <td>150</td>
                        <td style="text-align: right;"><span class="status-badge">Selesai</span></td>
                    </tr>
                    <tr>
                        <td>Aset 70</td>
                        <td>1.2k</td>
                        <td>420</td>
                        <td style="text-align: right;"><span class="status-badge">Selesai</span></td>
                    </tr>
                    <tr>
                        <td>Aset 69</td>
                        <td>2.6k</td>
                        <td>190</td>
                        <td style="text-align: right;"><span class="status-badge">Selesai</span></td>
                    </tr>
                    <tr>
                        <td>Aset 68</td>
                        <td>1.9k</td>
                        <td>390</td>
                        <td style="text-align: right;"><span class="status-badge">Selesai</span></td>
                    </tr>
                </tbody>
            </table>
        </section>

    </main>

</body>
</html>