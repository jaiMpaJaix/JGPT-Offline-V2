# JGPT-Offline V2

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux%20%7C%20Android%20%7C%20iOS-brightgreen)](https://github.com/jaiMpaJaix/JGPT-Offline-V2)
[![Status: 100% Offline](https://img.shields.io/badge/Engine-100%25%20Offline%20(Local)-emerald)](https://github.com/jaiMpaJaix/JGPT-Offline-V2)
[![GitHub Releases](https://img.shields.io/github/v/release/jaiMpaJaix/JGPT-Offline-V2?include_prereleases&color=orange)](https://github.com/jaiMpaJaix/JGPT-Offline-V2/releases)

> **JGPT-Offline V2** adalah platform asisten kecerdasan buatan (AI) mandiri dan sumber terbuka (*open source*) yang berjalan 100% offline di komputer dan perangkat pribadi Anda. Tidak ada data yang dikirim ke cloud, tidak ada biaya langganan bulanan, dan privasi Anda terlindungi seutuhnya.

---

## Website Resmi & Unduhan

Akses landing page resmi dan pusat unduhan multi-platform di:  
🔗 **[https://jaimpajaix.github.io/JGPT-Offline-V2/](https://jaimpajaix.github.io/JGPT-Offline-V2/)**

---

## Mengapa Memilih JGPT-Offline?

1. **Privasi Penuh (Air-Gapped Ready)**:
   Chat, file PDF, prompt, dan riwayat dokumen Anda tersimpan secara lokal di direktori perangkat Anda sendiri.
2. **Tanpa Koneksi Internet**:
   Bekerja di mana saja: di pesawat, di area tanpa sinyal, atau di jaringan tertutup yang membatasi akses internet.
3. **Multi-Platform**:
   * **Windows 10/11**: Tersedia installer `.exe` dan paket portabel `.zip` dengan akselerasi NVIDIA CUDA dan Vulkan.
   * **macOS (Apple Silicon & Intel)**: Berkas `.dmg` dengan akselerasi Metal penuh untuk chip Apple Silicon M1, M2, M3, dan M4.
   * **Linux**: Format universal AppImage (berjalan di semua distro) dan paket Debian `.deb`.
   * **Android**: Berkas APK mandiri untuk instalasi langsung (Sideload ARM64).
   * **iOS (iPhone & iPad)**: Web Companion mandiri via jaringan Wi-Fi lokal komputer.
4. **Ekosistem Model Terbuka Populer**:
   Mendukung format standar industri GGUF (Llama 3.2, Mistral 7B, Gemma 2, Phi-3 Mini, dan Qwen 2.5 Coder).
5. **Kalkulator Kebutuhan RAM Cerdas**:
   Disesuaikan dengan kapasitas hardware Anda (4 GB, 8 GB, 16 GB, hingga 32 GB+).

---

## Panduan Spesifikasi & Rekomendasi RAM

| Kapasitas RAM | Model yang Disarankan | Karakteristik Performa |
|---|---|---|
| **4 GB** | Llama 3.2 (1B Q4), SmolLM2 (1.7B) | Mode hemat memori, cocok untuk laptop lama atau PC kantor ringan. |
| **8 GB** | Llama 3.2 (3B), Gemma 2 (2B), Phi-3 Mini | Responsif, hemat baterai, asisten percakapan dan ringkasan harian. |
| **16 GB** | Mistral 7B Instruct, Llama 3.1 (8B) | Standar emas pengembang, penalaran seimbang, analisa dokumen PDF. |
| **32 GB+** | Qwen 2.5 Coder (14B/32B), Command-R | Kekuatan penuh untuk pemrograman rumit dan pemrosesan multi-dokumen. |

---

## Cara Menjalankan Aplikasi

### Di Komputer (macOS / Windows / Linux)
1. Unduh installer sesuai OS Anda di tab [Releases](https://github.com/jaiMpaJaix/JGPT-Offline-V2/releases).
2. Pasang aplikasi seperti aplikasi biasa (di Mac cukup drag ke folder Applications).
3. Buka **JGPT-Offline**, lalu masuk ke menu **Model Hub** untuk memilih model yang ingin diunduh (misal Llama 3.2 3B).
4. Setelah file model selesai diunduh, Anda dapat mematikan Wi-Fi dan mulai menggunakan AI secara offline.

### Di Android
1. Unduh berkas `JGPT-Off-Mobile.apk` dari rilis terbaru.
2. Buka berkas APK dan izinkan opsi *"Install from unknown sources"* di pengaturan Android.
3. Buka aplikasi dan pilih model hemat memori (1B - 3B) untuk performa optimal.

---

## Kontribusi & Pengembangan

Kami menyambut kontribusi dari komunitas pengembang:
1. *Fork* repositori ini.
2. Buat branch fitur baru (`git checkout -b fitur/nama-fitur`).
3. Lakukan commit perubahan Anda (`git commit -m "Menambahkan fitur X"`).
4. Dorong ke branch Anda (`git push origin fitur/nama-fitur`).
5. Buat *Pull Request* baru di repositori ini.

---

## Lisensi & Penghargaan

* **Lisensi**: Proyek ini dilisensikan di bawah [Apache License 2.0](LICENSE).
* **Penghargaan Open Source**: Dibangun dengan inspirasi dan fondasi dari mesin inferensi open-source Jan AI ([janhq/jan](https://github.com/janhq/jan)) dan llama.cpp.

---

Dikembangkan oleh **[jaiMpaJaix](https://github.com/jaiMpaJaix)**.
