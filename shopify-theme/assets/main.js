/* ── NutriGlen main.js ── */

/* ── Navbar scroll behaviour ── */
(function () {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile menu ── */
(function () {
  const btn   = document.getElementById('mobile-menu-btn');
  const menu  = document.getElementById('mobile-menu');
  const openI = document.getElementById('menu-icon-open');
  const closeI= document.getElementById('menu-icon-close');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden');
    openI  && (openI.style.display  = open ? 'block' : 'none');
    closeI && (closeI.style.display = open ? 'none'  : 'block');
  });

  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      menu.classList.add('hidden');
      openI  && (openI.style.display  = 'block');
      closeI && (closeI.style.display = 'none');
    })
  );
})();

/* ── Cart count badge ── */
(function () {
  fetch('/cart.js')
    .then(r => r.json())
    .then(cart => {
      document.querySelectorAll('[data-cart-count]').forEach(el => {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    })
    .catch(() => {});
})();

/* ── FAQ accordion ── */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn    = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon   = item.querySelector('.faq-icon');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer')?.classList.remove('open');
      i.querySelector('.faq-icon')?.classList.remove('bg-green-600', 'text-white', 'rotate-45');
      i.querySelector('.faq-icon')?.classList.add('bg-gray-100', 'text-gray-500');
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.classList.add('open');
      icon && icon.classList.remove('bg-gray-100', 'text-gray-500');
      icon && icon.classList.add('bg-green-600', 'text-white');
    }
  });
});

/* ── Product quantity selector ── */
(function () {
  const btns        = document.querySelectorAll('.qty-btn');
  const qtyInput    = document.getElementById('quantity-input');
  const totalPrice  = document.getElementById('total-price');
  const atcBtn      = document.getElementById('atc-btn');
  const atcLabel    = document.getElementById('atc-label');

  if (!btns.length) return;

  const basePrice = parseFloat(document.getElementById('product-base-price')?.dataset.price || 0);

  const tierPrices = {
    1: basePrice,
    2: basePrice * 0.90,  // 10 % off for 2
    3: basePrice * 0.825, // 17.5 % off for 3
  };

  function updatePrice(qty) {
    if (!totalPrice) return;
    const unit  = tierPrices[qty] ?? basePrice;
    const total = (unit * qty).toFixed(2);
    totalPrice.textContent = '$' + total;
    if (atcLabel) atcLabel.textContent = 'Add to Cart — $' + total;
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const qty = parseInt(btn.dataset.qty, 10);
      if (qtyInput) qtyInput.value = qty;
      updatePrice(qty);
    });
  });

  // initialise with qty=1
  btns[0]?.click();
})();

/* ── Add to cart (AJAX) ── */
(function () {
  const form = document.getElementById('product-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn   = document.getElementById('atc-btn');
    const label = document.getElementById('atc-label');
    const varId = document.getElementById('variant-id')?.value;
    const qty   = parseInt(document.getElementById('quantity-input')?.value || 1, 10);

    if (!varId) return;

    btn.disabled = true;
    if (label) label.textContent = 'Adding…';

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: parseInt(varId, 10), quantity: qty }),
    })
      .then(r => r.json())
      .then(() => {
        btn.classList.add('added');
        if (label) label.textContent = '✓ Added to Cart!';

        // refresh cart count badge
        return fetch('/cart.js');
      })
      .then(r => r.json())
      .then(cart => {
        document.querySelectorAll('[data-cart-count]').forEach(el => {
          el.textContent = cart.item_count;
          el.style.display = 'flex';
        });

        setTimeout(() => {
          btn.disabled = false;
          btn.classList.remove('added');
          const qty = parseInt(document.getElementById('quantity-input')?.value || 1, 10);
          const baseP = parseFloat(document.getElementById('product-base-price')?.dataset.price || 0);
          const tierPrices = { 1: baseP, 2: baseP * 0.90, 3: baseP * 0.825 };
          const total = ((tierPrices[qty] ?? baseP) * qty).toFixed(2);
          if (label) label.textContent = 'Add to Cart — $' + total;
        }, 2500);
      })
      .catch(() => {
        btn.disabled = false;
        btn.classList.remove('added');
        if (label) label.textContent = 'Add to Cart';
      });
  });

  // Buy now
  document.getElementById('buy-now-btn')?.addEventListener('click', () => {
    const varId = document.getElementById('variant-id')?.value;
    const qty   = parseInt(document.getElementById('quantity-input')?.value || 1, 10);
    if (!varId) return;

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: parseInt(varId, 10), quantity: qty }),
    })
      .then(() => { window.location.href = '/checkout'; });
  });
})();
