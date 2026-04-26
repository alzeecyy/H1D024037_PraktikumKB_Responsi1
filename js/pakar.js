function resetPakar() {
  for (let i = 1; i <= 10; i++) {
    document.getElementById(`gejala-${i}`).checked = false;
  }
  
  document.getElementById("pakar-empty-state").classList.remove("hidden");
  document.getElementById("pakar-result-container").classList.add("hidden");
}

function diagnosa() {
  let gejalaTerpilih = 0;
  let gejalaFisik = 0;
  let gejalaPsikologis = 0;
  let gejalaSosial = 0;

  for (let i = 1; i <= 10; i++) {
    if (document.getElementById(`gejala-${i}`).checked) {
      gejalaTerpilih++;
      if (i === 1 || i === 2 || i === 10) gejalaFisik++;
      if (i === 3 || i === 4 || i === 7 || i === 8) gejalaPsikologis++;
      if (i === 5 || i === 6 || i === 9) gejalaSosial++;
    }
  }

  let persentase = Math.round((gejalaTerpilih / 10) * 100);
  let kategori = "";
  let badgeClass = "";
  let analisis = `Anda mengalami ${gejalaTerpilih} dari 10 gejala kecanduan. `;
  let solusi = "";

  if (gejalaFisik >= 2) analisis += "Terdapat dampak fisik yang signifikan. ";
  if (gejalaPsikologis >= 2) analisis += "Mental dan psikologis Anda mulai terganggu. ";
  if (gejalaSosial >= 2) analisis += "Kehidupan sosial dan produktivitas Anda ikut terdampak. ";

  if (gejalaTerpilih >= 8) {
    kategori = "KECANDUAN BERAT";
    badgeClass = "badge-danger";
    solusi = "Kondisi Anda memerlukan tindakan serius. Lakukan 'Digital Detox' segera. Jika perlu, konsultasikan masalah kecemasan Anda (FOMO) dengan psikolog atau tenaga profesional.";
  } else if (gejalaTerpilih >= 5) {
    kategori = "KECANDUAN SEDANG";
    badgeClass = "badge-warning";
    solusi = "Mulai terapkan batasan screen-time. Hapus aplikasi yang sering membuat Anda scrolling tanpa henti. Perbanyak aktivitas fisik seperti olahraga atau membaca buku cetak.";
  } else if (gejalaTerpilih >= 2) {
    kategori = "KECANDUAN RINGAN";
    badgeClass = "badge-info";
    solusi = "Anda memiliki sedikit gejala kecanduan. Jauhkan HP setidaknya 1 jam sebelum tidur dan cobalah tidak membuka HP segera setelah bangun tidur.";
  } else {
    kategori = "TIDAK KECANDUAN";
    badgeClass = "badge-success";
    solusi = "Pola penggunaan gawai Anda sangat sehat. Pertahankan kedisiplinan ini dan gunakan teknologi hanya untuk produktivitas!";
  }

  document.getElementById("pakar-empty-state").classList.add("hidden");
  const resultContainer = document.getElementById("pakar-result-container");
  resultContainer.classList.remove("hidden");
  
  resultContainer.style.animation = 'none';
  resultContainer.offsetHeight;
  resultContainer.style.animation = 'fadeIn 0.5s ease';

  document.getElementById("pakar-score").innerText = persentase + "%";
  
  const badgeEl = document.getElementById("pakar-badge");
  badgeEl.className = "badge-display " + badgeClass;
  badgeEl.innerText = kategori;
  
  document.getElementById("pakar-explanation").innerText = analisis;
  document.getElementById("pakar-advice").innerText = solusi;
}