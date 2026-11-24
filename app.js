/**
 * JGPT-Off Official Website Script
 * Device Auto-Detection, Native Modal Dialogs, RAM Calculator, Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initOsDetection();
  initModals();
  initRamCalculator();
  initMobileNav();
  initInteractiveSimulator();
});

/**
 * 1. Sistem Deteksi OS Otomatis & Penyesuaian Tombol Unduh Utama
 */
function initOsDetection() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform?.toLowerCase() || '';

  const mainDownloadBtn = document.getElementById('mainDownloadBtn');
  const mainDownloadText = document.getElementById('mainDownloadText');
  const detectedOsDetail = document.getElementById('detectedOsDetail');
  const detectedOsIcon = document.getElementById('detectedOsIcon');

  if (!mainDownloadBtn || !mainDownloadText || !detectedOsDetail) return;

  let osType = 'windows'; // Default fallback
  let osTitle = 'Windows (x64)';
  let osSub = 'Installer .exe (571 MB) siap unduh';
  let targetAnchor = '#card-windows';
  let directDownloadUrl = 'https://github.com/janhq/jan/releases/download/v0.8.8/Jan_0.8.8_x64-setup.exe';
  let iconSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>`;

  // Deteksi macOS
  if (userAgent.includes('mac') || platform.includes('mac')) {
    osType = 'mac';
    const isAppleSilicon = isAppleSiliconDevice();
    if (isAppleSilicon) {
      osTitle = 'macOS (Apple Silicon M1-M4)';
      osSub = 'Berkas Universal .dmg (115 MB) siap unduh';
    } else {
      osTitle = 'macOS (Intel)';
      osSub = 'Berkas Universal .dmg (115 MB) siap unduh';
    }
    targetAnchor = '#card-mac';
    directDownloadUrl = 'https://github.com/janhq/jan/releases/download/v0.8.8/Jan_0.8.8_universal.dmg';
    iconSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.93 2.74 1 .08 2.02-.49 2.64-1.24z"/></svg>`;
  }
  // Deteksi Linux
  else if (userAgent.includes('linux') && !userAgent.includes('android')) {
    osType = 'linux';
    osTitle = 'Linux (Universal AppImage)';
    osSub = 'Paket portabel (712 MB) siap unduh';
    targetAnchor = '#card-linux';
    directDownloadUrl = 'https://github.com/janhq/jan/releases/download/v0.8.8/Jan_0.8.8_amd64.AppImage';
    iconSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.002 0c-2.43 0-4.038 1.406-4.038 3.559 0 .809.13 1.714.414 2.64-1.127.842-1.989 2.05-2.408 3.493-.05.174-.083.351-.102.532-1.106.673-1.868 1.838-1.868 3.276 0 1.932 1.378 3.527 3.197 3.87.49 1.956 1.921 3.568 3.805 4.25v2.38h2v-2.38c1.884-.682 3.315-2.294 3.805-4.25 1.819-.343 3.197-1.938 3.197-3.87 0-1.438-.762-2.603-1.868-3.276-.019-.181-.052-.358-.102-.532-.419-1.443-1.281-2.651-2.408-3.493.284-.926.414-1.831.414-2.64C16.04 1.406 14.432 0 12.002 0z"/></svg>`;
  }
  // Deteksi Android
  else if (userAgent.includes('android')) {
    osType = 'android';
    osTitle = 'Android (Berkas APK)';
    osSub = 'Instalasi langsung APK ARM64 (45 MB)';
    targetAnchor = '#card-android';
    directDownloadUrl = 'https://github.com/a-ghorbani/pocketpal-ai/releases/download/v1.24.0/app-prod-release.apk';
    iconSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.1 12 8.1s-3.5902.3116-5.1368.8497L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/></svg>`;
  }
  // Deteksi iPhone/iPad (iOS)
  else if (userAgent.includes('iphone') || userAgent.includes('ipad') || (userAgent.includes('mac') && navigator.maxTouchPoints > 1)) {
    osType = 'ios';
    osTitle = 'iOS (Web Companion)';
    osSub = 'Akses PWA mandiri & host lokal';
    targetAnchor = '#card-ios';
    directDownloadUrl = '#card-ios';
    iconSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-5 21c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5.25-3H6.75V4h10.5v15z"/></svg>`;
  }

  // Terapkan ke UI dan pasang link download langsung
  mainDownloadText.textContent = `Unduh untuk ${osTitle}`;
  detectedOsDetail.textContent = osSub;
  mainDownloadBtn.setAttribute('href', directDownloadUrl);
  if (osType !== 'ios') {
    mainDownloadBtn.setAttribute('download', '');
  }

  if (detectedOsIcon) {
    detectedOsIcon.innerHTML = iconSvg;
  }

  // Klik tombol hero memicu download langsung dan scroll halus ke tips instalasi
  mainDownloadBtn.addEventListener('click', () => {
    const targetElement = document.querySelector(targetAnchor);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        targetElement.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
        targetElement.style.borderColor = 'var(--brand-primary)';
        targetElement.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.3)';
        setTimeout(() => {
          targetElement.style.boxShadow = '';
        }, 2500);
      }, 300);
    }
  });
}

function isAppleSiliconDevice() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return true;
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      if (renderer && renderer.includes('Apple')) {
        return true;
      }
    }
  } catch (err) {
    // Abaikan jika terblokir oleh browser
  }
  return true; // Asumsi default modern Mac
}

/**
 * 2. Native Modal Dialogs (Memenuhi Standar Modern Web Guidance)
 */
function initModals() {
  // OS Selector Dialog
  const osDialog = document.getElementById('os-dialog');
  const openOsBtn = document.getElementById('openOsSelectorBtn');
  const closeOsBtn = document.getElementById('closeOsDialogBtn');

  if (osDialog && openOsBtn && closeOsBtn) {
    openOsBtn.addEventListener('click', () => {
      osDialog.showModal();
    });

    closeOsBtn.addEventListener('click', () => {
      osDialog.close();
    });

    // Light-dismiss fallback: tutup saat klik area backdrop luar
    osDialog.addEventListener('click', (e) => {
      const rect = osDialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        osDialog.close();
      }
    });

    // Klik opsi di dalam modal menutup dialog dan melompat ke kartu OS
    const modalItems = osDialog.querySelectorAll('[data-close-dialog="true"]');
    modalItems.forEach(item => {
      item.addEventListener('click', (e) => {
        osDialog.close();
        const targetId = item.getAttribute('href');
        const targetCard = document.querySelector(targetId);
        if (targetCard) {
          setTimeout(() => {
            targetCard.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      });
    });
  }

  // Mobile Installation Guides Modal
  const guideDialog = document.getElementById('guide-dialog');
  const guideContent = document.getElementById('guideDialogContent');
  const guideTitle = document.getElementById('guide-dialog-title');
  const closeGuideBtn = document.getElementById('closeGuideDialogBtn');
  const confirmGuideBtn = document.getElementById('confirmGuideBtn');

  const openAndroidBtn = document.getElementById('openAndroidGuideBtn');
  const openIosBtn = document.getElementById('openIosGuideBtn');

  if (guideDialog && guideContent) {
    if (closeGuideBtn) closeGuideBtn.addEventListener('click', () => guideDialog.close());
    if (confirmGuideBtn) confirmGuideBtn.addEventListener('click', () => guideDialog.close());

    guideDialog.addEventListener('click', (e) => {
      const rect = guideDialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        guideDialog.close();
      }
    });

    // Panduan Android
    if (openAndroidBtn) {
      openAndroidBtn.addEventListener('click', () => {
        if (guideTitle) guideTitle.textContent = 'Panduan Instalasi Android (APK)';
        guideContent.innerHTML = `
          <div class="guide-step">
            <h4>Langkah 1: Unduh Berkas APK</h4>
            <p>Klik tombol <strong>Unduh File APK (.apk)</strong> di kartu Android untuk mengambil paket aplikasi terbaru dari halaman rilis GitHub.</p>
          </div>
          <div class="guide-step">
            <h4>Langkah 2: Izinkan Sumber Tidak Dikenal</h4>
            <p>Buka <em>Setelan &gt; Keamanan</em> di perangkat Android Anda, lalu aktifkan izin untuk memasang aplikasi dari browser/pengelola berkas (Sideloading).</p>
          </div>
          <div class="guide-step">
            <h4>Langkah 3: Jalankan Model Hemat Memori</h4>
            <p>Untuk smartphone Android dengan RAM 6 GB - 8 GB, disarankan memilih model <strong>Llama 3.2 1B</strong> atau <strong>Qwen 2.5 1.5B</strong> agar penggunaan baterai tetap irit dan suhu perangkat stabil.</p>
          </div>
        `;
        guideDialog.showModal();
      });
    }

    // Panduan iOS
    if (openIosBtn) {
      openIosBtn.addEventListener('click', () => {
        if (guideTitle) guideTitle.textContent = 'Panduan Penggunaan iOS (iPhone & iPad)';
        guideContent.innerHTML = `
          <div class="guide-step">
            <h4>Metode 1: PWA Web Companion (Direkomendasikan)</h4>
            <p>Karena batasan sistem operasi iOS terhadap eksekusi biner AI offline langsung, Anda dapat menjalankan JGPT-Off di komputer (Mac/Windows/Linux) dan mengaksesnya secara instan dari iPhone di jaringan Wi-Fi lokal yang sama:</p>
            <ol>
              <li>Buka JGPT-Off di komputer Anda dan aktifkan fitur <strong>Local API Server</strong> di menu Pengaturan.</li>
              <li>Buka peramban Safari di iPhone Anda, lalu masukkan alamat IP komputer Anda (misal: <code>http://192.168.1.15:1337</code>).</li>
              <li>Ketuk ikon <em>Bagikan (Share)</em> di Safari, lalu pilih <strong>Add to Home Screen (Tambah ke Layar Utama)</strong>.</li>
            </ol>
          </div>
          <div class="guide-step">
            <h4>Metode 2: Rencana TestFlight</h4>
            <p>Versi biner mandiri khusus iOS saat ini sedang dipersiapkan dan akan didistribusikan melalui Apple TestFlight di repositori GitHub resmi.</p>
          </div>
        `;
        guideDialog.showModal();
      });
    }
  }

  // Update Guide & Changelog Dialog
  const updateDialog = document.getElementById('update-dialog');
  const openUpdateBtn = document.getElementById('openUpdateModalBtn');
  const navUpdateBtn = document.getElementById('navUpdateBtn');
  const closeUpdateBtn = document.getElementById('closeUpdateDialogBtn');
  const confirmUpdateBtn = document.getElementById('confirmUpdateBtn');

  if (updateDialog) {
    const showUpdate = () => updateDialog.showModal();

    if (openUpdateBtn) openUpdateBtn.addEventListener('click', showUpdate);
    if (navUpdateBtn) navUpdateBtn.addEventListener('click', showUpdate);

    if (closeUpdateBtn) {
      closeUpdateBtn.addEventListener('click', () => updateDialog.close());
    }

    if (confirmUpdateBtn) {
      confirmUpdateBtn.addEventListener('click', () => {
        updateDialog.close();
        const downloadSection = document.getElementById('unduh');
        if (downloadSection) {
          setTimeout(() => {
            downloadSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      });
    }

    updateDialog.addEventListener('click', (e) => {
      const rect = updateDialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        updateDialog.close();
      }
    });
  }
}

/**
 * 3. Kalkulator Interaktif Kebutuhan RAM Hardware
 */
function initRamCalculator() {
  const tabs = document.querySelectorAll('.ram-tab-btn');
  const resRamLabel = document.getElementById('resRamLabel');
  const resStatusTag = document.getElementById('resStatusTag');
  const resDesc = document.getElementById('resDesc');
  const resTagsContainer = document.getElementById('resTagsContainer');
  const resAdviceBox = document.getElementById('resAdviceBox');

  if (!tabs.length || !resRamLabel || !resStatusTag) return;

  const ramData = {
    '4': {
      label: 'RAM 4 GB Terpilih',
      status: 'Mode Hemat Sumber Daya',
      desc: 'Dapat menjalankan model ultra-ringan dengan kuantisasi Q4. Cocok untuk perangkat lama atau PC kantor ringan.',
      models: ['Llama 3.2 (1B Q4)', 'Qwen 2.5 (0.5B & 1.5B)', 'SmolLM2 (1.7B)'],
      advice: '<strong>Tips Kinerja:</strong> Tutup peramban web dan aplikasi berat lain saat menjalankan model agar sistem operasi tidak mengalami throttling memori swap.'
    },
    '8': {
      label: 'RAM 8 GB Terpilih',
      status: 'Sangat Cocok untuk Laptop Harian',
      desc: 'Kapasitas ini memungkinkan Anda menjalankan model 1B hingga 3B dengan kecepatan penuh, hemat baterai, dan responsif untuk percakapan sehari-hari.',
      models: ['Llama 3.2 (1B & 3B)', 'Gemma 2 (2B)', 'Phi-3 Mini (3.8B Q4)', 'Qwen 2.5 (1.5B)'],
      advice: '<strong>Tips Kinerja:</strong> Jika Anda memiliki kartu grafis terintegrasi (seperti Intel Iris Xe atau AMD Radeon 680M/780M), alokasikan minimal 2 GB VRAM di BIOS untuk akselerasi grafis optimal.'
    },
    '16': {
      label: 'RAM 16 GB Terpilih',
      status: 'Kapasitas Standar Emas Pengembang',
      desc: 'Keseimbangan ideal untuk menjalankan model 7B hingga 9B berkualitas tinggi. Mendukung analisis kode kompleks dan dokumen PDF panjang.',
      models: ['Mistral 7B Instruct', 'Llama 3.1 (8B Instruct)', 'Gemma 2 (9B Q4)', 'Qwen 2.5 Coder (7B)'],
      advice: '<strong>Tips Kinerja:</strong> Pada Mac Apple Silicon (M1/M2/M3/M4), arsitektur Unified Memory memungkinkan model 8B berjalan dengan kecepatan lebih dari 35 token per detik.'
    },
    '32': {
      label: 'RAM 32 GB+ Terpilih',
      status: 'Kekuatan Penuh untuk Riset & Model Besar',
      desc: 'Mampu menjalankan model 14B hingga 32B dengan presisi tinggi, serta mengaktifkan multi-model simultan dan pengindeksan ribuan file sekaligus.',
      models: ['Qwen 2.5 (14B & 32B)', 'DeepSeek Coder V2 (16B)', 'Mistral NeMo (12B Q8)', 'Command-R (35B Q4)'],
      advice: '<strong>Tips Kinerja:</strong> Sangat ideal untuk komputer workstation dengan GPU NVIDIA 12GB - 24GB VRAM atau Mac Studio/Pro dengan RAM terpadu besar.'
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const ramKey = tab.getAttribute('data-ram');
      const data = ramData[ramKey];
      if (!data) return;

      resRamLabel.textContent = data.label;
      resStatusTag.textContent = data.status;
      resDesc.textContent = data.desc;
      resAdviceBox.innerHTML = data.advice;

      // Render tags model
      resTagsContainer.innerHTML = '';
      data.models.forEach(modelName => {
        const tag = document.createElement('span');
        tag.className = 'model-tag-item';
        tag.textContent = modelName;
        resTagsContainer.appendChild(tag);
      });
    });
  });
}

/**
 * 4. Navigasi Mobile Responsif
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (!toggleBtn || !primaryNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    primaryNav.classList.toggle('nav-open');
  });

  // Tutup menu saat salah satu link navigasi ditekan
  const navLinks = primaryNav.querySelectorAll('.nav-link, .btn');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('nav-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * 5. Simulasi Interaktif Playground & Web Terminal JGPT-Off
 */
function initInteractiveSimulator() {
  const modelButtons = document.querySelectorAll('.sidebar-menu .menu-item');
  const activeModelName = document.getElementById('activeModelName');
  const activeModelTag = document.getElementById('activeModelTag');
  const chatBotBadge = document.getElementById('chatBotBadge');
  const mockRamStat = document.getElementById('mockRamStat');
  const mockSpeedStat = document.getElementById('mockSpeedStat');

  const chatStream = document.getElementById('mockChatStream');
  const chatForm = document.getElementById('mockChatForm');
  const userInput = document.getElementById('mockUserInput');
  const promptChips = document.querySelectorAll('.prompt-chip');

  if (!chatForm || !userInput || !chatStream) return;

  const modelConfigs = {
    'llama': {
      name: 'Llama 3.2 3B',
      tag: 'Q4_K_M (2.0 GB)',
      badge: 'JGPT-Off (Llama 3.2)',
      ram: '3.2 GB / 16 GB',
      speed: '42 tok/detik'
    },
    'mistral': {
      name: 'Mistral 7B Instruct',
      tag: 'Q4_K_M (4.1 GB)',
      badge: 'JGPT-Off (Mistral 7B)',
      ram: '5.8 GB / 16 GB',
      speed: '31 tok/detik'
    },
    'gemma': {
      name: 'Gemma 2 (2B)',
      tag: 'Q4_K_M (1.6 GB)',
      badge: 'JGPT-Off (Gemma 2)',
      ram: '2.8 GB / 16 GB',
      speed: '48 tok/detik'
    },
    'qwen': {
      name: 'Qwen 2.5 Coder 7B',
      tag: 'Q4_K_M (4.4 GB)',
      badge: 'JGPT-Off (Qwen Coder)',
      ram: '6.1 GB / 16 GB',
      speed: '29 tok/detik'
    }
  };

  let currentModelKey = 'llama';

  // Ganti model saat tombol sidebar ditekan
  modelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modelButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const modelKey = btn.getAttribute('data-model');
      const cfg = modelConfigs[modelKey];
      if (!cfg) return;

      currentModelKey = modelKey;
      if (activeModelName) activeModelName.textContent = cfg.name;
      if (activeModelTag) activeModelTag.textContent = cfg.tag;
      if (chatBotBadge) chatBotBadge.textContent = cfg.badge;
      if (mockRamStat) mockRamStat.textContent = cfg.ram;
      if (mockSpeedStat) mockSpeedStat.textContent = cfg.speed;

      // Beri notifikasi kecil di chat
      appendSystemNotice(`Model aktif dialihkan ke: ${cfg.name}`);
    });
  });

  // Klik chip prompt cepat
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const promptText = chip.getAttribute('data-prompt');
      userInput.value = promptText;
      triggerSubmit();
    });
  });

  // Handle pengiriman chat
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    triggerSubmit();
  });

  function triggerSubmit() {
    const text = userInput.value.trim();
    if (!text) return;

    // 1. Tampilkan pesan user
    appendUserMessage(text);
    userInput.value = '';

    // 2. Tampilkan respon bot simulasi dengan efek streaming
    simulateBotResponse(text);
  }

  function appendUserMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message user-msg';
    msgDiv.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`;
    chatStream.appendChild(msgDiv);
    chatStream.scrollTop = chatStream.scrollHeight;
  }

  function appendSystemNotice(text) {
    const noticeDiv = document.createElement('div');
    noticeDiv.style.textAlign = 'center';
    noticeDiv.style.fontSize = '0.72rem';
    noticeDiv.style.color = 'var(--text-tertiary)';
    noticeDiv.style.margin = '0.35rem 0';
    noticeDiv.textContent = `[Sistem] ${text}`;
    chatStream.appendChild(noticeDiv);
    chatStream.scrollTop = chatStream.scrollHeight;
  }

  function simulateBotResponse(query) {
    const cfg = modelConfigs[currentModelKey] || modelConfigs.llama;

    const botMsgDiv = document.createElement('div');
    botMsgDiv.className = 'message bot-msg';
    botMsgDiv.innerHTML = `
      <div class="msg-author">
        <span class="bot-badge">${cfg.badge}</span>
        <span class="meta-timestamp">${cfg.speed} (Offline)</span>
      </div>
      <div class="msg-bubble">
        <span class="bot-text"></span><span class="streaming-cursor"></span>
      </div>
    `;
    chatStream.appendChild(botMsgDiv);
    chatStream.scrollTop = chatStream.scrollHeight;

    const botTextEl = botMsgDiv.querySelector('.bot-text');
    const cursorEl = botMsgDiv.querySelector('.streaming-cursor');

    const replyContent = generateSimulatedReply(query, cfg.name);

    // Streaming typing animation
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      charIndex += 3;
      if (charIndex >= replyContent.length) {
        botTextEl.innerHTML = replyContent;
        if (cursorEl) cursorEl.remove();
        clearInterval(typingInterval);
      } else {
        botTextEl.innerHTML = replyContent.substring(0, charIndex);
      }
      chatStream.scrollTop = chatStream.scrollHeight;
    }, 18);
  }

  function generateSimulatedReply(query, modelName) {
    const q = query.toLowerCase();

    if (q.includes('python') || q.includes('kode') || q.includes('code')) {
      return `Berikut adalah contoh fungsi Python yang Anda minta:<br><br>
<pre style="background:#0f172a; color:#f8fafc; padding:0.6rem 0.8rem; border-radius:6px; font-family:monospace; font-size:0.8rem; overflow-x:auto;"><code>def filter_unique(items):
    """Menyaring elemen unik dengan menjaga urutan."""
    seen = set()
    return [x for x in items if not (x in seen or seen.add(x))]

# Contoh eksekusi lokal:
data = ["apel", "jeruk", "apel", "mangga"]
print(filter_unique(data)) # Hasil: ['apel', 'jeruk', 'mangga']</code></pre><br>
Semua kode ini dianalisis dan dieksekusi secara lokal oleh ${modelName} tanpa koneksi cloud.`;
    }

    if (q.includes('ram') || q.includes('hardware') || q.includes('memori')) {
      return `Untuk model <strong>${modelName}</strong>:<br>
- Kuantisasi: <strong>Q4_K_M</strong> (4-bit).<br>
- Konsumsi RAM aktif: <strong>sekitar 3.2 GB hingga 5.5 GB</strong>.<br>
- Rekomendasi: Jika laptop Anda memiliki RAM 8 GB atau 16 GB, model ini akan berjalan sangat lancar dan bebas lag.`;
    }

    if (q.includes('gguf') || q.includes('cpu')) {
      return `Format <strong>GGUF</strong> adalah standar industri kompresi model AI yang dirancang agar file model dapat langsung dipetakan ke memori (mmap) dan diproses oleh instruksi CPU (seperti AVX2) maupun akselerator grafis GPU (seperti Metal di Mac dan CUDA di Windows/Linux). Hasilnya adalah inferensi yang sangat cepat tanpa boros daya.`;
    }

    return `Pertanyaan Anda: "<em>${escapeHtml(query)}</em>"<br><br>
Sebagai aplikasi offline, <strong>JGPT-Off</strong> menjalankan inferensi langsung pada prosesor mesin lokal Anda. Tidak ada token yang dikirim ke internet, sehingga percakapan Anda tetap aman dan privat. Silakan unduh versi installer di bawah untuk merasakan performa penuh di komputer Anda!`;
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }
}
