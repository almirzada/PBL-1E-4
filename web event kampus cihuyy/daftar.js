// Ambil elemen-elemen penting
const lombaSelect = document.getElementById("lomba");
const anggotaContainer = document.getElementById("anggotaContainer");
const form = document.getElementById("formPendaftaran");

// Fungsi buat bikin input anggota
function buatInputAnggota(jumlah) {
  anggotaContainer.innerHTML = ""; // bersihin dulu

  const label = document.createElement("label");
  label.textContent = "Nama Anggota:";
  anggotaContainer.appendChild(label);

  for (let i = 1; i <= jumlah; i++) {
    const div = document.createElement("div");
    div.classList.add("anggota-item");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Anggota ${i}`;
    input.classList.add("anggota-input");
    input.id = `anggota${i}`;

    div.appendChild(input);
    anggotaContainer.appendChild(div);
  }
}

// Kalau dropdown lomba diubah
lombaSelect.addEventListener("change", function () {
  const lomba = lombaSelect.value;

  if (lomba === "Futsal" || lomba === "Basket") {
    buatInputAnggota(10); // tampilkan 10 kolom anggota
  } else if (lomba === "Badminton") {
    buatInputAnggota(2); // tampilkan 2 kolom anggota
  } else {
    anggotaContainer.innerHTML = ""; // kosongkan kalau belum pilih
  }
});

// Saat form di-submit
form.addEventListener("submit", function (event) {
  const lomba = lombaSelect.value;
  const anggotaInputs = document.querySelectorAll(".anggota-input");
  let jumlahTerisi = 0;

  anggotaInputs.forEach((input) => {
    if (input.value.trim() !== "") jumlahTerisi++;
  });

  // Validasi Futsal dan Basket
  if ((lomba === "Futsal" || lomba === "Basket") && jumlahTerisi < 7) {
    alert("⚠️ Minimal 7 anggota harus diisi untuk lomba " + lomba + "!");
    event.preventDefault();
    return;
  }

  // Validasi Badminton
  if (lomba === "Badminton" && jumlahTerisi < 2) {
    alert("⚠️ Untuk Badminton Ganda, wajib diisi 2 orang!");
    event.preventDefault();
    return;
  }

  alert("✅ Pendaftaran berhasil dikirim!");
});

