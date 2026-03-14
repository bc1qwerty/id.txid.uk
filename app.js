'use strict';

// ── i18n ──
var lang = localStorage.getItem('lang') || 'ko';
var T = {
  ko: {
    nip05: 'NIP-05 인증', nip05_desc: 'Nostr 인증 주소 @txid.uk',
    nip05_username: '유저네임', nip05_register: '등록', nip05_renew: '갱신',
    nip05_available: '사용 가능', nip05_taken: '이미 사용 중',
    nip05_pay: '결제 대기 중...', nip05_open_wallet: '지갑으로 열기',
    nip05_success: '등록 완료!', nip05_expires: '만료일',
    nip05_sats: 'sats/년', nip05_invalid: '3-16자, 영소문자/숫자/하이픈',
    nip05_expired: '만료됨', nip05_change: '변경', nip05_change_info: '30일에 1회 변경 가능',
    nip05_change_cooldown: '일 후 변경 가능',
    nip05_purchased: '구매일', nip05_plan: '연간 플랜',
    nip05_confirm: '결제 확인', nip05_confirm_msg: '아래 내용으로 등록합니다.',
    nip05_confirm_proceed: '결제 진행', nip05_not_purchased: '미구매',
    copy: '복사', copied: '복사됨', cancel: '취소',
    login_required: 'Lightning 로그인이 필요합니다',
    nip05_manage: 'NIP-05 관리',
    nip05_your_id: '내 NIP-05',
    nip05_status_active: '활성',
    nip05_status_expired: '만료됨',
    nip05_renew_desc: '갱신 (+1년)',
    ln_forward_title: 'Lightning Address 포워딩',
    ln_forward_desc: 'username@txid.uk로 Lightning 결제를 받을 수 있습니다.',
    ln_coming_soon: '곧 서비스가 시작됩니다.',
    coming_soon: 'Coming Soon',
    profile_not_found: '등록되지 않은 사용자입니다.',
    profile_relays: '릴레이',
    profile_follow: 'Nostr에서 팔로우',
    profile_ln: 'Lightning Address',
    nip05_price_promo: '기간한정 할인 중!',
    price_per_year: 'sats/년',
    light_mode: '라이트 모드로 전환',
    dark_mode: '다크 모드로 전환',
  },
  en: {
    nip05: 'NIP-05 Verification', nip05_desc: 'Nostr verification @txid.uk',
    nip05_username: 'Username', nip05_register: 'Register', nip05_renew: 'Renew',
    nip05_available: 'Available', nip05_taken: 'Taken',
    nip05_pay: 'Awaiting payment...', nip05_open_wallet: 'Open Wallet',
    nip05_success: 'Registered!', nip05_expires: 'Expires',
    nip05_sats: 'sats/year', nip05_invalid: '3-16 chars, lowercase/numbers/hyphens',
    nip05_expired: 'Expired', nip05_change: 'Change', nip05_change_info: 'Can change once every 30 days',
    nip05_change_cooldown: ' days until change available',
    nip05_purchased: 'Purchased', nip05_plan: 'Annual Plan',
    nip05_confirm: 'Confirm Payment', nip05_confirm_msg: 'You are registering the following.',
    nip05_confirm_proceed: 'Proceed to Payment', nip05_not_purchased: 'Not purchased',
    copy: 'Copy', copied: 'Copied', cancel: 'Cancel',
    login_required: 'Lightning login required',
    nip05_manage: 'NIP-05 Management',
    nip05_your_id: 'My NIP-05',
    nip05_status_active: 'Active',
    nip05_status_expired: 'Expired',
    nip05_renew_desc: 'Renew (+1 year)',
    ln_forward_title: 'Lightning Address Forwarding',
    ln_forward_desc: 'Receive Lightning payments at username@txid.uk.',
    ln_coming_soon: 'Service launching soon.',
    coming_soon: 'Coming Soon',
    profile_not_found: 'User not found.',
    profile_relays: 'Relays',
    profile_follow: 'Follow on Nostr',
    profile_ln: 'Lightning Address',
    nip05_price_promo: 'Limited-time discount!',
    price_per_year: 'sats/year',
    light_mode: 'Switch to light mode',
    dark_mode: 'Switch to dark mode',
  },
  ja: {
    nip05: 'NIP-05認証', nip05_desc: 'Nostr認証アドレス @txid.uk',
    nip05_username: 'ユーザー名', nip05_register: '登録', nip05_renew: '更新',
    nip05_available: '利用可能', nip05_taken: '使用中',
    nip05_pay: '支払い待ち...', nip05_open_wallet: 'ウォレットを開く',
    nip05_success: '登録完了！', nip05_expires: '有効期限',
    nip05_sats: 'sats/年', nip05_invalid: '3-16文字、小文字/数字/ハイフン',
    nip05_expired: '期限切れ', nip05_change: '変更', nip05_change_info: '30日に1回変更可能',
    nip05_change_cooldown: '日後に変更可能',
    nip05_purchased: '購入日', nip05_plan: '年間プラン',
    nip05_confirm: '確認', nip05_confirm_msg: '以下の内容で登録します。',
    nip05_confirm_proceed: '支払いへ進む', nip05_not_purchased: '未購入',
    copy: 'コピー', copied: 'コピー済み', cancel: 'キャンセル',
    login_required: 'Lightningログインが必要です',
    nip05_manage: 'NIP-05管理',
    nip05_your_id: 'マイNIP-05',
    nip05_status_active: '有効',
    nip05_status_expired: '期限切れ',
    nip05_renew_desc: '更新 (+1年)',
    ln_forward_title: 'Lightning Addressフォワーディング',
    ln_forward_desc: 'username@txid.ukでLightning決済を受け取れます。',
    ln_coming_soon: 'まもなくサービス開始。',
    coming_soon: 'Coming Soon',
    profile_not_found: '登録されていないユーザーです。',
    profile_relays: 'リレー',
    profile_follow: 'Nostrでフォロー',
    profile_ln: 'Lightning Address',
    nip05_price_promo: '期間限定割引中！',
    price_per_year: 'sats/年',
    light_mode: 'ライトモードに切替',
    dark_mode: 'ダークモードに切替',
  },
};
function t(key) { return (T[lang] && T[lang][key]) || T.en[key] || key; }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

// ── API helper ──
function api(path, opts) {
  return fetch('https://api.txid.uk' + path, Object.assign({
    credentials: 'include',
  }, opts, {
    headers: Object.assign({}, opts && opts.headers),
  })).then(function (res) {
    if (!res.ok) {
      return res.json().catch(function () { return {}; }).then(function (e) {
        throw new Error(e.error || res.statusText);
      });
    }
    return res.json();
  });
}

// ── Premium pricing ──
var PRICING = { 1: 50000, 2: 40000, 3: 30000, 4: 20000 };
var DEFAULT_PRICE = 10000;
var DISCOUNT = { 1: 40000, 2: 30000, 3: 20000, 4: 10000 };
var DISCOUNT_DEFAULT = 5000;
function getPriceSats(username) {
  var len = (username || '').length;
  return DISCOUNT[len] || DISCOUNT_DEFAULT;
}
function getOriginalPrice(username) {
  var len = (username || '').length;
  return PRICING[len] || DEFAULT_PRICE;
}

// ── Theme ──
(function () {
  var th = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', th);
  updateThemeBtn();
})();
function updateThemeBtn() {
  var btn = document.getElementById('theme-btn'); if (!btn) return;
  var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  btn.innerHTML = isDark
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  btn.title = isDark ? t('light_mode') : t('dark_mode');
}
function toggleTheme() {
  var h = document.documentElement;
  var n = h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  h.setAttribute('data-theme', n); localStorage.setItem('theme', n);
  updateThemeBtn();
}

// ── Language ──
function setLang(l) {
  lang = l; localStorage.setItem('lang', lang);
  var btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = { ko: 'KO', en: 'EN', ja: 'JA' }[lang] || 'KO';
  document.getElementById('lang-menu')?.classList.remove('open');
  document.querySelectorAll('[data-ko]').forEach(function (el) {
    var val = el.dataset[lang] || el.dataset.en || el.dataset.ko;
    if (val) {
      if (el.placeholder !== undefined && el.tagName === 'INPUT') el.placeholder = val;
      else el.innerHTML = val;
    }
  });
  updateThemeBtn();
  route();
}
(function () { setLang(lang); })();

// ── SPA Router ──
var currentUser = null;

function route() {
  var hash = location.hash || '#/';
  if (hash.startsWith('#/u/')) {
    var username = decodeURIComponent(hash.slice(4));
    renderProfile(username);
  } else {
    renderMain();
  }
}

window.addEventListener('hashchange', route);

// ── Auth integration ──
function registerAuth() {
  if (window.txidAuth && txidAuth.onAuthChange) {
    txidAuth.onAuthChange(function (user) {
      currentUser = user;
      route();
    });
    var existing = txidAuth.getUser();
    if (existing && !currentUser) {
      currentUser = existing;
      route();
    }
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', registerAuth);
} else {
  registerAuth();
}

// ── Main view ──
function renderMain() {
  var app = document.getElementById('app');
  var cta = document.getElementById('cta-login');
  var pricing = document.getElementById('pricing');

  if (!currentUser) {
    // Not logged in: show static landing
    app.innerHTML = '';
    if (cta) cta.classList.remove('hidden');
    if (pricing) pricing.classList.remove('hidden');
    return;
  }

  // Logged in: hide CTA, keep pricing visible
  if (cta) cta.classList.add('hidden');
  app.innerHTML = '<div class="nip05-card"><div style="text-align:center;color:var(--text3);padding:20px">...</div></div>';
  loadNip05Management();
}

// ── NIP-05 Management ──
function loadNip05Management() {
  var app = document.getElementById('app');
  api('/nip05/my').then(function (data) {
    if (data.registered && data.status === 'active') {
      renderActiveState(app, data);
    } else if (data.registered && data.status === 'expired') {
      renderExpiredState(app, data);
    } else {
      renderRegisterForm(app);
    }
  }).catch(function () {
    renderRegisterForm(app);
  });
}

function renderActiveState(container, data) {
  var paidDate = data.paidAt ? new Date(data.paidAt * 1000).toLocaleDateString() : '-';
  var expDate = new Date(data.expiresAt * 1000).toLocaleDateString();
  var priceSats = getPriceSats(data.username);

  var changeHtml = '';
  if (data.canChangeUsername) {
    changeHtml = '<div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border)">' +
      '<div class="form-row">' +
      '<input id="nip05-change-input" class="input" style="max-width:160px" placeholder="' + t('nip05_username') + '" maxlength="16">' +
      '<span class="form-suffix">@txid.uk</span>' +
      '<button id="nip05-change-btn" class="btn secondary">' + t('nip05_change') + '</button>' +
      '</div>' +
      '<div class="form-hint">' + t('nip05_change_info') + '</div>' +
      '<div id="nip05-change-status" class="form-status"></div>' +
      '</div>';
  } else if (data.usernameChangedAt) {
    var elapsed = Math.floor(Date.now() / 1000) - data.usernameChangedAt;
    var daysLeft = Math.ceil((30 * 86400 - elapsed) / 86400);
    changeHtml = '<div class="form-hint" style="margin-top:12px">' + daysLeft + t('nip05_change_cooldown') + '</div>';
  }

  container.innerHTML = '<div class="nip05-card">' +
    '<h2><span class="badge badge-purple">' + t('nip05') + '</span> ' + t('nip05_manage') + '</h2>' +
    '<div style="font-family:var(--font);font-size:1.1rem;color:var(--green);margin-bottom:16px">' +
    '&#x2713; ' + esc(data.identifier) + '</div>' +
    '<div class="status-row"><span class="status-label">' + t('nip05_purchased') + '</span><span class="status-value">' + paidDate + '</span></div>' +
    '<div class="status-row"><span class="status-label">' + t('nip05_expires') + '</span><span class="status-value">' + expDate + '</span></div>' +
    '<div class="status-row"><span class="status-label">' + t('nip05_plan') + '</span><span class="status-value">' + priceSats.toLocaleString() + ' ' + t('nip05_sats') + '</span></div>' +
    '<div class="btn-row" style="margin-top:16px">' +
    '<button id="nip05-renew" class="btn">' + t('nip05_renew') + '</button>' +
    '<a href="#/u/' + esc(data.username) + '" class="btn secondary" style="text-decoration:none">' + t('profile_follow').split(' ')[0] + '</a>' +
    '</div>' +
    changeHtml +
    '</div>' +
    renderLnComingSoon(data.username);

  document.getElementById('nip05-renew').addEventListener('click', function () {
    startRenewal(container, data.username);
  });

  if (data.canChangeUsername) {
    document.getElementById('nip05-change-btn').addEventListener('click', function () {
      var newName = document.getElementById('nip05-change-input').value.toLowerCase().trim();
      var cStatus = document.getElementById('nip05-change-status');
      var cBtn = document.getElementById('nip05-change-btn');
      if (!newName || newName.length < 3 || !/^[a-z0-9][a-z0-9_-]*[a-z0-9]$/.test(newName)) {
        cStatus.textContent = t('nip05_invalid');
        cStatus.className = 'form-status error';
        return;
      }
      cBtn.disabled = true; cBtn.textContent = '...';
      api('/nip05/username', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: newName }),
      }).then(function () {
        loadNip05Management();
      }).catch(function (e) {
        cStatus.textContent = e.message || 'Error';
        cStatus.className = 'form-status error';
        cBtn.disabled = false; cBtn.textContent = t('nip05_change');
      });
    });
  }
}

function renderExpiredState(container, data) {
  var expDate = data.expiresAt ? new Date(data.expiresAt * 1000).toLocaleDateString() : '-';
  var priceSats = getPriceSats(data.username);

  container.innerHTML = '<div class="nip05-card">' +
    '<h2><span class="badge badge-purple">' + t('nip05') + '</span> ' + t('nip05_manage') + '</h2>' +
    '<div style="font-family:var(--font);font-size:1.1rem;color:var(--red);margin-bottom:16px">' +
    '&#x2717; ' + esc(data.identifier) + ' <span class="badge badge-orange">' + t('nip05_expired') + '</span></div>' +
    '<div class="status-row"><span class="status-label">' + t('nip05_expires') + '</span><span class="status-value">' + expDate + '</span></div>' +
    '<div class="status-row"><span class="status-label">' + t('nip05_plan') + '</span><span class="status-value">' + priceSats.toLocaleString() + ' ' + t('nip05_sats') + '</span></div>' +
    '<div class="btn-row" style="margin-top:16px">' +
    '<button id="nip05-renew" class="btn">' + t('nip05_renew') + '</button>' +
    '</div>' +
    '</div>';

  document.getElementById('nip05-renew').addEventListener('click', function () {
    startRenewal(container, data.username);
  });
}

function renderRegisterForm(container) {
  container.innerHTML = '<div class="nip05-card">' +
    '<h2><span class="badge badge-purple">' + t('nip05') + '</span> ' + t('nip05_register') + '</h2>' +
    '<div class="form-hint" style="margin-bottom:12px">' + t('nip05_desc') + '</div>' +
    '<div class="form-row" style="margin-top:16px">' +
    '<input id="nip05-input" class="input" style="max-width:200px" placeholder="' + t('nip05_username') + '" maxlength="16" spellcheck="false">' +
    '<span class="form-suffix">@txid.uk</span>' +
    '<span id="nip05-price" class="realtime-price"></span>' +
    '</div>' +
    '<div class="form-row">' +
    '<button id="nip05-reg-btn" class="btn">' + t('nip05_register') + '</button>' +
    '</div>' +
    '<div id="nip05-status" class="form-status"></div>' +
    '</div>';

  var input = document.getElementById('nip05-input');
  var priceEl = document.getElementById('nip05-price');
  var btn = document.getElementById('nip05-reg-btn');
  var status = document.getElementById('nip05-status');

  // Realtime price display
  input.addEventListener('input', function () {
    var val = input.value.toLowerCase().trim();
    if (val.length >= 1) {
      var original = getOriginalPrice(val);
      var discount = getPriceSats(val);
      priceEl.innerHTML = '<span class="price-original">' + original.toLocaleString() + '</span> <span class="price-discount">' + discount.toLocaleString() + ' ' + t('price_per_year') + '</span>';
      priceEl.style.opacity = '1';
    } else {
      priceEl.innerHTML = '';
    }
  });

  btn.addEventListener('click', function () {
    var username = input.value.toLowerCase().trim();
    input.value = username;
    status.textContent = '';
    status.className = 'form-status';

    if (username.length < 3 || !/^[a-z0-9][a-z0-9_-]*[a-z0-9]$/.test(username)) {
      status.textContent = t('nip05_invalid');
      status.className = 'form-status error';
      return;
    }

    showConfirm(container, username);
  });
}

function showConfirm(container, username) {
  var identifier = username + '@txid.uk';
  var priceSats = getPriceSats(username);
  var originalPrice = getOriginalPrice(username);

  container.innerHTML = '<div class="nip05-card">' +
    '<h2><span class="badge badge-purple">' + t('nip05') + '</span> ' + t('nip05_confirm') + '</h2>' +
    '<div class="form-hint">' + t('nip05_confirm_msg') + '</div>' +
    '<div class="confirm-card">' +
    '<div class="confirm-id">' + esc(identifier) + '</div>' +
    '<div class="confirm-price">' + t('nip05_plan') + ' &middot; <span class="price-original">' + originalPrice.toLocaleString() + '</span> <span class="price-discount">' + priceSats.toLocaleString() + ' sats</span></div>' +
    '</div>' +
    '<div class="btn-row">' +
    '<button id="nip05-confirm-btn" class="btn">&#x26A1; ' + t('nip05_confirm_proceed') + '</button>' +
    '<button id="nip05-confirm-cancel" class="btn secondary">' + t('cancel') + '</button>' +
    '</div>' +
    '<div id="nip05-status" class="form-status"></div>' +
    '</div>';

  document.getElementById('nip05-confirm-btn').addEventListener('click', function () {
    var cbtn = document.getElementById('nip05-confirm-btn');
    var st = document.getElementById('nip05-status');
    cbtn.disabled = true; cbtn.textContent = '...';
    api('/nip05/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username }),
    }).then(function (data) {
      showPayment(container, data);
    }).catch(function (e) {
      st.textContent = e.message || 'Error';
      st.className = 'form-status error';
      cbtn.disabled = false; cbtn.innerHTML = '&#x26A1; ' + t('nip05_confirm_proceed');
    });
  });

  document.getElementById('nip05-confirm-cancel').addEventListener('click', function () {
    renderRegisterForm(container);
  });
}

function showPayment(container, data) {
  var short = data.paymentRequest.slice(0, 40) + '...';
  container.innerHTML = '<div class="nip05-card">' +
    '<h2><span class="badge badge-purple">' + t('nip05') + '</span></h2>' +
    '<div style="font-family:var(--font);font-size:.9rem;margin-bottom:12px">' + esc(data.identifier) + ' &mdash; ' + data.amountSats.toLocaleString() + ' sats</div>' +
    '<div class="invoice-box" id="nip05-invoice" title="Click to copy">' + esc(short) + '</div>' +
    '<div class="btn-row">' +
    '<a href="lightning:' + esc(data.paymentRequest) + '" class="btn" style="text-decoration:none">&#x26A1; ' + t('nip05_open_wallet') + '</a>' +
    '<button id="nip05-copy-inv" class="btn secondary">' + t('copy') + '</button>' +
    '</div>' +
    '<div id="nip05-poll-status" class="poll-status waiting">&#x23F3; ' + t('nip05_pay') + '</div>' +
    '</div>';

  document.getElementById('nip05-invoice').addEventListener('click', function () {
    navigator.clipboard.writeText(data.paymentRequest);
    this.textContent = t('copied');
    var el = this;
    setTimeout(function () { el.textContent = short; }, 1500);
  });
  document.getElementById('nip05-copy-inv').addEventListener('click', function () {
    navigator.clipboard.writeText(data.paymentRequest);
    this.textContent = t('copied');
    var btn = this;
    setTimeout(function () { btn.textContent = t('copy'); }, 1500);
  });

  // Poll payment status
  var pollCount = 0;
  var pollTimer = setInterval(function () {
    pollCount++;
    if (pollCount > 200) { clearInterval(pollTimer); return; }
    api('/nip05/payment/' + data.paymentHash).then(function (r) {
      if (r.paid) {
        clearInterval(pollTimer);
        var ps = document.getElementById('nip05-poll-status');
        if (ps) { ps.innerHTML = '&#x2713; ' + t('nip05_success'); ps.className = 'poll-status paid'; }
        setTimeout(function () { loadNip05Management(); }, 1500);
      }
    }).catch(function () { });
  }, 3000);
}

function startRenewal(container, username) {
  var priceSats = getPriceSats(username);
  var originalPrice = getOriginalPrice(username);
  container.innerHTML = '<div class="nip05-card">' +
    '<h2><span class="badge badge-purple">' + t('nip05') + '</span> ' + t('nip05_confirm') + '</h2>' +
    '<div class="form-hint">' + t('nip05_confirm_msg') + '</div>' +
    '<div class="confirm-card">' +
    '<div class="confirm-id">' + t('nip05_renew_desc') + '</div>' +
    '<div class="confirm-price"><span class="price-original">' + originalPrice.toLocaleString() + '</span> <span class="price-discount">' + priceSats.toLocaleString() + ' sats</span></div>' +
    '</div>' +
    '<div class="btn-row">' +
    '<button id="nip05-renew-confirm" class="btn">&#x26A1; ' + t('nip05_confirm_proceed') + '</button>' +
    '<button id="nip05-renew-cancel" class="btn secondary">' + t('cancel') + '</button>' +
    '</div>' +
    '<div id="nip05-status" class="form-status"></div>' +
    '</div>';

  document.getElementById('nip05-renew-confirm').addEventListener('click', function () {
    var cbtn = document.getElementById('nip05-renew-confirm');
    var st = document.getElementById('nip05-status');
    cbtn.disabled = true; cbtn.textContent = '...';
    api('/nip05/renew', { method: 'POST' }).then(function (data) {
      showPayment(container, data);
    }).catch(function (e) {
      st.textContent = e.message || 'Error';
      st.className = 'form-status error';
      cbtn.disabled = false; cbtn.innerHTML = '&#x26A1; ' + t('nip05_confirm_proceed');
    });
  });

  document.getElementById('nip05-renew-cancel').addEventListener('click', function () {
    loadNip05Management();
  });
}

// ── Lightning Address Coming Soon ──
function renderLnComingSoon(username) {
  return '<div class="ln-coming">' +
    '<div class="ln-coming-title">&#x26A1; ' + t('ln_forward_title') + ' <span class="badge-coming">' + t('coming_soon') + '</span></div>' +
    '<div class="ln-coming-desc">' + esc(username) + '@txid.uk ' + t('ln_forward_desc') + '<br>' + t('ln_coming_soon') + '</div>' +
    '</div>';
}

// ── Public Profile Page ──
function renderProfile(username) {
  var app = document.getElementById('app');
  var cta = document.getElementById('cta-login');
  var pricing = document.getElementById('pricing');
  if (cta) cta.classList.add('hidden');
  if (pricing) pricing.classList.add('hidden');

  app.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3)">...</div>';

  api('/nip05/profile/' + encodeURIComponent(username)).then(function (data) {
    var relayHtml = '';
    if (data.relays && data.relays.length) {
      relayHtml = '<div class="profile-section">' +
        '<div class="profile-section-title">' + t('profile_relays') + '</div>' +
        '<ul class="relay-list">' + data.relays.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' +
        '</div>';
    }

    var npubShort = data.nostrPubkey ? (data.nostrPubkey.slice(0, 20) + '...' + data.nostrPubkey.slice(-8)) : '';

    app.innerHTML = '<div class="profile-card">' +
      '<div class="profile-nip05"><span class="profile-verified">&#x2713;</span> ' + esc(username) + '@txid.uk</div>' +
      (data.nostrPubkey ? '<div class="profile-npub" id="profile-npub" title="' + t('copy') + '">' + esc(npubShort) + '</div>' : '') +
      relayHtml +
      '<div class="profile-section">' +
      '<div class="profile-section-title">' + t('profile_ln') + '</div>' +
      '<div style="font-size:.75rem;color:var(--text3)"><span class="badge-coming">' + t('coming_soon') + '</span></div>' +
      '</div>' +
      '<div class="profile-links">' +
      '<a href="https://njump.me/' + esc(username) + '@txid.uk" target="_blank" rel="noopener">' + t('profile_follow') + '</a>' +
      '<a href="#/" style="color:var(--text3)">&larr; Back</a>' +
      '</div>' +
      '</div>';

    if (data.nostrPubkey) {
      document.getElementById('profile-npub').addEventListener('click', function () {
        navigator.clipboard.writeText(data.nostrPubkey);
        this.textContent = t('copied');
        var el = this;
        setTimeout(function () { el.textContent = npubShort; }, 1500);
      });
    }
  }).catch(function () {
    app.innerHTML = '<div class="profile-not-found">' +
      '<div style="font-size:2rem;margin-bottom:12px">?</div>' +
      '<div>' + t('profile_not_found') + '</div>' +
      '<div style="margin-top:16px"><a href="#/" class="btn secondary">&larr; Back</a></div>' +
      '</div>';
  });
}

// ── CTA login trigger ──
document.getElementById('cta-login')?.addEventListener('click', function () {
  if (currentUser) {
    renderMain();
    document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
  } else if (window.txidAuth) {
    txidAuth.openLogin();
  }
});

// ── Event listeners ──
document.getElementById('lang-btn')?.addEventListener('click', function () {
  document.getElementById('lang-menu')?.classList.toggle('open');
  this.setAttribute('aria-expanded', document.getElementById('lang-menu')?.classList.contains('open') || false);
});
document.addEventListener('click', function (e) {
  var m = document.getElementById('lang-menu');
  if (m && !e.target.closest('.lang-dropdown')) {
    m.classList.remove('open');
    document.getElementById('lang-btn')?.setAttribute('aria-expanded', 'false');
  }
});
document.querySelectorAll('#lang-menu button').forEach(function (btn) {
  var l = btn.textContent === '한국어' ? 'ko' : btn.textContent === 'English' ? 'en' : 'ja';
  btn.addEventListener('click', function () { setLang(l); });
});
document.getElementById('theme-btn')?.addEventListener('click', toggleTheme);

// ── Hamburger menu ──
document.getElementById('hamburger-btn')?.addEventListener('click', function () {
  var panel = document.getElementById('hamburger-panel');
  if (!panel) return;
  var open = panel.classList.toggle('open');
  this.setAttribute('aria-expanded', open);
  if (open) updateHamburger();
});
document.addEventListener('click', function (e) {
  var wrap = document.querySelector('.hamburger-wrap');
  var panel = document.getElementById('hamburger-panel');
  if (wrap && panel && !wrap.contains(e.target)) {
    panel.classList.remove('open');
    document.getElementById('hamburger-btn')?.setAttribute('aria-expanded', 'false');
  }
});
document.querySelectorAll('#hamburger-panel .settings-lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    setLang(btn.dataset.lang);
    document.getElementById('hamburger-panel')?.classList.remove('open');
    document.getElementById('hamburger-btn')?.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('hamburger-theme-btn')?.addEventListener('click', function () {
  toggleTheme();
  updateHamburger();
});

function updateHamburger() {
  var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  var icon = document.getElementById('hamburger-theme-icon');
  if (icon) icon.innerHTML = isDark
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  document.querySelectorAll('#hamburger-panel .settings-lang-btn').forEach(function (b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

// ── Price card click → login or register ──
document.querySelectorAll('#pricing .price-card').forEach(function (card) {
  card.addEventListener('click', function () {
    if (currentUser) {
      renderMain();
      document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
    } else if (window.txidAuth) {
      txidAuth.openLogin();
    }
  });
});

// Initial route
route();
