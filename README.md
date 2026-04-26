# Analisis Doomscrolling

Sistem ini adalah aplikasi web statis untuk membantu pengguna memahami dan menilai kebiasaan doomscrolling melalui dua pendekatan utama:

1. **Sistem Fuzzy Logic** 
2. **Sistem Pakar** 

## Deskripsi Sistem

### Sistem fuzzy (Fuzzy Logic)
Sisfuzzy digunakan untuk memperkirakan tingkat bahaya doomscrolling berdasarkan parameter numeric dan pilihan kualitatif yang bernilai "kabur".

Parameter yang dipakai:
- **Durasi screen time (jam)**
- **Frekuensi membuka HP (kali/hari)**
- **Gangguan produktivitas** (rendah / sedang / tinggi)
- **Waktu penggunaan utama** (pagi / siang / malam)

Logika yang diterapkan:
- Durasi di-normalisasi terhadap maksimum 24 jam
- Frekuensi dinormalisasi terhadap maksimum 100 kali
- Gangguan produktivitas dan waktu penggunaan diberi bobot tetap
- Total skor kemudian dikategorikan menjadi:
  - MASIH AMAN
  - CUKUP RAWAN
  - SANGAT BERBAHAYA

### Sistem pakar 
Sisipakar melakukan diagnosa berbasis rule sederhana dengan memilih gejala-gejala doomscrolling yang sering muncul.

Fitur yang dipakai:
- 10 gejala pilihan checkbox
- Hitungan gejala dibagi menjadi tiga domain:
  - Fisik
  - Psikologis
  - Sosial
- Hasil berupa persentase gejala dan level output:
  - TIDAK KECANDUAN
  - KECANDUAN RINGAN
  - KECANDUAN SEDANG
  - KECANDUAN BERAT

## Sistem yang Dipakai

Aplikasi ini dibangun sebagai halaman web statis menggunakan:
- `index.html` untuk struktur konten
- `css/styles.css` untuk tampilan dan layout
- `js/fuzzy.js` untuk logika Fuzzy Logic
- `js/pakar.js` untuk logika Sistem Pakar

Tidak ada backend atau database. Semua perhitungan dilakukan langsung di sisi klien (browser).

## Cara Penggunaan

1. Buka `index.html` di browser.
2. Gunakan menu navigasi untuk pindah antar halaman:
   - Beranda
   - Fuzzy Logic
   - Sistem Pakar
   - Tentang
3. Pada halaman **Fuzzy Logic**:
   - Atur `Durasi Screen Time` dengan slider
   - Atur `Frekuensi Buka`
   - Pilih level `Gangguan Produktivitas`
   - Pilih `Waktu Penggunaan Utama`
   - Klik tombol **Analisis** untuk melihat hasil
   - Klik **Reset** untuk mengembalikan nilai awal
4. Pada halaman **Sistem Pakar**:
   - Centang gejala yang relevan
   - Klik tombol **Konsultasi**
   - Lihat hasil diagnosa dan saran
   - Klik **Reset** untuk mengosongkan semua pilihan

## Bagian yang Perlu Diperhatikan

- **Batas maksimum durasi** sekarang adalah 24 jam, sehingga hasil analisis lebih realistis.
- **Skor Fuzzy** bersifat estimasi, bukan diagnosa medis.
- **Sistem Pakar** menggunakan rule sederhana; hasilnya sebaiknya dipakai sebagai pengingat atau indikasi, bukan sebagai pengganti konsultasi profesional.

## Struktur File

- `index.html` - Halaman utama dan layout
- `css/styles.css` - Semua styling tampilan
- `js/fuzzy.js` - Logika Fuzzy Logic dan interaksi slider
- `js/pakar.js` - Logika diagnosa sistem pakar
- `README.md` - Dokumentasi proyek

