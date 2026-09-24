document.addEventListener("DOMContentLoaded", function () {
    const monthButton = document.getElementById("statistik-bulan");
    const allButton = document.getElementById("statistik-semua");
    const monthLabel = document.getElementById("statistik-bulan-label");
    const periodLabel = document.getElementById("statistik-periode");

    if (!monthButton || !allButton || !monthLabel || !periodLabel) return;

    const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    const today = new Date();
    const currentPeriod = months[today.getMonth()] + " " + today.getFullYear();

    monthLabel.textContent = currentPeriod;
    periodLabel.textContent = "BULAN " + currentPeriod;

    monthButton.addEventListener("click", function () {
        monthButton.classList.add("active");
        allButton.classList.remove("active");
        periodLabel.textContent = "BULAN " + currentPeriod;
    });

    allButton.addEventListener("click", function () {
        allButton.classList.add("active");
        monthButton.classList.remove("active");
        periodLabel.textContent = "SEMUA PERIODE PELAPORAN";
    });
});
