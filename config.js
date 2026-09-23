/* =====================================================================
   config.js — SATU-SATUNYA tempat mengubah pengaturan
   ---------------------------------------------------------------------
   Repo: Rapor Gigi Anak EVENT
   Dipakai bersama oleh index.html, input.html, dan cari.html.
   Kalau URL Apps Script berubah, cukup ganti di SINI saja.
   ===================================================================== */

window.MHDC_CONFIG = {

  /* ------------------------------------------------------------------
     1) URL Web App Apps Script milik spreadsheet EVENT
     Apps Script > Deploy > Manage deployments > salin "Web app URL"
     ------------------------------------------------------------------ */
  API_URL: "https://script.google.com/macros/s/AKfycbz9TKSx1VB1ae_QKxb_4Lsf1eCBS5QLqtiLDNSH0-RvJM29UXikQgMyILxkrJuqT_Snwg/exec",

  /* 2) Alamat halaman rapor event di GitHub Pages. Akhiri dengan '?id=' */
  RAPOR_BASE: "https://mhdcbusdev.github.io/Rapor-gigi-anak-for-event/?id=",

  /* 3) Gambar di halaman rapor (upload ke repo ini juga). */
  GAMBAR_JUDUL:    "Judul Rapor Gigi.png",
  GAMBAR_JUDUL_EN: "Judul Rapor Gigi.png",
  GAMBAR_GIGI:     "Gambar Rapor Gigi.png",

  /* 4) Peta gigi berwarna. false = hanya gambar di atas yang tampil */
  PETA_WARNA: false,

  /* 5) Nomor WhatsApp CRO untuk tombol "Tanya klinik". Kosongkan kalau tidak dipakai */
  WA_CRO: "",

  /* 5b) TEMPLATE PESAN WHATSAPP (dikirim MANUAL oleh CRO/staf dari cari.html)
         Otomatis pilih bahasa: kolom "Bahasa" = EN -> PESAN_WA_EN, selain itu PESAN_WA.
         Placeholder: {nama} {event} {tgl} {dokter} {link} {promo}
         (Tanpa emoji — aman di semua browser. Teks boleh diedit bebas.) */

  /* Link promo. PROMO_URL_EN kosong = pakai PROMO_URL untuk dua bahasa. */
  PROMO_URL:    "https://mhdc.co.id/wp-content/uploads/Promo-Diskon-Rapor-Gigi-Anak.pdf",
  PROMO_URL_EN: "",

  /* Pesan Bahasa Indonesia */
  PESAN_WA:
`Hai Parents, orang tua dari {nama},
terima kasih sudah berkunjung ke booth Medikids di {event} pada {tgl}!

Ini Rapor Gigi {nama}. Silahkan lihat dan download rapor gigi {nama} melalui link berikut :

{link}

Klaim *PROMO SPESIAL RAPOR GIGI*, klik link ini :
{promo}

Jika ada yang ingin ditanyakan atau butuh bantuan lebih lanjut, Parents bisa langsung balas pesan ini ya. Kami siap membantu!

Salam sehat dan senyum ceria,
Tim Medikids`,

  /* Pesan Bahasa Inggris */
  PESAN_WA_EN:
`Hi Parents of {nama},
thank you for visiting the Medikids booth at {event} on {tgl}!

Here is {nama}'s Dental Report. You can view and download it through the link below :

{link}

Claim your *SPECIAL DENTAL REPORT PROMO*, tap the link below :
{promo}

If you have any questions or need further assistance, feel free to reply to this message. We are happy to help!

Wishing you health and happy smiles,
Medikids Team`,

  /* 6) Link video edukasi (opsional) */
  VIDEO: { tambal:"", cabut:"", akar:"", karang:"", susunan:"" }
};
