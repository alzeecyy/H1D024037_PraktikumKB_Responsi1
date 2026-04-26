// Navigasi SPA
function showPage(pageId) {
  // Sembunyikan semua section
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Update link aktif
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
  });
  
  // Tampilkan section yang dipilih
  document.getElementById(pageId).classList.add('active');
  
  // Set link nav aktif (mencari berdasarkan onclick attribute)
  const activeLink = document.querySelector(`.nav-links a[onclick="showPage('${pageId}')"]`);
  if(activeLink) activeLink.classList.add('active');
}

// Update nilai slider secara real-time
function updateSliderValue(id) {
  const val = document.getElementById(id).value;
  document.getElementById(`val-${id}`).innerText = val;
}

window.addEventListener('DOMContentLoaded', () => {
  updateSliderValue('durasi');
  updateSliderValue('frekuensi');
});

// Reset Form Fuzzy
function resetFuzzy() {
  document.getElementById("durasi").value = 6;
  document.getElementById("frekuensi").value = 50;
  document.getElementById("val-durasi").innerText = 6;
  document.getElementById("val-frekuensi").innerText = 50;
  document.getElementById("gangguan").value = "rendah";
  document.getElementById("waktu").value = "pagi";
  
  document.getElementById("fuzzy-empty-state").classList.remove("hidden");
  document.getElementById("fuzzy-result-container").classList.add("hidden");
}

// Logika Analisis Fuzzy
function hitungFuzzy() {
  let durasi = parseInt(document.getElementById("durasi").value);
  let frekuensi = parseInt(document.getElementById("frekuensi").value);
  let gangguan = document.getElementById("gangguan").value;
  let waktu = document.getElementById("waktu").value;

  let score = 0;
  
  // Perhitungan bobot sederhana (simulasi fuzzy)
  // Durasi (Max 12 jam -> bobot 40%)
  score += (durasi / 12) * 40;
  
  // Frekuensi (Max 100 kali -> bobot 30%)
  score += (frekuensi / 100) * 30;
  
  // Gangguan (Bobot 20%)
  if (gangguan === "tinggi") score += 20;
  else if (gangguan === "sedang") score += 10;
  else score += 0;
  
  // Waktu (Bobot 10%)
  if (waktu === "malam") score += 10;
  else if (waktu === "siang") score += 5;
  else score += 2;
  
  // Pembulatan score
  score = Math.round(score);

  let kategori = "";
  let badgeClass = "";
  let saran = "";
  let penjelasan = `Durasi layar Anda ${durasi} jam sehari dengan ${frekuensi} kali membuka HP. Gangguan produktivitas tergolong ${gangguan}.`;

  if (score >= 80) {
    kategori = "SANGAT BERBAHAYA";
    badgeClass = "badge-danger";
    saran = "Segera kurangi penggunaan smartphone! Cari hobi offline dan jauhkan HP dari jangkauan saat tidur.";
  } else if (score >= 50) {
    kategori = "CUKUP RAWAN";
    badgeClass = "badge-warning";
    saran = "Kebiasaan doomscrolling Anda mulai mengkhawatirkan. Cobalah untuk membatasi notifikasi media sosial.";
  } else {
    kategori = "MASIH AMAN";
    badgeClass = "badge-success";
    saran = "Penggunaan gawai Anda masih dalam batas wajar. Pertahankan kebiasaan baik ini!";
  }

  // Tampilkan hasil
  document.getElementById("fuzzy-empty-state").classList.add("hidden");
  const resultContainer = document.getElementById("fuzzy-result-container");
  resultContainer.classList.remove("hidden");
  
  // Animasi fade in
  resultContainer.style.animation = 'none';
  resultContainer.offsetHeight; // trigger reflow
  resultContainer.style.animation = 'fadeIn 0.5s ease';

  document.getElementById("fuzzy-score").innerText = score;
  
  const badgeEl = document.getElementById("fuzzy-badge");
  badgeEl.className = "badge-display " + badgeClass;
  badgeEl.innerText = kategori;
  
  document.getElementById("fuzzy-explanation").innerText = penjelasan;
  document.getElementById("fuzzy-advice").innerText = saran;
}