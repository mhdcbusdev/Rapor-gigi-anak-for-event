/* =====================================================================
   config.js — SATU-SATUNYA tempat mengubah pengaturan
   ---------------------------------------------------------------------
   Repo: Rapor Gigi Anak EVENT
   Dipakai bersama oleh index.html, input.html, dan cari.html.
   Kalau URL Apps Script berubah, cukup ganti di SINI saja.
   ===================================================================== */

window.MHDC_CONFIG = {

  /* ------------------------------------------------------------------
     1) WAJIB DIISI — URL Web App Apps Script milik spreadsheet EVENT
     (project terpisah dari yang klinik)
     Apps Script > Deploy > Manage deployments > salin "Web app URL"
     ------------------------------------------------------------------ */
  API_URL: "https://script.google.com/macros/s/AKfycbzlb3PQDvELeeOFiEe_xwKtYWSx9G0m56m7Squ1RglKH76paaJsfderpjQdca7Bcm5tYQ/exec",

  /* 2) Alamat halaman rapor event di GitHub Pages.
        Sesuaikan dengan nama repo yang Mas buat, dan akhiri dengan '?id='
        Harus sama dengan RAPOR_BASE di watzap.gs event. */
  RAPOR_BASE: "https://mhdcbusdev.github.io/Rapor-gigi-anak-for-event/?id=",

  /* 3) Gambar di halaman rapor (upload ke repo ini juga).
        GAMBAR_JUDUL_EN hanya diisi kalau nanti ada gambar judul khusus
        Bahasa Inggris. Dikosongkan = pakai GAMBAR_JUDUL untuk dua-duanya. */
  GAMBAR_JUDUL:    "Judul Rapor Gigi.png",
  GAMBAR_JUDUL_EN: "Judul Rapor Gigi.png",
  GAMBAR_GIGI:     "Gambar Rapor Gigi.png",

  /* 4) Peta gigi berwarna. false = hanya gambar di atas yang tampil */
  PETA_WARNA: false,

  /* 5) Nomor WhatsApp CRO untuk tombol "Tanya klinik". Kosongkan kalau tidak dipakai */
  WA_CRO: "",

  /* 6) Link video edukasi (opsional) */
  VIDEO: { tambal:"", cabut:"", akar:"", karang:"", susunan:"" }
};
