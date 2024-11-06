// Fungsi Button u/Page ke2
function goPage(pageNumber) {
  let pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById(`page${pageNumber}`).style.display = "block";
}
// Snow Efek
const snowContainer = document.querySelector(".snow-container");
const maxSnowflakes = 100; // Batas jumlah salju maksimum
let snowflakeCount = 0;

function createSnowflake() {
  if (snowflakeCount >= maxSnowflakes) return; // Batasi jumlah salju

  const snowflake = document.createElement("div");
  snowflake.className = "snow";

  const size = Math.random() * 5 + 2; // ukuran acak
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.top = `-${size}px`; // Mulai dari atas layar

  const fallDuration = Math.random() * 5 + 5; // Durasi jatuh acak
  snowflake.style.animationDuration = `${fallDuration}s`;

  snowContainer.appendChild(snowflake);
  snowflakeCount++; // Tambah jumlah salju yang ada

  // Hapus salju setelah jatuh
  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
    snowflakeCount--; // Kurangi jumlah salju yang ada setelah dihapus
  });
}

// Kurangi frekuensi pembuatan salju
setInterval(createSnowflake, 200); // Menyesuaikan interval pembuatan salju (200ms)

simplyCountdown(".simply-countdown", {
  year: 2024,
  month: 12,
  day: 25,
  hours: 18,
  minutes: 0,
  seconds: 0,
  words: {
    days: { singular: "Hari", plural: "Hari" },
    hours: { singular: "Jam", plural: "Jam" },
    minutes: { singular: "Menit", plural: "Menit" },
    seconds: { singular: "Detik", plural: "Detik" },
  },
});

// Buat salju setiap 100ms
setInterval(createSnowflake, 100);
