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
    stats_count: '명이 인증 완료',
    directory: '사용자 디렉토리',
    directory_desc: 'txid.uk에서 인증된 Nostr 사용자 목록',
    directory_empty: '아직 등록된 사용자가 없습니다.',
    preview_label: 'Nostr 클라이언트에서 이렇게 보입니다',
    view_directory: '전체 사용자 보기',
    back_home: '← 돌아가기',
    plan_annual: '연간',
    plan_lifetime: '평생',
    plan_lifetime_desc: '1회 결제로 영구 사용',
    price_lifetime: 'sats (평생)',
    export_keys: 'Nostr 키 내보내기',
    export_keys_desc: '키를 안전하게 보관하세요. 타인에게 절대 공유하지 마세요.',
    nsec_label: '비밀키 (nsec)',
    npub_label: '공개키 (npub)',
    badge_early_adopter: 'Early Adopter',
    badge_veteran: '1년+',
    badge_lifetime: '평생회원',
    badge_admin: 'Admin',
    recommended_relays: '추천 릴레이',
    plan_label: '플랜',
    lifetime_no_expiry: '영구 (만료 없음)',
    profile_minimal: '이 사용자는 NIP-05 인증을 아직 등록하지 않았습니다.',
    profile_get_verified: '나도 인증받기',
    account_dashboard: '내 계정',
    account_edit: '프로필 편집',
    account_pubkey: '공개키',
    account_joined: '가입일',
    account_last_login: '마지막 로그인',
    account_nip05: 'NIP-05',
    account_plan: '플랜',
    account_learn: '학습 진도',
    account_portfolio: '포트폴리오',
    account_community: '커뮤니티',
    account_posts: '게시글',
    account_comments: '댓글',
    account_bookmarks: '북마크',
    account_nostr_keys: 'Nostr 키',
    account_sessions: '세션 관리',
    account_export: '데이터 내보내기',
    account_avatar: '프로필 사진',
    account_avatar_upload: '사진 업로드',
    account_avatar_remove: '사진 삭제',
    account_avatar_hint: '최대 2MB, 정사각형 권장',
    account_nickname: '닉네임',
    account_nickname_ph: '닉네임 입력 (최대 30자)',
    account_save: '저장',
    account_saved: '저장됨!',
    account_managing: '개 주소 관리 중',
    account_no_nip05: '미등록',
    account_register_nip05: 'NIP-05 등록하기',
    account_pages: '페이지 학습',
    account_no_data: '데이터 없음',
    account_nip05_manage: 'NIP-05 관리',
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
    stats_count: 'verified identities',
    directory: 'User Directory',
    directory_desc: 'Verified Nostr users on txid.uk',
    directory_empty: 'No registered users yet.',
    preview_label: 'How it looks in Nostr clients',
    view_directory: 'View all users',
    back_home: '← Back',
    plan_annual: 'Annual',
    plan_lifetime: 'Lifetime',
    plan_lifetime_desc: 'One-time payment, forever',
    price_lifetime: 'sats (lifetime)',
    export_keys: 'Export Nostr Keys',
    export_keys_desc: 'Keep your keys safe. Never share with anyone.',
    nsec_label: 'Private Key (nsec)',
    npub_label: 'Public Key (npub)',
    badge_early_adopter: 'Early Adopter',
    badge_veteran: '1 Year+',
    badge_lifetime: 'Lifetime',
    badge_admin: 'Admin',
    recommended_relays: 'Recommended Relays',
    plan_label: 'Plan',
    lifetime_no_expiry: 'Permanent (no expiry)',
    profile_minimal: 'This user has not registered for NIP-05 verification yet.',
    profile_get_verified: 'Get verified',
    account_dashboard: 'My Account',
    account_edit: 'Edit Profile',
    account_pubkey: 'Public Key',
    account_joined: 'Joined',
    account_last_login: 'Last Login',
    account_nip05: 'NIP-05',
    account_plan: 'Plan',
    account_learn: 'Learning Progress',
    account_portfolio: 'Portfolio',
    account_community: 'Community',
    account_posts: 'Posts',
    account_comments: 'Comments',
    account_bookmarks: 'Bookmarks',
    account_nostr_keys: 'Nostr Keys',
    account_sessions: 'Sessions',
    account_export: 'Export Data',
    account_avatar: 'Profile Photo',
    account_avatar_upload: 'Upload Photo',
    account_avatar_remove: 'Remove Photo',
    account_avatar_hint: 'Max 2MB, square recommended',
    account_nickname: 'Nickname',
    account_nickname_ph: 'Enter nickname (max 30)',
    account_save: 'Save',
    account_saved: 'Saved!',
    account_managing: ' addresses managed',
    account_no_nip05: 'Not registered',
    account_register_nip05: 'Register NIP-05',
    account_pages: 'pages learned',
    account_no_data: 'No data',
    account_nip05_manage: 'NIP-05 Management',
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
    stats_count: '件の認証済みID',
    directory: 'ユーザーディレクトリ',
    directory_desc: 'txid.ukで認証されたNostrユーザー',
    directory_empty: '登録ユーザーはまだいません。',
    preview_label: 'Nostrクライアントでの表示',
    view_directory: '全ユーザーを見る',
    back_home: '← 戻る',
    plan_annual: '年間',
    plan_lifetime: '永久',
    plan_lifetime_desc: '一回払いで永久使用',
    price_lifetime: 'sats (永久)',
    export_keys: 'Nostrキーをエクスポート',
    export_keys_desc: 'キーを安全に保管してください。他人に共有しないでください。',
    nsec_label: '秘密鍵 (nsec)',
    npub_label: '公開鍵 (npub)',
    badge_early_adopter: 'Early Adopter',
    badge_veteran: '1年+',
    badge_lifetime: '永久会員',
    badge_admin: 'Admin',
    recommended_relays: 'おすすめリレー',
    plan_label: 'プラン',
    lifetime_no_expiry: '永久 (期限なし)',
    profile_minimal: 'このユーザーはまだNIP-05認証を登録していません。',
    profile_get_verified: '認証を取得する',
    account_dashboard: 'マイアカウント',
    account_edit: 'プロフィール編集',
    account_pubkey: '公開鍵',
    account_joined: '登録日',
    account_last_login: '最終ログイン',
    account_nip05: 'NIP-05',
    account_plan: 'プラン',
    account_learn: '学習進捗',
    account_portfolio: 'ポートフォリオ',
    account_community: 'コミュニティ',
    account_posts: '投稿',
    account_comments: 'コメント',
    account_bookmarks: 'ブックマーク',
    account_nostr_keys: 'Nostrキー',
    account_sessions: 'セッション',
    account_export: 'データエクスポート',
    account_avatar: 'プロフィール写真',
    account_avatar_upload: '写真アップロード',
    account_avatar_remove: '写真を削除',
    account_avatar_hint: '最大2MB、正方形推奨',
    account_nickname: 'ニックネーム',
    account_nickname_ph: 'ニックネーム入力 (最大30文字)',
    account_save: '保存',
    account_saved: '保存済み!',
    account_managing: '個のアドレス管理中',
    account_no_nip05: '未登録',
    account_register_nip05: 'NIP-05登録',
    account_pages: 'ページ学習',
    account_no_data: 'データなし',
    account_nip05_manage: 'NIP-05管理',
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
var LIFETIME_MULT = 5;
function getPriceSats(username, plan) {
  var len = (username || '').length;
  var annual = DISCOUNT[len] || DISCOUNT_DEFAULT;
  return plan === 'lifetime' ? annual * LIFETIME_MULT : annual;
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
  if (hash === '#/directory') {
    renderDirectory();
  } else if (hash === '#/account/edit') {
    renderAccountEdit();
  } else if (hash === '#/account') {
    renderAccount();
  } else if (hash.startsWith('#/u/')) {
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

  var statsBar = document.getElementById('stats-bar');

  if (!currentUser) {
    // Not logged in: show static landing
    app.innerHTML = '';
    if (cta) cta.classList.remove('hidden');
    if (pricing) pricing.classList.remove('hidden');
    if (statsBar) statsBar.classList.remove('hidden');
    loadStats();
    return;
  }

  // Logged in: hide CTA, keep pricing visible
  if (cta) cta.classList.add('hidden');
  if (statsBar) statsBar.classList.remove('hidden');
  loadStats();
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
  var isLifetime = data.isLifetime || data.planType === 'lifetime';
  var expDisplay = isLifetime ? t('lifetime_no_expiry') : new Date(data.expiresAt * 1000).toLocaleDateString();
  var planDisplay = isLifetime ? '&#x221E; ' + t('plan_lifetime') : t('plan_annual');
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

  // Renew button only for annual plans
  var renewBtn = isLifetime ? '' :
    '<button id="nip05-renew" class="btn">' + t('nip05_renew') + '</button>';

  container.innerHTML = '<div class="nip05-card">' +
    '<h2><span class="badge badge-purple">' + t('nip05') + '</span> ' + t('nip05_manage') + '</h2>' +
    '<div style="font-family:var(--font);font-size:1.1rem;color:var(--green);margin-bottom:16px">' +
    '&#x2713; ' + esc(data.identifier) +
    (isLifetime ? ' <span class="badge-lifetime">&#x221E; ' + t('badge_lifetime') + '</span>' : '') +
    '</div>' +
    '<div class="status-row"><span class="status-label">' + t('plan_label') + '</span><span class="status-value">' + planDisplay + '</span></div>' +
    '<div class="status-row"><span class="status-label">' + t('nip05_purchased') + '</span><span class="status-value">' + paidDate + '</span></div>' +
    '<div class="status-row"><span class="status-label">' + t('nip05_expires') + '</span><span class="status-value">' + expDisplay + '</span></div>' +
    '<div class="btn-row" style="margin-top:16px">' +
    renewBtn +
    '<a href="#/u/' + esc(data.username) + '" class="btn secondary" style="text-decoration:none">' + t('profile_follow').split(' ')[0] + '</a>' +
    '<button id="nip05-export-keys" class="btn secondary">&#x1F511; ' + t('export_keys') + '</button>' +
    '</div>' +
    '<div id="nip05-keys-section" class="hidden"></div>' +
    changeHtml +
    '</div>' +
    renderRelayRecommendations() +
    renderLnComingSoon(data.username);

  if (!isLifetime) {
    document.getElementById('nip05-renew').addEventListener('click', function () {
      startRenewal(container, data.username);
    });
  }

  // E4: Key export
  document.getElementById('nip05-export-keys').addEventListener('click', function () {
    var section = document.getElementById('nip05-keys-section');
    if (!section.classList.contains('hidden')) {
      section.classList.add('hidden');
      return;
    }
    section.innerHTML = '<div style="text-align:center;padding:12px;color:var(--text3)">...</div>';
    section.classList.remove('hidden');
    api('/nip05/my/keys').then(function (keys) {
      section.innerHTML = '<div class="keys-export">' +
        '<div class="keys-warning">&#x26A0; ' + t('export_keys_desc') + '</div>' +
        '<div class="keys-row">' +
        '<span class="keys-label">' + t('npub_label') + '</span>' +
        '<code class="keys-value" id="keys-npub">' + esc(keys.npub) + '</code>' +
        '<button class="btn-copy" data-copy="npub">&#x2398;</button>' +
        '</div>' +
        '<div class="keys-row">' +
        '<span class="keys-label">' + t('nsec_label') + '</span>' +
        '<code class="keys-value keys-secret" id="keys-nsec">&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;</code>' +
        '<button class="btn-copy" data-copy="nsec" id="keys-reveal">&#x1F441;</button>' +
        '</div>' +
        '</div>';
      var nsecRevealed = false;
      document.querySelector('[data-copy="npub"]').addEventListener('click', function () {
        navigator.clipboard.writeText(keys.npub);
        this.textContent = t('copied');
        var el = this;
        setTimeout(function () { el.innerHTML = '&#x2398;'; }, 1500);
      });
      document.getElementById('keys-reveal').addEventListener('click', function () {
        if (!nsecRevealed) {
          document.getElementById('keys-nsec').textContent = keys.nsec;
          document.getElementById('keys-nsec').classList.remove('keys-secret');
          this.innerHTML = '&#x2398;';
          nsecRevealed = true;
        } else {
          navigator.clipboard.writeText(keys.nsec);
          this.textContent = t('copied');
          var el = this;
          setTimeout(function () { el.innerHTML = '&#x2398;'; }, 1500);
        }
      });
    }).catch(function (e) {
      section.innerHTML = '<div class="keys-export"><div class="form-status error">' + esc(e.message || 'Error') + '</div></div>';
    });
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

// ── B3: Relay Recommendations ──
var RECOMMENDED_RELAYS = [
  { url: 'wss://relay.damus.io', region: 'Global', desc: 'Damus relay — large user base' },
  { url: 'wss://nos.lol', region: 'Global', desc: 'nos.lol — fast and reliable' },
  { url: 'wss://relay.nostr.band', region: 'Global', desc: 'nostr.band — search-optimized' },
  { url: 'wss://nostr.wine', region: 'Global', desc: 'Paid relay — low spam' },
  { url: 'wss://relay.snort.social', region: 'Global', desc: 'Snort relay' },
  { url: 'wss://offchain.pub', region: 'Global', desc: 'Bitcoin/Lightning focused' },
];

function renderRelayRecommendations() {
  var rows = RECOMMENDED_RELAYS.map(function (r) {
    return '<div class="relay-rec-row">' +
      '<code class="relay-rec-url">' + esc(r.url) + '</code>' +
      '<span class="relay-rec-desc">' + esc(r.desc) + '</span>' +
      '</div>';
  }).join('');
  return '<div class="relay-rec-card">' +
    '<div class="relay-rec-title">&#x1F4E1; ' + t('recommended_relays') + '</div>' +
    rows +
    '</div>';
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
    '<div id="nip05-preview" class="nip05-preview hidden"></div>' +
    '</div>';

  var input = document.getElementById('nip05-input');
  var priceEl = document.getElementById('nip05-price');
  var btn = document.getElementById('nip05-reg-btn');
  var status = document.getElementById('nip05-status');
  var preview = document.getElementById('nip05-preview');

  // Realtime price display + preview
  input.addEventListener('input', function () {
    var val = input.value.toLowerCase().trim();
    if (val.length >= 3 && /^[a-z0-9][a-z0-9_-]*[a-z0-9]$/.test(val)) {
      var original = getOriginalPrice(val);
      var discount = getPriceSats(val);
      priceEl.innerHTML = '<span class="price-original">' + original.toLocaleString() + '</span> <span class="price-discount">' + discount.toLocaleString() + ' ' + t('price_per_year') + '</span>';
      priceEl.style.opacity = '1';
      preview.classList.remove('hidden');
      preview.innerHTML = '<div class="preview-label">' + t('preview_label') + '</div>' +
        '<div class="preview-card">' +
        '<div class="preview-avatar">' + esc(val.charAt(0).toUpperCase()) + '</div>' +
        '<div class="preview-info">' +
        '<div class="preview-name">' + esc(val) + ' <span class="preview-check">&#x2713;</span></div>' +
        '<div class="preview-nip05">' + esc(val) + '@txid.uk</div>' +
        '</div>' +
        '</div>';
    } else if (val.length >= 1) {
      var original = getOriginalPrice(val);
      var discount = getPriceSats(val);
      priceEl.innerHTML = '<span class="price-original">' + original.toLocaleString() + '</span> <span class="price-discount">' + discount.toLocaleString() + ' ' + t('price_per_year') + '</span>';
      priceEl.style.opacity = '1';
      preview.classList.add('hidden');
    } else {
      priceEl.innerHTML = '';
      preview.classList.add('hidden');
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
  var selectedPlan = 'annual';

  function renderConfirmContent() {
    var priceSats = getPriceSats(username, selectedPlan);
    var originalAnnual = getOriginalPrice(username);
    var priceLabel = selectedPlan === 'lifetime'
      ? priceSats.toLocaleString() + ' sats (' + t('plan_lifetime') + ')'
      : '<span class="price-original">' + originalAnnual.toLocaleString() + '</span> <span class="price-discount">' + priceSats.toLocaleString() + ' sats</span>';

    container.innerHTML = '<div class="nip05-card">' +
      '<h2><span class="badge badge-purple">' + t('nip05') + '</span> ' + t('nip05_confirm') + '</h2>' +
      '<div class="form-hint">' + t('nip05_confirm_msg') + '</div>' +
      '<div class="plan-toggle">' +
      '<button class="plan-btn' + (selectedPlan === 'annual' ? ' active' : '') + '" data-plan="annual">' + t('plan_annual') + '</button>' +
      '<button class="plan-btn' + (selectedPlan === 'lifetime' ? ' active' : '') + '" data-plan="lifetime">&#x221E; ' + t('plan_lifetime') + '</button>' +
      '</div>' +
      (selectedPlan === 'lifetime' ? '<div class="form-hint" style="color:var(--green);margin-bottom:8px">' + t('plan_lifetime_desc') + '</div>' : '') +
      '<div class="confirm-card">' +
      '<div class="confirm-id">' + esc(identifier) + '</div>' +
      '<div class="confirm-price">' + priceLabel + '</div>' +
      '</div>' +
      '<div class="btn-row">' +
      '<button id="nip05-confirm-btn" class="btn">&#x26A1; ' + t('nip05_confirm_proceed') + '</button>' +
      '<button id="nip05-confirm-cancel" class="btn secondary">' + t('cancel') + '</button>' +
      '</div>' +
      '<div id="nip05-status" class="form-status"></div>' +
      '</div>';

    container.querySelectorAll('.plan-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectedPlan = btn.dataset.plan;
        renderConfirmContent();
      });
    });

    document.getElementById('nip05-confirm-btn').addEventListener('click', function () {
      var cbtn = document.getElementById('nip05-confirm-btn');
      var st = document.getElementById('nip05-status');
      cbtn.disabled = true; cbtn.textContent = '...';
      api('/nip05/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, plan: selectedPlan }),
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

  renderConfirmContent();
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

// ── Stats counter ──
var _statsCache = null;
function loadStats() {
  var el = document.getElementById('stats-count');
  if (!el) return;
  if (_statsCache !== null) { el.textContent = _statsCache; return; }
  api('/.well-known/nostr.json').then(function (data) {
    var count = Object.keys(data.names || {}).length;
    _statsCache = count;
    el.textContent = count;
  }).catch(function () {});
}

// ── User Directory ──
function renderDirectory() {
  var app = document.getElementById('app');
  var cta = document.getElementById('cta-login');
  var pricing = document.getElementById('pricing');
  if (cta) cta.classList.add('hidden');
  if (pricing) pricing.classList.add('hidden');
  var statsBar = document.getElementById('stats-bar');
  if (statsBar) statsBar.classList.add('hidden');

  app.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3)">...</div>';

  api('/.well-known/nostr.json').then(function (data) {
    var names = data.names || {};
    var users = Object.keys(names).sort();

    if (users.length === 0) {
      app.innerHTML = '<div class="profile-not-found"><div>' + t('directory_empty') + '</div>' +
        '<div style="margin-top:16px"><a href="#/" class="btn secondary">' + t('back_home') + '</a></div></div>';
      return;
    }

    var cards = users.map(function (u) {
      return '<a href="#/u/' + esc(u) + '" class="dir-card">' +
        '<span class="dir-check">&#x2713;</span>' +
        '<span class="dir-name">' + esc(u) + '<span class="dir-domain">@txid.uk</span></span>' +
        '</a>';
    }).join('');

    app.innerHTML = '<div class="dir-page">' +
      '<div class="dir-header">' +
      '<a href="#/" class="dir-back">' + t('back_home') + '</a>' +
      '<h2>' + t('directory') + ' <span class="badge badge-green">' + users.length + '</span></h2>' +
      '<p class="dir-desc">' + t('directory_desc') + '</p>' +
      '</div>' +
      '<div class="dir-grid">' + cards + '</div>' +
      '</div>';
  }).catch(function () {
    app.innerHTML = '<div class="profile-not-found"><div>Error loading directory</div>' +
      '<div style="margin-top:16px"><a href="#/" class="btn secondary">' + t('back_home') + '</a></div></div>';
  });
}

// ── Account Dashboard ──
function renderAccount() {
  var app = document.getElementById('app');
  var cta = document.getElementById('cta-login');
  var pricing = document.getElementById('pricing');
  var statsBar = document.getElementById('stats-bar');
  if (cta) cta.classList.add('hidden');
  if (pricing) pricing.classList.add('hidden');
  if (statsBar) statsBar.classList.add('hidden');

  if (!currentUser) {
    app.innerHTML = '<div class="profile-not-found"><div>' + t('login_required') + '</div>' +
      '<div style="margin-top:16px"><a href="#/" class="btn secondary">' + t('back_home') + '</a></div></div>';
    return;
  }

  app.innerHTML = '<div class="nip05-card"><div style="text-align:center;color:var(--text3);padding:20px">...</div></div>';

  api('/account/summary').then(function (data) {
    var u = data.user;
    var pubkeyShort = u.pubkey.slice(0, 8) + '...' + u.pubkey.slice(-8);
    var joinedDate = u.createdAt ? new Date(u.createdAt * 1000).toLocaleDateString() : '-';
    var lastLoginDate = u.lastLogin ? new Date(u.lastLogin * 1000).toLocaleDateString() : '-';

    // Avatar
    var avatarHtml = u.avatarUrl
      ? '<img src="' + esc(u.avatarUrl) + '" class="acct-avatar-lg" alt="">'
      : '<div class="acct-avatar-placeholder">' + esc((u.displayName || u.pubkey.slice(0, 2)).slice(0, 2).toUpperCase()) + '</div>';

    // Display name
    var displayName = u.displayName || pubkeyShort;

    // NIP-05 info
    var nip05Html = '';
    if (data.nip05 && data.nip05.status === 'active') {
      var isLifetime = data.nip05.planType === 'lifetime';
      var planLabel = isLifetime ? '&#x221E; ' + t('plan_lifetime') : t('plan_annual');
      var expDisplay = isLifetime ? t('lifetime_no_expiry') : new Date(data.nip05.expiresAt * 1000).toLocaleDateString();
      nip05Html = '<div class="acct-row"><span class="acct-label">' + t('account_nip05') + '</span><span class="acct-value"><span style="color:var(--green)">&#x2713;</span> ' + esc(data.nip05.username) + '@txid.uk</span></div>' +
        '<div class="acct-row"><span class="acct-label">' + t('account_plan') + '</span><span class="acct-value">' + planLabel + '</span></div>' +
        '<div class="acct-row"><span class="acct-label">' + t('nip05_expires') + '</span><span class="acct-value">' + expDisplay + '</span></div>';
    } else {
      nip05Html = '<div class="acct-row"><span class="acct-label">' + t('account_nip05') + '</span><span class="acct-value" style="color:var(--text3)">' + t('account_no_nip05') + ' <a href="#/" style="color:var(--blue);font-size:.7rem">' + t('account_register_nip05') + '</a></span></div>';
    }

    // Learning progress card
    var learnHtml = '';
    if (data.learnProgress) {
      var pages = Object.keys(data.learnProgress).length;
      learnHtml = '<div class="acct-card">' +
        '<div class="acct-card-title">' + t('account_learn') + '</div>' +
        '<div class="acct-card-value">' + pages + ' ' + t('account_pages') + '</div>' +
        '</div>';
    }

    // Portfolio card
    var portfolioHtml = '';
    if (data.portfolio && data.portfolio.length > 0) {
      portfolioHtml = '<div class="acct-card">' +
        '<div class="acct-card-title">' + t('account_portfolio') + '</div>' +
        '<div class="acct-card-value">' + data.portfolio.length + t('account_managing') + '</div>' +
        '</div>';
    }

    // Community card
    var comm = data.community;
    var communityHtml = '<div class="acct-card">' +
      '<div class="acct-card-title">' + t('account_community') + '</div>' +
      '<div class="acct-card-value">' + t('account_posts') + ' ' + comm.posts + ' / ' + t('account_comments') + ' ' + comm.comments + ' / ' + t('account_bookmarks') + ' ' + comm.bookmarks + '</div>' +
      '</div>';

    app.innerHTML = '<div class="acct-dashboard">' +
      '<div class="acct-header">' +
      '<div class="acct-avatar-wrap">' + avatarHtml + '</div>' +
      '<div class="acct-header-info">' +
      '<div class="acct-name">' + esc(displayName) + '</div>' +
      (data.nip05 && data.nip05.status === 'active' ? '<div class="acct-nip05-id">' + esc(data.nip05.username) + '@txid.uk</div>' : '') +
      '</div>' +
      '<a href="#/account/edit" class="btn secondary">' + t('account_edit') + '</a>' +
      '</div>' +
      '<div class="acct-info">' +
      '<div class="acct-row"><span class="acct-label">' + t('account_pubkey') + '</span><span class="acct-value acct-pubkey" id="acct-pubkey">' + esc(pubkeyShort) + '</span></div>' +
      '<div class="acct-row"><span class="acct-label">' + t('account_joined') + '</span><span class="acct-value">' + joinedDate + '</span></div>' +
      '<div class="acct-row"><span class="acct-label">' + t('account_last_login') + '</span><span class="acct-value">' + lastLoginDate + '</span></div>' +
      nip05Html +
      '</div>' +
      '<div class="acct-cards">' + learnHtml + portfolioHtml + communityHtml + '</div>' +
      '<div class="acct-actions">' +
      (data.nip05 && data.nip05.status === 'active' ? '<a href="#/" class="btn secondary" style="text-decoration:none">' + t('account_nip05_manage') + '</a>' : '') +
      '<a href="#/account/edit" class="btn secondary" style="text-decoration:none">' + t('account_avatar') + '</a>' +
      '</div>' +
      '</div>';

    // Pubkey copy
    document.getElementById('acct-pubkey').addEventListener('click', function () {
      navigator.clipboard.writeText(u.pubkey);
      this.textContent = t('copied');
      var el = this;
      setTimeout(function () { el.textContent = pubkeyShort; }, 1500);
    });
  }).catch(function (e) {
    app.innerHTML = '<div class="profile-not-found"><div>' + esc(e.message || 'Error') + '</div>' +
      '<div style="margin-top:16px"><a href="#/" class="btn secondary">' + t('back_home') + '</a></div></div>';
  });
}

// ── Account Edit / Profile Edit ──
function renderAccountEdit() {
  var app = document.getElementById('app');
  var cta = document.getElementById('cta-login');
  var pricing = document.getElementById('pricing');
  var statsBar = document.getElementById('stats-bar');
  if (cta) cta.classList.add('hidden');
  if (pricing) pricing.classList.add('hidden');
  if (statsBar) statsBar.classList.add('hidden');

  if (!currentUser) {
    app.innerHTML = '<div class="profile-not-found"><div>' + t('login_required') + '</div>' +
      '<div style="margin-top:16px"><a href="#/" class="btn secondary">' + t('back_home') + '</a></div></div>';
    return;
  }

  app.innerHTML = '<div class="nip05-card"><div style="text-align:center;color:var(--text3);padding:20px">...</div></div>';

  api('/account/summary').then(function (data) {
    var u = data.user;

    // Avatar section
    var avatarPreview = u.avatarUrl
      ? '<img src="' + esc(u.avatarUrl) + '" class="acct-avatar-lg" id="avatar-preview" alt="">'
      : '<div class="acct-avatar-placeholder" id="avatar-preview">' + esc((u.displayName || u.pubkey.slice(0, 2)).slice(0, 2).toUpperCase()) + '</div>';

    app.innerHTML = '<div class="acct-edit">' +
      '<div class="acct-edit-header">' +
      '<a href="#/account" class="dir-back">' + t('back_home') + '</a>' +
      '<h2>' + t('account_edit') + '</h2>' +
      '</div>' +
      // Avatar section
      '<div class="acct-edit-section">' +
      '<div class="acct-edit-label">' + t('account_avatar') + '</div>' +
      '<div class="acct-avatar-edit">' +
      avatarPreview +
      '<div class="acct-avatar-btns">' +
      '<label class="btn secondary acct-upload-label">' + t('account_avatar_upload') +
      '<input type="file" accept="image/*" id="avatar-input" style="display:none">' +
      '</label>' +
      (u.avatarUrl ? '<button class="btn secondary" id="avatar-remove">' + t('account_avatar_remove') + '</button>' : '') +
      '</div>' +
      '<div class="form-hint">' + t('account_avatar_hint') + '</div>' +
      '<div id="avatar-status" class="form-status"></div>' +
      '</div>' +
      '</div>' +
      // Nickname section
      '<div class="acct-edit-section">' +
      '<div class="acct-edit-label">' + t('account_nickname') + '</div>' +
      '<div class="form-row">' +
      '<input id="nickname-input" class="input" value="' + esc(u.displayName || '') + '" placeholder="' + t('account_nickname_ph') + '" maxlength="30">' +
      '<button id="nickname-save" class="btn">' + t('account_save') + '</button>' +
      '</div>' +
      '<div id="nickname-status" class="form-status"></div>' +
      '</div>' +
      '</div>';

    // Avatar upload handler
    document.getElementById('avatar-input').addEventListener('change', function () {
      var file = this.files[0];
      if (!file) return;
      if (file.size > 2 * 1024 * 1024) {
        document.getElementById('avatar-status').textContent = 'File too large (max 2MB)';
        document.getElementById('avatar-status').className = 'form-status error';
        return;
      }

      var statusEl = document.getElementById('avatar-status');
      statusEl.textContent = '...';
      statusEl.className = 'form-status';

      var formData = new FormData();
      formData.append('avatar', file);

      fetch('https://api.txid.uk/account/avatar', {
        method: 'PUT',
        credentials: 'include',
        body: formData,
      }).then(function (res) {
        if (!res.ok) throw new Error('Upload failed');
        return res.json();
      }).then(function (result) {
        statusEl.textContent = t('account_saved');
        statusEl.className = 'form-status success';

        // Update preview
        var previewEl = document.getElementById('avatar-preview');
        if (previewEl.tagName === 'IMG') {
          previewEl.src = result.avatarUrl;
        } else {
          var img = document.createElement('img');
          img.src = result.avatarUrl;
          img.className = 'acct-avatar-lg';
          img.id = 'avatar-preview';
          img.alt = '';
          previewEl.replaceWith(img);
        }

        // Update global auth widget
        if (window.txidAuth && txidAuth.updateAvatarUrl) {
          txidAuth.updateAvatarUrl(result.avatarUrl);
        }
      }).catch(function (e) {
        statusEl.textContent = e.message || 'Error';
        statusEl.className = 'form-status error';
      });
    });

    // Avatar remove handler
    var removeBtn = document.getElementById('avatar-remove');
    if (removeBtn) {
      removeBtn.addEventListener('click', function () {
        var statusEl = document.getElementById('avatar-status');
        statusEl.textContent = '...';
        api('/account/avatar', { method: 'DELETE' }).then(function () {
          statusEl.textContent = t('account_saved');
          statusEl.className = 'form-status success';
          // Replace with placeholder
          var previewEl = document.getElementById('avatar-preview');
          var placeholder = document.createElement('div');
          placeholder.className = 'acct-avatar-placeholder';
          placeholder.id = 'avatar-preview';
          placeholder.textContent = (u.displayName || u.pubkey.slice(0, 2)).slice(0, 2).toUpperCase();
          previewEl.replaceWith(placeholder);
          removeBtn.remove();
          if (window.txidAuth && txidAuth.updateAvatarUrl) {
            txidAuth.updateAvatarUrl(null);
          }
        }).catch(function (e) {
          statusEl.textContent = e.message || 'Error';
          statusEl.className = 'form-status error';
        });
      });
    }

    // Nickname save handler
    document.getElementById('nickname-save').addEventListener('click', function () {
      var name = document.getElementById('nickname-input').value.trim();
      var statusEl = document.getElementById('nickname-status');
      var btn = this;
      btn.disabled = true;
      btn.textContent = '...';

      api('/auth/me/display-name', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName: name || null }),
      }).then(function () {
        statusEl.textContent = t('account_saved');
        statusEl.className = 'form-status success';
        btn.disabled = false;
        btn.textContent = t('account_save');
        if (window.txidAuth && txidAuth.updateDisplayName) {
          txidAuth.updateDisplayName(name);
        }
      }).catch(function (e) {
        statusEl.textContent = e.message || 'Error';
        statusEl.className = 'form-status error';
        btn.disabled = false;
        btn.textContent = t('account_save');
      });
    });
  }).catch(function (e) {
    app.innerHTML = '<div class="profile-not-found"><div>' + esc(e.message || 'Error') + '</div>' +
      '<div style="margin-top:16px"><a href="#/" class="btn secondary">' + t('back_home') + '</a></div></div>';
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
    // Minimal profile (pubkey lookup, no NIP-05)
    if (data.minimal) {
      var npubShort = data.nostrPubkey ? (data.nostrPubkey.slice(0, 16) + '...' + data.nostrPubkey.slice(-8)) : '';
      var relayHtml = '';
      if (data.relays && data.relays.length) {
        relayHtml = '<div class="profile-section">' +
          '<div class="profile-section-title">' + t('profile_relays') + '</div>' +
          '<ul class="relay-list">' + data.relays.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' +
          '</div>';
      }
      app.innerHTML = '<div class="profile-card profile-minimal">' +
        '<div class="profile-avatar-lg">' + esc(data.nostrPubkey.slice(0, 2).toUpperCase()) + '</div>' +
        '<div class="profile-npub" id="profile-npub" title="' + t('copy') + '">' + esc(npubShort) + '</div>' +
        '<div class="profile-minimal-note">' + t('profile_minimal') + '</div>' +
        relayHtml +
        '<div class="profile-links">' +
        '<a href="https://njump.me/' + esc(data.nostrPubkey) + '" target="_blank" rel="noopener">' + t('profile_follow') + '</a>' +
        '<a href="#/" class="btn">' + t('profile_get_verified') + '</a>' +
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
      return;
    }

    // Full profile (NIP-05 registered)
    var relayHtml = '';
    if (data.relays && data.relays.length) {
      relayHtml = '<div class="profile-section">' +
        '<div class="profile-section-title">' + t('profile_relays') + '</div>' +
        '<ul class="relay-list">' + data.relays.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' +
        '</div>';
    }

    // B2: Badges
    var badgesHtml = '';
    if (data.badges && data.badges.length) {
      var BADGE_MAP = {
        'early-adopter': { cls: 'badge-ea', label: t('badge_early_adopter') },
        'veteran': { cls: 'badge-vet', label: t('badge_veteran') },
        'lifetime': { cls: 'badge-lt', label: t('badge_lifetime') },
        'admin': { cls: 'badge-adm', label: t('badge_admin') },
      };
      var badgeTags = data.badges.map(function (b) {
        var info = BADGE_MAP[b] || { cls: '', label: b };
        return '<span class="profile-badge ' + info.cls + '">' + esc(info.label) + '</span>';
      }).join('');
      badgesHtml = '<div class="profile-badges">' + badgeTags + '</div>';
    }

    var planHtml = '';
    if (data.planType) {
      var planLabel = data.planType === 'lifetime' ? '&#x221E; ' + t('plan_lifetime') : t('plan_annual');
      planHtml = '<div class="profile-plan">' + planLabel + '</div>';
    }

    var displayName = data.username || username;
    var npubShort = data.nostrPubkey ? (data.nostrPubkey.slice(0, 20) + '...' + data.nostrPubkey.slice(-8)) : '';

    app.innerHTML = '<div class="profile-card">' +
      '<div class="profile-nip05"><span class="profile-verified">&#x2713;</span> ' + esc(displayName) + '@txid.uk</div>' +
      badgesHtml +
      planHtml +
      (data.nostrPubkey ? '<div class="profile-npub" id="profile-npub" title="' + t('copy') + '">' + esc(npubShort) + '</div>' : '') +
      relayHtml +
      '<div class="profile-section">' +
      '<div class="profile-section-title">' + t('profile_ln') + '</div>' +
      '<div style="font-size:.75rem;color:var(--text3)"><span class="badge-coming">' + t('coming_soon') + '</span></div>' +
      '</div>' +
      '<div class="profile-links">' +
      '<a href="https://njump.me/' + esc(displayName) + '@txid.uk" target="_blank" rel="noopener">' + t('profile_follow') + '</a>' +
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
