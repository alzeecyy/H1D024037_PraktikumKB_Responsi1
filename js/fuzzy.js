function showPage(pageId) {
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
  });
  
  document.getElementById(pageId).classList.add('active');
  
  const activeLink = document.querySelector(`.nav-links a[onclick="showPage('${pageId}')"]`);
  if(activeLink) activeLink.classList.add('active');
}

function updateSliderValue(id) {
  const val = document.getElementById(id).value;
  document.getElementById(`val-${id}`).innerText = val;
}

window.addEventListener('DOMContentLoaded', () => {
  updateSliderValue('durasi');
  updateSliderValue('frekuensi');
});

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

function hitungFuzzy() {
  let durasi = parseInt(document.getElementById("durasi").value);
  let frekuensi = parseInt(document.getElementById("frekuensi").value);
  let gangguan = document.getElementById("gangguan").value;
  let waktu = document.getElementById("waktu").value;

  let score = 0;
  
  score += (durasi / 12) * 40;
  
  score += (frekuensi / 100) * 30;
  
  if (gangguan === "tinggi") score += 20;
  else if (gangguan === "sedang") score += 10;
  else score += 0;
  
  if (waktu === "malam") score += 10;
  else if (waktu === "siang") score += 5;
  else score += 2;
  
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

  document.getElementById("fuzzy-empty-state").classList.add("hidden");
  const resultContainer = document.getElementById("fuzzy-result-container");
  resultContainer.classList.remove("hidden");
  
  resultContainer.style.animation = 'none';
    resultContainer.offsetHeight;
  resultContainer.style.animation = 'fadeIn 0.5s ease';

  document.getElementById("fuzzy-score").innerText = score;
  
  const badgeEl = document.getElementById("fuzzy-badge");
  badgeEl.className = "badge-display " + badgeClass;
  badgeEl.innerText = kategori;
  
  document.getElementById("fuzzy-explanation").innerText = penjelasan;
  document.getElementById("fuzzy-advice").innerText = saran;
}