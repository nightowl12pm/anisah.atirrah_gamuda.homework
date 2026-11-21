<?php
session_start();

// Database configuration
$host = "localhost";
$dbname = "ict_asset_db";
$db_user = "root"; 
$db_pass = ""; 

$message = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Pangkalan Data Gagal Disambung: " . $e->getMessage());
}

// Handle Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $asset_no = trim($_POST['asset_no']);
    $asset_name = trim($_POST['asset_name']);
    $category = $_POST['category'];
    $date_registered = $_POST['date_registered'];
    $price = $_POST['price'];
    $status = $_POST['status'];
    $description = trim($_POST['description']);
    
    // Default image path if no image is uploaded
    $image_path = "";

    // Handle Image Upload
    if (isset($_FILES['asset_image']) && $_FILES['asset_image']['error'] == 0) {
        $target_dir = "uploads/"; // Folder where images will be saved
        
        // Create the folder if it doesn't exist
        if (!is_dir($target_dir)) {
            mkdir($target_dir, 0777, true);
        }

        // Create a unique file name to prevent overriding
        $file_name = time() . "_" . basename($_FILES["asset_image"]["name"]);
        $target_file = $target_dir . $file_name;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Allow certain file formats
        if(in_array($imageFileType, ['jpg', 'png', 'jpeg'])) {
            if (move_uploaded_file($_FILES["asset_image"]["tmp_name"], $target_file)) {
                $image_path = $target_file; // Save this path to the database
            } else {
                $message = "<div class='alert-error'>Ralat memuat naik gambar.</div>";
            }
        } else {
            $message = "<div class='alert-error'>Sila muat naik format JPG, JPEG, atau PNG sahaja.</div>";
        }
    }

    // Insert into Database
    if (empty($message)) {
        try {
            $sql = "INSERT INTO assets (asset_no, asset_name, category, date_registered, price, status, description, image_path) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            $stmt = $pdo->prepare($sql);
            
            if ($stmt->execute([$asset_no, $asset_name, $category, $date_registered, $price, $status, $description, $image_path])) {
                $message = "<div class='alert-success'>
                                <strong>Berjaya!</strong> Aset ICT telah direkodkan. 
                                <a href='data_saved_table_view_1.php' style='color:#1e3a8a; font-weight:bold;'>Lihat Laporan</a>
                            </div>";
            }
        } catch(PDOException $e) {
            // Error 23000 means duplicate entry (same asset number)
            if ($e->getCode() == 23000) {
                $message = "<div class='alert-error'>Ralat: No Daftar Aset '$asset_no' telah wujud dalam sistem!</div>";
            } else {
                $message = "<div class='alert-error'>Ralat Sistem: " . $e->getMessage() . "</div>";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pendaftaran Aset ICT</title>
    <!-- Google Fonts: Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* [YOUR EXACT CSS - NO CHANGES HERE] */
        :root {
            --primary-dark: #1e3a8a; --primary-light: #3b82f6; --bg-body: #f3f4f6; --bg-white: #ffffff;
            --text-dark: #1f2937; --text-muted: #6b7280; --border-color: #e5e7eb;
            --btn-save: #1e3a8a; --btn-edit: #f59e0b; --btn-read: #f3f4f6; --btn-delete: #ef4444;
            --radius: 12px; --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
        body { background-color: var(--bg-body); min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 40px 20px; }
        .form-container { background: var(--bg-white); width: 100%; max-width: 850px; border-radius: 20px; box-shadow: var(--shadow); padding: 40px; border-top: 5px solid var(--primary-dark); }
        .form-section-title { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; color: var(--primary-dark); font-size: 1.5rem; font-weight: 700; }
        .form-instruction { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 30px; font-style: italic; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
        .full-width { grid-column: span 2; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-size: 0.9rem; font-weight: 600; color: var(--text-dark); }
        .input-wrapper { position: relative; display: flex; align-items: center; }
        .input-wrapper i { position: absolute; left: 15px; color: var(--text-muted); font-size: 1rem; pointer-events: none; }
        .form-control { width: 100%; padding: 12px 15px 12px 45px; border: 1px solid var(--border-color); border-radius: var(--radius); font-size: 0.95rem; color: var(--text-dark); background: #fafafa; transition: all 0.3s ease; outline: none; }
        .form-control:focus { background: #fff; border-color: var(--primary-light); box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }
        textarea.form-control { resize: vertical; min-height: 100px; }
        .currency-wrapper input { padding-left: 50px; }
        .currency-symbol { position: absolute; left: 15px; font-weight: 600; color: var(--primary-dark); font-size: 0.9rem; }
        .upload-area { border: 2px dashed var(--border-color); background-color: #fafafa; border-radius: var(--radius); padding: 20px; text-align: center; cursor: pointer; transition: all 0.3s ease; position: relative; min-height: 160px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; }
        .upload-area:hover, .upload-area.dragover { border-color: var(--primary-light); background-color: #eff6ff; }
        .upload-placeholder i { font-size: 2.5rem; color: var(--primary-light); margin-bottom: 10px; }
        .upload-placeholder p { font-weight: 500; color: var(--text-dark); }
        .upload-placeholder span { font-size: 0.8rem; color: var(--text-muted); }
        .image-preview-container { display: none; width: 100%; height: 100%; position: absolute; top: 0; left: 0; background: #fff; }
        .image-preview-container img { width: 100%; height: 100%; object-fit: contain; padding: 10px; }
        .btn-remove-image { position: absolute; top: 10px; right: 10px; background: rgba(239, 68, 68, 0.9); color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .btn-remove-image:hover { transform: scale(1.1); background: #ef4444; }
        .button-group { display: flex; justify-content: flex-end; gap: 15px; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-color); }
        .btn { padding: 12px 24px; border-radius: 8px; border: none; font-size: 0.95rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: transform 0.2s; color: white; }
        .btn:hover { transform: translateY(-2px); }
        .btn-save { background-color: var(--btn-save); }
        .btn-edit { background-color: var(--btn-edit); }
        .btn-read { background-color: var(--btn-read); color: var(--text-dark); border: 1px solid #d1d5db; }
        .btn-delete { background-color: var(--btn-delete); }
        @media (max-width: 768px) { .form-grid { grid-template-columns: 1fr; } .full-width { grid-column: span 1; } .button-group { flex-direction: column-reverse; } .btn { width: 100%; justify-content: center; } }

        /* NEW: Alerts Styling */
        .alert-success { background-color: #d1fae5; color: #065f46; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #10b981; }
        .alert-error { background-color: #fee2e2; color: #b91c1c; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 5px solid #ef4444; }
    </style>
</head>
<body>

    <div class="form-container">
        
        <!-- Navbar Back Link (Optional) -->
        <a href="dashboard_1.php" style="text-decoration: none; color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px; display: inline-block;">
            <i class="fa-solid fa-arrow-left"></i> Kembali ke Dashboard
        </a>

        <div class="form-section-title">
            <i class="fa-solid fa-layer-group"></i>
            Pendaftaran Aset ICT
        </div>
        <p class="form-instruction">Sila masukkan data yang berkenaan dengan teliti.</p>

        <!-- Display Success/Error Message -->
        <?php if(!empty($message)) echo $message; ?>

        <!-- Make sure action is "" to submit to this page, and enctype is set -->
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="form-grid">
                
                <div class="form-group">
                    <label>No Daftar</label>
                    <div class="input-wrapper">
                        <i class="fa-solid fa-barcode"></i>
                        <input type="text" name="asset_no" class="form-control" placeholder="Contoh: ICT-2025-001" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Nama Aset</label>
                    <div class="input-wrapper">
                        <i class="fa-solid fa-computer"></i>
                        <input type="text" name="asset_name" class="form-control" placeholder="Contoh: HP ProDesk 400" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Kategori</label>
                    <div class="input-wrapper">
                        <i class="fa-solid fa-list"></i>
                        <select name="category" class="form-control" required>
                            <option value="" disabled selected>Pilih Kategori</option>
                            <option value="Komputer: All-In-One">Komputer: All-In-One</option>
                            <option value="Komputer: Desktop">Komputer: Desktop</option>
                            <option value="Laptop">Komputer: Laptop</option>
                            <option value="Pencetak">Pencetak</option>
                            <option value="Server">Server</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>Tarikh Perolehan</label>
                    <div class="input-wrapper">
                        <i class="fa-regular fa-calendar-days"></i>
                        <input type="date" name="date_registered" class="form-control" required>
                    </div>
                </div>

                <div class="form-group full-width">
                    <label>Keterangan Aset</label>
                    <div class="input-wrapper">
                        <i class="fa-solid fa-align-left" style="top: 20px;"></i>
                        <textarea name="description" class="form-control" placeholder="Sebagai rujukan sila isi maklumat tambahan mengenai Aset ICT ini..."></textarea>
                    </div>
                </div>

                <div class="form-group full-width">
                    <label>Gambar Aset</label>
                    <div class="upload-area" id="drop-zone" onclick="document.getElementById('file-input').click()">
                        <input type="file" id="file-input" name="asset_image" accept="image/jpeg, image/png, image/jpg" hidden>
                        
                        <div class="upload-placeholder" id="upload-placeholder">
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                            <p>Klik atau seret gambar ke sini</p>
                            <span>JPG, PNG (Maksimum 5MB)</span>
                        </div>

                        <div class="image-preview-container" id="preview-container">
                            <img id="image-preview" src="#" alt="Asset Preview">
                            <button type="button" class="btn-remove-image" id="remove-btn" title="Padam Gambar">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>Harga Aset</label>
                    <div class="input-wrapper currency-wrapper">
                        <span class="currency-symbol">RM</span>
                        <input type="number" step="0.01" name="price" class="form-control" placeholder="0.00" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Status Aset</label>
                    <div class="input-wrapper">
                        <i class="fa-solid fa-circle-info"></i>
                        <select name="status" class="form-control" required>
                            <!-- Values match laporan_aset.php logic -->
                            <option value="Baik">Baik</option>
                            <option value="Perlu Dinaik Taraf">Perlu Dinaik Taraf</option>
                            <option value="Rosak">Rosak</option>
                        </select>
                    </div>
                </div>

            </div>

            <!-- Action Buttons -->
            <div class="button-group">
                <a href="data_saved_table_view_1.php" class="btn btn-read" style="text-decoration: none;"><i class="fa-solid fa-book-open"></i> Lihat Laporan</a>
                <!-- We will make the Simpan button trigger the Form Submit -->
                <button type="submit" class="btn btn-save"><i class="fa-solid fa-floppy-disk"></i> Simpan Maklumat</button>
            </div>
        </form>
    </div>

    <!-- Script for Image Preview -->
    <script>
        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('file-input');
        const placeholder = document.getElementById('upload-placeholder');
        const previewContainer = document.getElementById('preview-container');
        const imagePreview = document.getElementById('image-preview');
        const removeBtn = document.getElementById('remove-btn');

        fileInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) showPreview(file);
        });

        dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
        dropZone.addEventListener('dragleave', () => { dropZone.classList.remove('dragover'); });
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                fileInput.files = e.dataTransfer.files; 
                showPreview(file);
            }
        });

        function showPreview(file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                placeholder.style.display = 'none';
                previewContainer.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }

        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            fileInput.value = ''; 
            imagePreview.src = '#';
            previewContainer.style.display = 'none';
            placeholder.style.display = 'block';
        });
    </script>
</body>
</html>