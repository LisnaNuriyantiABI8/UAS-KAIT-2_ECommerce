/*   PERSISTENCE   */
function simpanLS(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
function ambilLS(key, fallback) {
  try { const d = localStorage.getItem(key); return d ? JSON.parse(d) : fallback; }
  catch (e) { return fallback; }
}

/* KONFIGURASI TOKO */
const NOMOR_WA = "6281234567890";

/* DATA PRODUK */
let produk = ambilLS("produkData", [
  { id: 1, nama: "Wide Leg Pants", kategori: "Celana", harga: 169000, stok: 634, gambar: "Celana Wide Leg.jpg",
    ukuran: ["S","M","L","XL"], warna: ["Hitam","Coklat","Krem"],
    deskripsi: "Celana wide leg berbahan katun tebal yang jatuh dan nyaman dipakai seharian. Potongan kaki lebar memberi kesan kasual namun tetap rapi, cocok untuk acara santai maupun semi-formal.",
    rating: 4.6, ulasan: [
      { nama: "Rani", rating: 5, komentar: "Bahannya adem, potongannya juga bagus banget!", tanggal: "2026-05-02" },
      { nama: "Fajar", rating: 4, komentar: "Sesuai deskripsi, pengiriman cepat.", tanggal: "2026-05-20" }
    ] },
  { id: 2, nama: "Tapered Pants", kategori: "Celana", harga: 149000, stok: 673, gambar: "Celana Tapered.jpg",
    ukuran: ["S","M","L","XL"], warna: ["Hitam","Abu","Navy"],
    deskripsi: "Celana tapered dengan potongan mengecil di bagian bawah, memberi siluet kaki yang lebih ramping. Bahan stretch nyaman untuk aktivitas harian.",
    rating: 4.4, ulasan: [
      { nama: "Dimas", rating: 4, komentar: "Nyaman dipakai kerja, warnanya matte.", tanggal: "2026-04-10" }
    ] },
  { id: 3, nama: "Cargo Pants", kategori: "Celana", harga: 177000, stok: 587, gambar: "Celana Cargo.jpg",
    ukuran: ["S","M","L","XL"], warna: ["Olive","Coklat","Hitam"],
    deskripsi: "Cargo pants dengan banyak kantong fungsional, gaya street style yang sedang tren. Bahan tebal namun tetap ringan dipakai.",
    rating: 4.7, ulasan: [
      { nama: "Bayu", rating: 5, komentar: "Kantongnya banyak, keren buat jalan-jalan.", tanggal: "2026-06-01" }
    ] },
  { id: 4, nama: "Chino Pants", kategori: "Celana", harga: 168000, stok: 864, gambar: "Celana Chino.jpg",
    ukuran: ["S","M","L","XL"], warna: ["Khaki","Navy","Hitam"],
    deskripsi: "Chino pants klasik yang serbaguna, mudah dipadukan dengan kemeja maupun kaos untuk gaya smart casual.",
    rating: 4.5, ulasan: [] },
  { id: 5, nama: "Kemeja Oversize", kategori: "Baju", harga: 190000, stok: 670, gambar: "Kemeja Oversize.jpg",
    ukuran: ["S","M","L","XL"], warna: ["Krem","Biru Muda","Pink"],
    deskripsi: "Kemeja oversize dengan siluet longgar yang nyaman dan stylish, cocok untuk tampilan kasual maupun dipadukan dengan inner.",
    rating: 4.3, ulasan: [] },
  { id: 6, nama: "Blouse V-Neck", kategori: "Baju", harga: 165000, stok: 743, gambar: "Blouse V-Neck.jpg",
    ukuran: ["S","M","L","XL"], warna: ["Putih","Pink","Ungu Muda"],
    deskripsi: "Blouse dengan potongan V-neck yang feminin, bahan ringan dan adem, cocok untuk acara kantor maupun kasual.",
    rating: 4.5, ulasan: [] },
  { id: 7, nama: "Kemeja Flannel Casual", kategori: "Baju", harga: 187000, stok: 417, gambar: "Kemeja Flannel.jpg",
    ukuran: ["S","M","L","XL"], warna: ["Merah","Hijau","Biru"],
    deskripsi: "Kemeja flannel motif kotak-kotak klasik, hangat dipakai dan cocok untuk gaya kasual sehari-hari.",
    rating: 4.6, ulasan: [] },
  { id: 8, nama: "Sweater Rajut", kategori: "Baju", harga: 193000, stok: 973, gambar: "Sweater Rajut.jpg",
    ukuran: ["S","M","L","XL"], warna: ["Krem","Tan","Abu Tua"],
    deskripsi: "Sweater rajut lembut dan hangat, sempurna untuk cuaca dingin atau sekadar tampil kasual chic.",
    rating: 4.8, ulasan: [] },
  { id: 9, nama: "Sepatu Loafer Wanita", kategori: "Sepatu", harga: 237000, stok: 731, gambar: "Sepatu Pantofel Wanita.jpg",
    ukuran: ["36","37","38","39","40"], warna: ["Hitam","Coklat","Krem"],
    deskripsi: "Sepatu loafer wanita dengan desain elegan, nyaman dipakai untuk kerja maupun acara semi-formal.",
    rating: 4.4, ulasan: [] },
  { id: 10, nama: "Sepatu Loafer Pria", kategori: "Sepatu", harga: 257000, stok: 759, gambar: "Sepatu Pantofel Pria.jpg",
    ukuran: ["39","40","41","42","43"], warna: ["Hitam","Coklat","Navy"],
    deskripsi: "Sepatu loafer pria berbahan kulit sintetis premium, cocok dipakai formal maupun kasual.",
    rating: 4.5, ulasan: [] },
  { id: 11, nama: "Hijab Wanita Modern", kategori: "Hijab", harga: 65000, stok: 1347, gambar: "Hijab Wanita Modern.jpg",
    ukuran: ["Standard"], warna: ["Hitam","Krem","Pink","Biru Muda"],
    deskripsi: "Hijab bahan lembut yang mudah dibentuk dan tidak mudah kusut, cocok dipakai sehari-hari.",
    rating: 4.7, ulasan: [] },
  { id: 12, nama: "Hijab Pashmina", kategori: "Hijab", harga: 55000, stok: 947, gambar: "Hijab Pashmina.jpg",
    ukuran: ["Standard"], warna: ["Hitam","Krem","Tan","Abu"],
    deskripsi: "Hijab pashmina dengan jatuh kain yang adem dan elegan, favorit untuk berbagai acara.",
    rating: 4.6, ulasan: [] },
  { id: 13, nama: "Jam Tangan Pria & Wanita", kategori: "Lainnya", harga: 535000, stok: 278, gambar: "Jam Tangan Pria & Wanita.jpg",
    ukuran: ["Standard"], warna: ["Silver","Gold","Rose Gold"],
    deskripsi: "Jam tangan unisex dengan desain minimalis elegan, tahan air ringan, cocok jadi pelengkap gaya harian.",
    rating: 4.5, ulasan: [] },
  { id: 14, nama: "Kacamata Pria & Wanita", kategori: "Lainnya", harga: 370000, stok: 168, gambar: "Kacamata Pria & Wanita.jpg",
    ukuran: ["Standard"], warna: ["Hitam","Coklat","Silver"],
    deskripsi: "Kacamata dengan lensa UV protection dan frame ringan, nyaman dipakai untuk gaya maupun perlindungan mata.",
    rating: 4.3, ulasan: [] }
]);

const colorMap = {
  "Hitam": "#2c3e50", "Coklat": "#8B4513", "Krem": "#F5F0E6", "Abu": "#696969",
  "Navy": "#0f2a4a", "Olive": "#556B2F", "Khaki": "#C3B091", "Biru Muda": "#87CEEB",
  "Pink": "#e8a1b0", "Putih": "#FFFFFF", "Ungu Muda": "#DDA0DD", "Merah": "#a83246",
  "Hijau": "#2f6b4f", "Biru": "#3a6ea8", "Tan": "#D2B48C", "Abu Tua": "#708090",
  "Silver": "#C0C0C0", "Gold": "#c99a3e", "Rose Gold": "#B76E79"
};

/* DATA WILAYAH & ONGKIR */
const dataWilayah = {
  "DKI Jakarta": { kab: ["Jakarta Pusat","Jakarta Selatan","Jakarta Barat","Jakarta Timur","Jakarta Utara"], reguler: { hari: "1-2 hari", harga: 12000 }, kargo: { hari: "3-4 hari", harga: 8000 } },
  "Jawa Barat": { kab: ["Bandung","Bekasi","Bogor","Tasikmalaya","Depok"], reguler: { hari: "2-3 hari", harga: 15000 }, kargo: { hari: "4-6 hari", harga: 10000 } },
  "Jawa Tengah": { kab: ["Semarang","Surakarta","Magelang","Tegal"], reguler: { hari: "2-3 hari", harga: 17000 }, kargo: { hari: "5-7 hari", harga: 11000 } },
  "Jawa Timur": { kab: ["Surabaya","Malang","Sidoarjo","Kediri"], reguler: { hari: "2-4 hari", harga: 18000 }, kargo: { hari: "5-7 hari", harga: 12000 } },
  "Banten": { kab: ["Tangerang","Tangerang Selatan","Serang","Cilegon"], reguler: { hari: "1-2 hari", harga: 13000 }, kargo: { hari: "3-5 hari", harga: 9000 } },
  "DI Yogyakarta": { kab: ["Kota Yogyakarta","Sleman","Bantul"], reguler: { hari: "2-3 hari", harga: 17000 }, kargo: { hari: "5-7 hari", harga: 11000 } },
  "Lainnya": { kab: [], reguler: { hari: "3-7 hari", harga: 25000 }, kargo: { hari: "7-14 hari", harga: 18000 } }
};

/* DATA USER / TRANSAKSI */
let dataTransaksi = ambilLS("dataTransaksi", []);
let akunPembeli = ambilLS("akunPembeli", []);
let userAktif = ambilLS("userAktif", null);
let dataChatMasuk = ambilLS("dataChatMasuk", []);

const STATUS_STEPS = ["diproses", "dikemas", "dikirim", "tiba"];
const STATUS_LABEL = { diproses: "Diproses", dikemas: "Dikemas", dikirim: "Dikirim", tiba: "Tiba" };
const STATUS_ICONS = { diproses: "📝", dikemas: "📦", dikirim: "🚚", tiba: "✅" };

/* STATE */
let keranjang = ambilLS("keranjangSaya", []);
let kategoriAktif = "all";
let urutanAktif = "default";
let keyword = "";
let pilihanProduk = {};
let currentView = "home";
let detailProdukId = null;
let ratingUlasanTerpilih = 5;
let tipeAlamatAktif = "rumah";
let checkoutPending = null;

function simpanSemua() {
  simpanLS("produkData", produk);
  simpanLS("dataTransaksi", dataTransaksi);
  simpanLS("akunPembeli", akunPembeli);
  simpanLS("userAktif", userAktif);
  simpanLS("keranjangSaya", keranjang);
  simpanLS("dataChatMasuk", dataChatMasuk);
}

function rupiah(angka) { return "Rp " + Math.round(angka).toLocaleString("id-ID"); }

/* TOAST */
function showToast(pesan, tipe = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast " + tipe;
  toast.textContent = pesan;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* VIEWS */
function showView(view) {
  currentView = view;
  ["home","produk","detail","profil"].forEach(v => {
    const el = document.getElementById("view-" + v);
    if (el) el.classList.toggle("hidden", v !== view);
  });
  document.querySelectorAll(".main-nav a[data-view]").forEach(a => a.classList.toggle("active", a.dataset.view === view));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (view === "produk") renderProduk();
  if (view === "profil") renderProfil();
}

/*   PILIH UKURAN & WARNA   */
function pilihUkuran(btn, id) {
  const card = btn.closest(".detail-info");
  card.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  if (!pilihanProduk[id]) pilihanProduk[id] = {};
  pilihanProduk[id].ukuran = btn.textContent;
}
function pilihWarna(btn, id) {
  const card = btn.closest(".detail-info");
  card.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  if (!pilihanProduk[id]) pilihanProduk[id] = {};
  pilihanProduk[id].warna = btn.title;
}

/*   RATING BINTANG   */
function renderBintang(rating) {
  const penuh = Math.round(rating);
  let html = "";
  for (let i = 1; i <= 5; i++) html += `<span class="star ${i <= penuh ? "on" : ""}">★</span>`;
  return `<span class="bintang-wrap">${html}<span class="rating-num">${rating.toFixed(1)}</span></span>`;
}

/*   RENDER PRODUK GRID   */
function renderProduk() {
  const container = document.getElementById("produkContainer");
  if (!container) return;

  let filtered = produk.filter(p => {
    const cocokKategori = kategoriAktif === "all" || p.kategori === kategoriAktif;
    const cocokKeyword = p.nama.toLowerCase().includes(keyword.toLowerCase());
    return cocokKategori && cocokKeyword;
  });

  switch (urutanAktif) {
    case "murah": filtered.sort((a,b) => a.harga - b.harga); break;
    case "mahal": filtered.sort((a,b) => b.harga - a.harga); break;
    case "az": filtered.sort((a,b) => a.nama.localeCompare(b.nama)); break;
    case "za": filtered.sort((a,b) => b.nama.localeCompare(a.nama)); break;
    case "rating": filtered.sort((a,b) => b.rating - a.rating); break;
  }

  if (filtered.length === 0) {
    container.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#999;padding:30px;'>Produk tidak ditemukan.</p>";
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="produk-card">
      <div class="gambar" onclick="bukaDetailProduk(${p.id})">
        <img src="${p.gambar}" alt="${p.nama}" loading="lazy">
      </div>
      <div class="info">
        <div onclick="bukaDetailProduk(${p.id})" style="cursor:pointer;">
          <span class="kategori">${p.kategori}</span>
          <h3>${p.nama}</h3>
          ${renderBintang(p.rating)}
          <div class="harga">${rupiah(p.harga)}</div>
          <p class="desk-singkat">${p.deskripsi.slice(0, 60)}...</p>
          <div class="stok ${p.stok === 0 ? 'habis' : ''}">${p.stok === 0 ? 'Stok Habis' : 'Stok: ' + p.stok}</div>
        </div>
        <button class="btn-add-cart" data-id="${p.id}" onclick="event.stopPropagation(); tambahKeKeranjang(${p.id}, this)" ${p.stok === 0 ? 'disabled' : ''}>
          ${p.stok === 0 ? 'Stok Habis' : '🛍️ Tambah ke Keranjang'}
        </button>
      </div>
    </div>`).join("");
}

/*   BUKA DETAIL PRODUK   */
function bukaDetailProduk(id) {
  detailProdukId = id;
  showView("detail");
  renderDetailProduk(id);
}

/*   RENDER DETAIL PRODUK — HANYA SATU FUNGSI   */
function renderDetailProduk(id) {
  const p = produk.find(x => x.id === id);
  const container = document.getElementById("detailContainer");
  if (!p || !container) return;

  const pilihan = pilihanProduk[p.id] || {};
  const ukuranAktif = pilihan.ukuran || p.ukuran[0];
  const warnaAktif = pilihan.warna || p.warna[0];

  container.innerHTML = `
    <button class="btn-kembali" onclick="showView('produk')">← Kembali</button>
    <div class="detail-grid">
      <div class="detail-gambar">
        <img src="${p.gambar}" alt="${p.nama}">
      </div>
      <div class="detail-info">
        <span class="kategori">${p.kategori}</span>
        <h2>${p.nama}</h2>
        ${renderBintang(p.rating)}
        <div class="harga-detail">${rupiah(p.harga)}</div>
        <div class="deskripsi-panjang">
          <strong>Deskripsi:</strong><br>
          ${p.deskripsi}
        </div>
        <div class="pilihan-group">
          <label>Ukuran:</label>
          <div class="size-selector">
            ${p.ukuran.map(u => `<button class="size-btn ${u === ukuranAktif ? 'active' : ''}" onclick="pilihUkuran(this, ${p.id})">${u}</button>`).join('')}
          </div>
        </div>
        <div class="pilihan-group">
          <label>Warna:</label>
          <div class="color-selector">
            ${p.warna.map(w => {
              const bg = colorMap[w] || "#ddd";
              const border = w === "Putih" ? "border:1px solid #ccc;" : "";
              return `<button class="color-btn ${w === warnaAktif ? 'active' : ''}" style="background:${bg};${border}" onclick="pilihWarna(this, ${p.id})" title="${w}"></button>`;
            }).join('')}
          </div>
        </div>
        <div class="stok ${p.stok === 0 ? 'habis' : ''}">
          ${p.stok === 0 ? 'Stok Habis' : 'Stok tersedia: ' + p.stok}
        </div>
        <button class="btn-tambah-detail" onclick="tambahKeKeranjang(${p.id}, this)" ${p.stok === 0 ? 'disabled' : ''}>
          ${p.stok === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
        </button>
      </div>
    </div>

    <div class="detail-ulasan">
      <h3>Ulasan (${p.ulasan.length})</h3>
      <div class="ulasan-list">
        ${p.ulasan.length === 0 ?
          "<p class='no-ulasan'>Belum ada ulasan.</p>" :
          p.ulasan.map(u => `
            <div class="ulasan-item">
              <div class="ulasan-head">
                <b>${u.nama}</b> ${renderBintang(u.rating)}
                <span class="ulasan-tgl">${u.tanggal}</span>
              </div>
              <p>${u.komentar}</p>
            </div>`).join("")
        }
      </div>
      <div class="form-ulasan">
        <h4>Tulis Ulasan</h4>
        <input type="text" id="ulasanNama" placeholder="Nama kamu">
        <div class="pilih-rating" id="pilihRatingUlasan">
          ${[1,2,3,4,5].map(n => `<span class="star-pick ${n <= 5 ? 'on' : ''}" data-val="${n}" onclick="pilihRatingUlasan(${n})">★</span>`).join("")}
        </div>
        <textarea id="ulasanKomentar" placeholder="Bagaimana pendapatmu?" rows="3"></textarea>
        <button class="btn-primary" onclick="kirimUlasan(${p.id})">Kirim Ulasan</button>
      </div>
    </div>`;
}

function pilihRatingUlasan(n) {
  ratingUlasanTerpilih = n;
  document.querySelectorAll("#pilihRatingUlasan .star-pick").forEach(s => {
    s.classList.toggle("on", parseInt(s.dataset.val) <= n);
  });
}

function kirimUlasan(id) {
  const nama = document.getElementById("ulasanNama").value.trim();
  const komentar = document.getElementById("ulasanKomentar").value.trim();
  if (!nama || !komentar) { showToast("Isi nama dan komentar dulu ya!", "error"); return; }
  const p = produk.find(x => x.id === id);
  if (!p) return;
  p.ulasan.unshift({ nama, rating: ratingUlasanTerpilih, komentar, tanggal: new Date().toISOString().split("T")[0] });
  p.rating = +(p.ulasan.reduce((s,u) => s + u.rating, 0) / p.ulasan.length).toFixed(1);
  ratingUlasanTerpilih = 5;
  simpanSemua();
  renderDetailProduk(id);
  showToast("Ulasan berhasil dikirim! 🙏");
}

/*   KERANJANG   */
function tambahKeKeranjang(id, btn) {
  const p = produk.find(x => x.id === id);
  if (!p || p.stok === 0) return;
  const pilihan = pilihanProduk[id] || {};
  const ukuran = pilihan.ukuran || p.ukuran[0];
  const warna = pilihan.warna || p.warna[0];

  const item = keranjang.find(x => x.id === id && x.ukuran === ukuran && x.warna === warna);
  if (item) {
    if (item.qty >= p.stok) { showToast("Stok tidak mencukupi!", "error"); return; }
    item.qty++;
  } else {
    keranjang.push({ id: p.id, nama: p.nama, harga: p.harga, gambar: p.gambar, stok: p.stok, qty: 1, ukuran, warna });
  }
  showToast(`${p.nama} ditambahkan ke keranjang!`);

  if (btn) {
    const teksAsli = btn.innerHTML;
    btn.classList.add("added");
    btn.innerHTML = "✓ Ditambahkan!";
    setTimeout(() => { btn.classList.remove("added"); btn.innerHTML = teksAsli; }, 1200);
  }
  updateCart();
}

function ubahQtyKeranjang(id, ukuran, warna, delta) {
  const item = keranjang.find(x => x.id === id && x.ukuran === ukuran && x.warna === warna);
  const p = produk.find(x => x.id === id);
  if (!item) return;
  if (delta > 0 && item.qty >= p.stok) { showToast("Stok tidak mencukupi!", "error"); return; }
  item.qty += delta;
  if (item.qty <= 0) { hapusDariKeranjang(id, ukuran, warna); return; }
  updateCart();
}

function hapusDariKeranjang(id, ukuran, warna) {
  keranjang = keranjang.filter(x => !(x.id === id && x.ukuran === ukuran && x.warna === warna));
  updateCart();
}

function updateCart() {
  const cartCountEl = document.getElementById("cartCount");
  if (cartCountEl) cartCountEl.textContent = keranjang.reduce((s, x) => s + x.qty, 0);

  const cartItems = document.getElementById("cartItems");
  if (!cartItems) { simpanSemua(); return; }

  if (keranjang.length === 0) {
    cartItems.innerHTML = "<p class='cart-empty'>Keranjang masih kosong.</p>";
  } else {
    cartItems.innerHTML = keranjang.map(item => `
      <div class="cart-item">
        <img src="${item.gambar}" alt="${item.nama}">
        <div class="detail">
          <h4>${item.nama}</h4>
          <p>${item.ukuran} | ${item.warna}</p>
          <div class="price">${rupiah(item.harga)}</div>
          <div class="qty-control">
            <button onclick="ubahQtyKeranjang(${item.id}, '${item.ukuran}', '${item.warna}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="ubahQtyKeranjang(${item.id}, '${item.ukuran}', '${item.warna}', 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="hapusDariKeranjang(${item.id}, '${item.ukuran}', '${item.warna}')">🗑</button>
      </div>`).join("");
  }

  const totalHargaEl = document.getElementById("totalHarga");
  if (totalHargaEl) totalHargaEl.textContent = rupiah(keranjang.reduce((s, x) => s + x.harga * x.qty, 0));
  simpanSemua();
}

/* ===== AUTO-TRANSLATE — HANYA SATU DEKLARASI ===== */
let langDropdownVisible = false;
let currentLang = 'id';

function toggleLangDropdown() {
  langDropdownVisible = !langDropdownVisible;
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.toggle('hidden', !langDropdownVisible);
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active-lang', btn.dataset.lang === currentLang);
  });
}

function switchLanguage(lang) {
  currentLang = lang;
  langDropdownVisible = false;
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.add('hidden');

  if (lang === 'id') {
    // Kembali ke Indonesia — hapus cookie terjemahan
    document.cookie = 'googtrans=; path=/; domain=.' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'googtrans=/id/id; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location.reload();
    return;
  }

  // Cara 1: Coba pakai combo box (instan, tanpa reload)
  const gtCombo = document.querySelector('.goog-te-combo');
  if (gtCombo && gtCombo.options && gtCombo.options.length > 1) {
    gtCombo.value = lang;
    gtCombo.dispatchEvent(new Event('change', { bubbles: true }));
    showToast('Halaman diterjemahkan! 🌐');
    return;
  }

  // Cara 2: Fallback — set cookie lalu reload
  document.cookie = 'googtrans=/id/' + lang + '; path=/';
  window.location.reload();
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.translate-wrapper') && langDropdownVisible) {
    langDropdownVisible = false;
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.add('hidden');
  }
});

/*   ALAMAT: TIPE, PROVINSI/KABUPATEN   */
function pilihTipeAlamat(tipe) {
  tipeAlamatAktif = tipe;
  document.getElementById("tipe-rumah").classList.toggle("active", tipe === "rumah");
  document.getElementById("tipe-kantor").classList.toggle("active", tipe === "kantor");
  document.getElementById("tipeAlamatValue").value = tipe;
}

function isiProvinsi() {
  const sel = document.getElementById("provinsiInput");
  if (!sel) return;
  const daftarProvinsi = Object.keys(dataWilayah).filter(p => p !== "Lainnya");
  sel.innerHTML = `<option value="">-- Pilih Provinsi --</option>` +
    daftarProvinsi.map(p => `<option value="${p}">${p}</option>`).join("") +
    `<option value="Lainnya">Provinsi Lain...</option>`;
  isiKabupaten();
}

function isiKabupaten() {
  const provinsi = document.getElementById("provinsiInput").value;
  const sel = document.getElementById("kabupatenInput");
  const provinsiLainBox = document.getElementById("provinsiLainBox");
  const kabupatenLainBox = document.getElementById("kabupatenLainBox");
  if (!sel) return;

  if (provinsi === "Lainnya") {
    provinsiLainBox.classList.remove("hidden");
    kabupatenLainBox.classList.remove("hidden");
    sel.innerHTML = `<option value="">-- Isi nama kabupaten di bawah --</option>`;
    sel.disabled = true;
  } else {
    provinsiLainBox.classList.add("hidden");
    kabupatenLainBox.classList.add("hidden");
    sel.disabled = false;
    const daftar = (dataWilayah[provinsi] && dataWilayah[provinsi].kab) || [];
    sel.innerHTML = `<option value="">-- Pilih Kabupaten/Kota --</option>` + daftar.map(k => `<option value="${k}">${k}</option>`).join("") + `<option value="Lainnya">Kota Lain...</option>`;
  }
  updateOngkirLabel();
}

document.addEventListener("change", (e) => {
  if (e.target && e.target.id === "kabupatenInput") {
    const box = document.getElementById("kabupatenLainBox");
    if (e.target.value === "Lainnya") box.classList.remove("hidden");
    else if (document.getElementById("provinsiInput").value !== "Lainnya") box.classList.add("hidden");
  }
});

/*   ONGKOS KIRIM   */
function getOngkirInfo() {
  const provinsi = document.getElementById("provinsiInput") ? document.getElementById("provinsiInput").value : "";
  const metodeEl = document.querySelector('input[name="pengiriman"]:checked');
  const metode = metodeEl ? metodeEl.value : "reguler";
  const wilayah = dataWilayah[provinsi] || dataWilayah["Lainnya"];
  return { ...wilayah[metode], provinsi: provinsi || "(pilih provinsi)" };
}

function updateOngkirLabel() {
  const label = document.getElementById("ongkirLabel");
  if (!label) return;
  const info = getOngkirInfo();
  label.textContent = `${info.hari} • Ongkir ${rupiah(info.harga)}`;
}

/*   TOGGLE PAYMENT GROUP   */
function togglePaymentGroup(nama) {
  const options = document.getElementById("payOptions-" + nama);
  const group = document.getElementById("payGroup-" + nama);
  const title = group ? group.querySelector(".payment-group-title") : null;
  const arrow = title ? title.querySelector(".toggle-arrow") : null;
  if (!options) return;

  const isOpen = !options.classList.contains("hidden");
  if (isOpen) {
    options.classList.add("hidden");
    if (group) group.classList.remove("open");
    if (title) title.classList.remove("open");
    if (arrow) arrow.textContent = "v";
  } else {
    options.classList.remove("hidden");
    if (group) group.classList.add("open");
    if (title) title.classList.add("open");
    if (arrow) arrow.textContent = "^";
  }
}

/*   VERIFIKASI HINT   */
const VERIFIKASI_HINT = {
  BCA: { label: "1234567890 (a.n. Lisna Nuriyanti)", hint: "Transfer ke rekening BCA lalu masukkan 4 digit terakhir No. HP kamu untuk verifikasi." },
  BRI: { label: "0987654321 (a.n. Lisna Nuriyanti)", hint: "Transfer ke rekening BRI lalu masukkan 4 digit terakhir No. HP kamu." },
  Mandiri: { label: "1122334455 (a.n. Lisna Nuriyanti)", hint: "Transfer ke rekening Mandiri lalu masukkan 4 digit terakhir No. HP kamu." },
  BNI: { label: "5566778899 (a.n. Lisna Nuriyanti)", hint: "Transfer ke rekening BNI lalu masukkan 4 digit terakhir No. HP kamu." },
  "VA BCA": { label: "Nomor VA akan dikirim via WhatsApp", hint: "Bayar melalui Virtual Account BCA, verifikasi otomatis." },
  "VA Mandiri": { label: "Nomor VA akan dikirim via WhatsApp", hint: "Bayar melalui Virtual Account Mandiri, verifikasi otomatis." },
  GoPay: { label: "0812-3456-7890", hint: "Kirim ke nomor GoPay di atas, lalu masukkan nomor HP pengirim." },
  OVO: { label: "0812-3456-7890", hint: "Kirim ke nomor OVO di atas, lalu masukkan nomor HP pengirim." },
  DANA: { label: "0812-3456-7890", hint: "Kirim ke nomor DANA di atas, lalu masukkan nomor HP pengirim." },
  ShopeePay: { label: "0812-3456-7890", hint: "Kirim ke nomor ShopeePay di atas, lalu masukkan nomor HP pengirim." },
  QRIS: { label: "Scan QR saat konfirmasi pesanan", hint: "QR code akan muncul otomatis setelah kamu klik Konfirmasi Pesanan." },
  COD: { label: "-", hint: "Bayar tunai langsung ke kurir saat barang tiba di alamatmu." },
  "Kartu Kredit/Debit": { label: "Input di halaman pembayaran", hint: "Kamu akan diarahkan mengisi data kartu secara aman." }
};

document.addEventListener("change", (e) => {
  if (e.target && e.target.name === "pembayaran") {
    const info = VERIFIKASI_HINT[e.target.value];
    const section = document.getElementById("verifikasiSection");
    const noRek = document.getElementById("noRekening");
    const hint = document.getElementById("verifikasiHint");
    if (info && section && noRek && hint) {
      section.style.display = "block";
      noRek.value = info.label;
      noRek.readOnly = true;
      hint.textContent = info.hint;
    }
  }
  if (e.target && e.target.name === "pengiriman") {
    updateOngkirLabel();
  }
});

/*   QRIS (DEMO)   */
function tampilkanQRIS(total) {
  const box = document.getElementById("qrisCanvasBox");
  box.innerHTML = "";
  document.getElementById("qrisTotal").textContent = rupiah(total);
  try {
    new QRCode(box, { text: `LISNA-NURIYANTI-PAY:${total}:${Date.now()}`, width: 180, height: 180 });
  } catch (e) {
    box.innerHTML = "<p style='color:#999;'>QR tidak dapat ditampilkan.</p>";
  }
  document.getElementById("qrisModal").classList.remove("hidden");
}

function batalQRIS() { document.getElementById("qrisModal").classList.add("hidden"); }
function lanjutkanSetelahQRIS() { document.getElementById("qrisModal").classList.add("hidden"); finalisasiPesanan(); }

/*   CHECKOUT   */
function bukaCheckout() {
  if (keranjang.length === 0) { showToast("Keranjang masih kosong!", "error"); return; }
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  const checkoutItems = document.getElementById("checkoutItems");
  if (checkoutItems) {
    checkoutItems.innerHTML = keranjang.map(item => `
      <div class="summary-item">
        <span>${item.nama} (${item.ukuran}, ${item.warna}) x${item.qty}</span>
        <span>${rupiah(item.harga * item.qty)}</span>
      </div>`).join("");
  }

  const total = keranjang.reduce((s, x) => s + x.harga * x.qty, 0);
  const checkoutTotal = document.getElementById("checkoutTotal");
  if (checkoutTotal) checkoutTotal.textContent = rupiah(total);

  isiProvinsi();
  modal.classList.remove("hidden");
}

function prosesCheckout(e) {
  e.preventDefault();
  const nama = document.getElementById("namaPembeli").value.trim();
  const alamatLengkap = document.getElementById("alamatLengkap").value.trim();
  const noHp = document.getElementById("noHp").value.trim();
  const provinsiSel = document.getElementById("provinsiInput").value;
  const kabupatenSel = document.getElementById("kabupatenInput").value;

  const provinsi = provinsiSel === "Lainnya" ? document.getElementById("provinsiLainInput").value.trim() : provinsiSel;
  const kabupaten = (provinsiSel === "Lainnya" || kabupatenSel === "Lainnya") ? document.getElementById("kabupatenLainInput").value.trim() : kabupatenSel;

  if (!nama || !alamatLengkap || !noHp) { showToast("Lengkapi data pembeli!", "error"); return; }
  if (!provinsi || !kabupaten) { showToast("Lengkapi alamat pengiriman!", "error"); return; }

  const bayarEl = document.querySelector('input[name="pembayaran"]:checked');
  if (!bayarEl) { showToast("Pilih metode pembayaran!", "error"); return; }

  const ongkirInfo = getOngkirInfo();
  const totalProduk = keranjang.reduce((s, x) => s + x.harga * x.qty, 0);
  const total = totalProduk + ongkirInfo.harga;
  const orderId = "ORD" + Date.now().toString().slice(-8);

  const kec = document.getElementById("kecamatanInput").value || document.getElementById("kecamatanInputLuar").value || "";

  checkoutPending = {
    id: orderId, user: nama, buyerUsername: userAktif,
    tanggal: new Date().toISOString().split("T")[0],
    total: total, ongkir: ongkirInfo.harga, metode: bayarEl.value,
    alamat: `${alamatLengkap}, ${kec}, ${kabupaten}, ${provinsi}`,
    status: "diproses",
    items: keranjang.map(i => ({ nama: i.nama, ukuran: i.ukuran, warna: i.warna, qty: i.qty, harga: i.harga }))
  };

  document.getElementById("checkoutModal").classList.add("hidden");
  if (bayarEl.value === "QRIS") { tampilkanQRIS(total); } else { finalisasiPesanan(); }
}

function finalisasiPesanan() {
  if (!checkoutPending) return;
  const trx = checkoutPending;
  checkoutPending = null;
  dataTransaksi.push(trx);
  keranjang.forEach(item => { const p = produk.find(x => x.id === item.id); if (p) p.stok -= item.qty; });
  keranjang = [];
  updateCart();
  simpanSemua();
  document.getElementById("statusOrderId").textContent = "No. Pesanan: " + trx.id;
  document.getElementById("statusOrderTotal").textContent = "Total: " + rupiah(trx.total);
  document.getElementById("statusModal").classList.remove("hidden");
}

/*   CART SIDEBAR   */
function bukaCart() { document.getElementById("cartSidebar").classList.add("open"); document.getElementById("cartOverlay").classList.remove("hidden"); }
function tutupCart() { document.getElementById("cartSidebar").classList.remove("open"); document.getElementById("cartOverlay").classList.add("hidden"); }

/*   PROFIL PEMBELI   */
function renderProfil() {
  const box = document.getElementById("profilBox");
  if (!box) return;

  if (!userAktif) {
    box.innerHTML = `
      <div class="profil-auth">
        <h2>Masuk / Daftar Akun</h2>
        <p class="subtitle">Buat akun dulu untuk bisa memantau pesananmu di sini.</p>
        <div class="auth-tabs">
          <button class="auth-tab active" onclick="gantiTabAuth('login', this)">Masuk</button>
          <button class="auth-tab" onclick="gantiTabAuth('daftar', this)">Daftar</button>
        </div>
        <form id="loginForm" onsubmit="loginBuyer(event)">
          <input type="text" id="loginUsername" placeholder="Username" autocomplete="username" required>
          <input type="password" id="loginPassword" placeholder="Password" autocomplete="current-password" required>
          <button type="submit" class="btn-primary">Masuk</button>
        </form>
        <form id="daftarForm" class="hidden" onsubmit="daftarBuyer(event)">
          <input type="text" id="daftarNama" placeholder="Nama Lengkap" required>
          <input type="email" id="daftarEmail" placeholder="Email" required>
          <input type="text" id="daftarUsername" placeholder="Buat Username (tanpa spasi)" autocomplete="username" required>
          <input type="password" id="daftarPassword" placeholder="Buat Password (min. 4 karakter)" autocomplete="new-password" minlength="4" required>
          <button type="submit" class="btn-primary">Daftar Akun</button>
        </form>
      </div>`;
    return;
  }

  const u = akunPembeli.find(a => a.username === userAktif);
  const pesanan = dataTransaksi.filter(t => {
  // Cocokkan dengan username login ATAU nama pembeli di checkout
  return t.buyerUsername === userAktif || 
         (t.user && userAktif && t.user.toLowerCase() === akunPembeli.find(a => a.username === userAktif)?.nama?.toLowerCase());
}).sort((a,b) => b.id.localeCompare(a.id));

  box.innerHTML = `
    <div class="profil-header">
      <div class="avatar">${(u ? u.nama : userAktif).charAt(0).toUpperCase()}</div>
      <div><h2>${u ? u.nama : userAktif}</h2><p>${u ? u.email : ""}</p></div>
      <button class="logout-btn" onclick="logoutBuyer()">Keluar</button>
    </div>
    <h3 style="margin-bottom:14px;color:var(--rose-deep);font-size:16px;font-family:'Playfair Display',serif;">Pesanan Saya</h3>
    <div class="daftar-pesanan">
      ${pesanan.length === 0 ? "<p style='color:#999;text-align:center;padding:20px;'>Belum ada pesanan.</p>" : pesanan.map(p => {
        const currentIdx = STATUS_STEPS.indexOf(p.status);
        return `
        <div class="pesanan-card">
          <div class="pesanan-head">
            <span>${p.id}</span>
            <span>${p.tanggal} <span class="status-badge ${p.status}">${STATUS_LABEL[p.status]}</span></span>
          </div>
          <div class="pesanan-items">${(p.items||[]).map(i => `${i.nama} (${i.ukuran}) x${i.qty}`).join(", ")}</div>
          <div class="pesanan-total">${rupiah(p.total)}</div>
          <div class="tracking-container">
            <div class="tracking-title">Status Pengiriman</div>
            <div class="tracking-steps">
              ${STATUS_STEPS.map((s, idx) => {
                let statusClass = idx < currentIdx ? "done" : (idx === currentIdx ? "active" : "");
                return `<div class="track-step ${statusClass}"><div class="track-dot">${idx < currentIdx ? '✓' : (idx === currentIdx ? STATUS_ICONS[s] : '')}</div><span>${STATUS_LABEL[s]}</span></div>`;
              }).join("")}
            </div>
          </div>
        </div>`;
      }).join("")}
    </div>`;
}

function gantiTabAuth(tab, btn) {
  document.querySelectorAll(".auth-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("loginForm").classList.toggle("hidden", tab !== "login");
  document.getElementById("daftarForm").classList.toggle("hidden", tab !== "daftar");
}

function daftarBuyer(e) {
  e.preventDefault();
  const nama = document.getElementById("daftarNama").value.trim();
  const email = document.getElementById("daftarEmail").value.trim();
  const username = document.getElementById("daftarUsername").value.trim();
  const password = document.getElementById("daftarPassword").value;
  if (!nama || !email || !username || !password) { showToast("Lengkapi semua data pendaftaran!", "error"); return; }
  if (username.includes(" ")) { showToast("Username tidak boleh mengandung spasi!", "error"); return; }
  if (password.length < 4) { showToast("Password minimal 4 karakter!", "error"); return; }
  if (akunPembeli.some(a => a.username.toLowerCase() === username.toLowerCase())) { showToast("Username sudah dipakai, coba yang lain!", "error"); return; }
  akunPembeli.push({ username, password, nama, email });
  userAktif = username;
  simpanSemua();
  showToast("Akun berhasil dibuat! Selamat datang " + nama);
  renderProfil();
}

function loginBuyer(e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  if (!username || !password) { showToast("Isi username dan password!", "error"); return; }
  const u = akunPembeli.find(a => a.username.toLowerCase() === username.toLowerCase() && a.password === password);
  if (!u) {
    const usernameAda = akunPembeli.some(a => a.username.toLowerCase() === username.toLowerCase());
    showToast(usernameAda ? "Password salah!" : "Username belum terdaftar, silakan daftar dulu.", "error");
    return;
  }
  userAktif = u.username;
  simpanSemua();
  showToast("Berhasil masuk! Halo " + u.nama);
  renderProfil();
}

function logoutBuyer() { userAktif = null; simpanSemua(); renderProfil(); }

/*   ADMIN   */
function bukaAdminLogin() { document.getElementById("adminLoginModal").classList.remove("hidden"); }

function loginAdmin(e) {
  e.preventDefault();
  const roleEl = document.querySelector('input[name="adminRole"]:checked');
  const role = roleEl ? roleEl.value : "penjual";
  const user = document.getElementById("adminUser").value.trim();
  const pass = document.getElementById("adminPass").value.trim();
  const validPenjual = role === "penjual" && user === "admin" && pass === "admin123";
  const validCS = role === "cs" && user === "cs" && pass === "cs123";
  if (validPenjual || validCS) {
    document.getElementById("adminLoginModal").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    document.getElementById("adminRoleLabel").textContent = role === "penjual" ? "— Admin Penjual" : "— Admin Customer Service";
    document.querySelectorAll(".tab-btn").forEach(btn => {
      const tab = btn.dataset.tab;
      let tampil = true;
      if (role === "penjual") tampil = (tab === "produk" || tab === "transaksi");
      if (role === "cs") tampil = (tab === "transaksi" || tab === "user" || tab === "chat");
      btn.classList.toggle("hidden", !tampil);
    });
    const tabAwal = role === "cs" ? "chat" : "produk";
    renderAdminTab(tabAwal);
    document.getElementById("adminLoginForm").reset();
  } else {
    showToast("Username / password salah untuk peran yang dipilih!", "error");
  }
}

function updateAdminStats() {
  const sp = document.getElementById("statProduk"); if (sp) sp.textContent = produk.length;
  const su = document.getElementById("statUser"); if (su) su.textContent = akunPembeli.length;
  const st = document.getElementById("statTransaksi"); if (st) st.textContent = dataTransaksi.length;
  const spr = document.getElementById("statPendapatan"); if (spr) spr.textContent = rupiah(dataTransaksi.reduce((s,t) => s + t.total, 0));
}

function renderAdminTab(tab) {
  const content = document.getElementById("adminContent");
  if (!content) return;
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === tab));
  updateAdminStats();

  if (tab === "produk") {
    content.innerHTML = `<table><thead><tr><th>No</th><th>Nama Produk</th><th>Kategori</th><th>Harga</th><th>Stok</th></tr></thead>
      <tbody>${produk.map((p, i) => `<tr><td>${i+1}</td><td>${p.nama}</td><td>${p.kategori}</td><td>${rupiah(p.harga)}</td>
        <td><input type="number" id="stok-${p.id}" value="${p.stok}" min="0" style="width:60px;padding:4px;text-align:center;border:1px solid #ddd;border-radius:4px;" onchange="updateStok(${p.id})"></td></tr>`).join("")}</tbody></table>`;
  } else if (tab === "transaksi") {
    content.innerHTML = `<table><thead><tr><th>ID</th><th>Pembeli</th><th>Tanggal</th><th>Metode</th><th>Total</th><th>Status</th></tr></thead>
      <tbody>${dataTransaksi.map(t => `<tr><td>${t.id}</td><td>${t.user}</td><td>${t.tanggal}</td><td>${t.metode||'-'}</td><td>${rupiah(t.total)}</td>
        <td><select onchange="ubahStatusTransaksi('${t.id}', this.value)" style="padding:4px;border-radius:4px;border:1px solid #ddd;">
          ${STATUS_STEPS.map(s => `<option value="${s}" ${t.status===s?'selected':''}>${STATUS_LABEL[s]}</option>`).join("")}</select></td></tr>`).join("")}</tbody></table>`;
  } else if (tab === "user") {
    content.innerHTML = `<table><thead><tr><th>No</th><th>Nama</th><th>Username</th><th>Email</th></tr></thead>
      <tbody>${akunPembeli.map((u,i) => `<tr><td>${i+1}</td><td>${u.nama}</td><td>${u.username}</td><td>${u.email}</td></tr>`).join("") || "<tr><td colspan='4' style='text-align:center;color:#999;'>Belum ada pelanggan terdaftar.</td></tr>"}</tbody></table>`;
  } else if (tab === "chat") {
    content.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;">
      ${dataChatMasuk.length === 0 ? "<p style='color:#999;text-align:center;padding:20px;'>Belum ada chat masuk.</p>" :
        dataChatMasuk.slice().reverse().map(c => `<div class="pesanan-card"><div class="pesanan-head"><span>${c.waktu}</span></div><div class="pesanan-items">${c.pesan}</div></div>`).join("")}</div>`;
  }
}

function updateStok(id) {
  const p = produk.find(x => x.id === id); if (!p) return;
  p.stok = Math.max(0, parseInt(document.getElementById("stok-" + id).value) || 0);
  simpanSemua(); showToast("Stok diperbarui!", "info"); renderProduk();
}

function ubahStatusTransaksi(id, status) {
  const trx = dataTransaksi.find(t => t.id === id);
  if (!trx) { showToast("Transaksi tidak ditemukan!", "error"); return; }
  trx.status = status;
  simpanSemua();
  showToast(`Status pesanan ${id} diubah ke "${STATUS_LABEL[status]}" ✅`);
  // Refresh admin table supaya perubahan langsung terlihat
  renderAdminTab('transaksi');
}

/*   WHATSAPP   */
function bukaWhatsApp(pesanKustom) {
  const pesan = pesanKustom || "Halo Fashion Lisna Nuriyanti, saya ingin bertanya tentang produk.";
  window.open(`https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`, "_blank");
}

/*   CHAT WIDGET   */
function bukaChatWidget() { document.getElementById("chatWidget").classList.remove("hidden"); }
function tutupChatWidget() { document.getElementById("chatWidget").classList.add("hidden"); }

function tambahBubbleChat(teks, tipe) {
  const body = document.getElementById("chatBody");
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble " + tipe;
  bubble.textContent = teks;
  body.appendChild(bubble);
  body.scrollTop = body.scrollHeight;
}

function kirimChat(e) {
  e.preventDefault();
  const input = document.getElementById("chatInput");
  const pesan = input.value.trim();
  if (!pesan) return;
  tambahBubbleChat(pesan, "user");
  dataChatMasuk.push({ pesan, waktu: new Date().toLocaleString("id-ID") });
  simpanSemua();
  input.value = "";
  const waLink = document.getElementById("chatWaLink");
  if (waLink) waLink.dataset.pesan = pesan;
  setTimeout(() => { tambahBubbleChat("Terima kasih sudah menghubungi kami! Admin akan segera membalas pesanmu. Kalau butuh respon lebih cepat, silakan lanjutkan lewat WhatsApp ya 😊", "admin"); }, 700);
}

/* ===== DOM READY ===== */
document.addEventListener("DOMContentLoaded", function () {
  // Cart
  document.getElementById("cartBtn").addEventListener("click", bukaCart);
  document.getElementById("closeCart").addEventListener("click", tutupCart);
  document.getElementById("cartOverlay").addEventListener("click", tutupCart);
  document.getElementById("checkoutBtn").addEventListener("click", bukaCheckout);
  document.getElementById("checkoutForm").addEventListener("submit", prosesCheckout);
  document.getElementById("cancelCheckout").addEventListener("click", () => document.getElementById("checkoutModal").classList.add("hidden"));

  // Admin
  document.getElementById("adminBtn").addEventListener("click", bukaAdminLogin);
  document.getElementById("adminLoginForm").addEventListener("submit", loginAdmin);
  document.getElementById("cancelAdminLogin").addEventListener("click", () => document.getElementById("adminLoginModal").classList.add("hidden"));
  document.getElementById("closeAdmin").addEventListener("click", () => document.getElementById("adminPanel").classList.add("hidden"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.addEventListener("click", () => renderAdminTab(btn.dataset.tab)));

  // Search & Sort
  document.getElementById("searchInput").addEventListener("input", (e) => { keyword = e.target.value; if (currentView !== "produk") showView("produk"); else renderProduk(); });
  document.getElementById("sortSelector").addEventListener("change", (e) => { urutanAktif = e.target.value; renderProduk(); });

  // Categories
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => { document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active")); btn.classList.add("active"); kategoriAktif = btn.dataset.kategori; renderProduk(); });
  });

  // Navigation
  document.querySelectorAll(".main-nav a[data-view]").forEach(a => { a.addEventListener("click", (e) => { e.preventDefault(); showView(a.dataset.view); }); });

  // Provinsi & Negara
  document.getElementById("provinsiInput").addEventListener("change", isiKabupaten);
  document.getElementById("negaraInput").addEventListener("change", (e) => {
    const luar = e.target.value === "Lainnya";
    document.getElementById("wilayahIndonesiaBox").classList.toggle("hidden", luar);
    document.getElementById("negaraLainBox").classList.toggle("hidden", !luar);
  });

  // Status close
  document.getElementById("statusCloseBtn").addEventListener("click", () => { document.getElementById("statusModal").classList.add("hidden"); showView("profil"); });

  // WhatsApp & Chat
  document.getElementById("waFloatBtn").addEventListener("click", () => bukaWhatsApp());
  document.getElementById("chatFloatBtn").addEventListener("click", bukaChatWidget);
  document.getElementById("closeChatWidget").addEventListener("click", tutupChatWidget);
  document.getElementById("chatForm").addEventListener("submit", kirimChat);
  document.getElementById("chatWaLink").addEventListener("click", (e) => {
    e.preventDefault();
    bukaWhatsApp(e.target.dataset.pesan || "Halo, saya ingin melanjutkan chat dari website.");
  });

  // ✅ Auto-Translate
  document.getElementById("autoTranslateBtn").addEventListener("click", toggleLangDropdown);
  document.querySelectorAll(".lang-option").forEach(btn => {
    btn.addEventListener("click", () => switchLanguage(btn.dataset.lang));
  });

  // Init
  renderProduk();
  updateCart();
});