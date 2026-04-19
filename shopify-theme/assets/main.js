/* ══════════════════════════════════════════
   NutriGlen main.js
══════════════════════════════════════════ */

/* ── Helpers ── */
function moneyFmt(cents) {
  return '$' + (cents / 100).toFixed(2);
}

/* ── Navbar: transparent → white on scroll ── */
(function () {
  var h = document.getElementById('site-header');
  if (!h) return;
  var onScroll = function () { h.classList.toggle('scrolled', window.scrollY > 20); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Logo invert setting ── */
(function () {
  if (document.body.dataset.logoInvert === 'true') {
    document.body.classList.add('logo-invert-on-dark');
  }
})();

/* ── Mobile menu ── */
(function () {
  var btn    = document.getElementById('mobile-menu-btn');
  var menu   = document.getElementById('mobile-menu');
  var iconO  = document.getElementById('menu-icon-open');
  var iconC  = document.getElementById('menu-icon-close');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var hidden = menu.classList.toggle('hidden');
    if (iconO) iconO.style.display = hidden ? 'block' : 'none';
    if (iconC) iconC.style.display = hidden ? 'none'  : 'block';
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.add('hidden');
      if (iconO) iconO.style.display = 'block';
      if (iconC) iconC.style.display = 'none';
    });
  });
})();

/* ── FAQ accordion ── */
document.querySelectorAll('.faq-item').forEach(function (item) {
  var btn    = item.querySelector('.faq-question');
  var answer = item.querySelector('.faq-answer');
  var icon   = item.querySelector('.faq-icon');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var wasOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(function (i) {
      i.classList.remove('open');
      var a = i.querySelector('.faq-answer');
      var ic = i.querySelector('.faq-icon');
      if (a)  a.classList.remove('open');
      if (ic) { ic.classList.remove('bg-green-600', 'text-white'); ic.classList.add('bg-gray-100', 'text-gray-500'); }
    });

    if (!wasOpen) {
      item.classList.add('open');
      if (answer) answer.classList.add('open');
      if (icon) { icon.classList.remove('bg-gray-100', 'text-gray-500'); icon.classList.add('bg-green-600', 'text-white'); }
    }
  });
});

/* ── Product page qty tiers ── */
(function () {
  var btns     = document.querySelectorAll('.qty-btn');
  var qtyInput = document.getElementById('quantity-input');
  var totalEl  = document.getElementById('total-price');
  var labelEl  = document.getElementById('atc-label');

  if (!btns.length) return;

  var basePrice = parseFloat(document.getElementById('product-base-price')?.dataset.price || 0);

  function unitPrice(qty) {
    if (qty >= 3) return basePrice * 0.825;
    if (qty >= 2) return basePrice * 0.90;
    return basePrice;
  }
  function updateDisplay(qty) {
    var total = (unitPrice(qty) * qty).toFixed(2);
    if (totalEl)  totalEl.textContent  = '$' + total;
    if (labelEl)  labelEl.textContent  = 'Add to Cart — $' + total;
  }

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var qty = parseInt(btn.dataset.qty, 10);
      if (qtyInput) qtyInput.value = qty;
      updateDisplay(qty);
    });
  });

  btns[0] && btns[0].click();
})();

/* ── Add to cart ── */
(function () {
  var form = document.getElementById('product-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn    = document.getElementById('atc-btn');
    var label  = document.getElementById('atc-label');
    var varId  = parseInt(document.getElementById('variant-id')?.value, 10);
    var qty    = parseInt(document.getElementById('quantity-input')?.value || 1, 10);

    if (!varId) { alert('Please select a product variant.'); return; }

    btn.disabled = true;
    if (label) label.textContent = 'Adding…';

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: varId, quantity: qty })
    })
      .then(function (r) { return r.json(); })
      .then(function () {
        btn.classList.add('added');
        if (label) label.textContent = '✓ Added!';
        // Open the drawer
        cartDrawer.open();
        setTimeout(function () {
          btn.disabled = false;
          btn.classList.remove('added');
          var q  = parseInt(document.getElementById('quantity-input')?.value || 1, 10);
          var bp = parseFloat(document.getElementById('product-base-price')?.dataset.price || 0);
          function up(qty) { if (qty>=3) return bp*.825; if (qty>=2) return bp*.9; return bp; }
          if (label) label.textContent = 'Add to Cart — $' + (up(q)*q).toFixed(2);
        }, 2600);
      })
      .catch(function () {
        btn.disabled = false;
        btn.classList.remove('added');
        if (label) label.textContent = 'Add to Cart';
      });
  });

  // Buy Now
  document.getElementById('buy-now-btn')?.addEventListener('click', function () {
    var varId = parseInt(document.getElementById('variant-id')?.value, 10);
    var qty   = parseInt(document.getElementById('quantity-input')?.value || 1, 10);
    if (!varId) return;

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: varId, quantity: qty })
    })
    .then(function () { window.location.href = '/checkout'; });
  });
})();


/* ══════════════════════════════════════════
   CART DRAWER
══════════════════════════════════════════ */
var cartDrawer = (function () {
  var THRESHOLD = (window.NutriGlen && window.NutriGlen.freeShippingThreshold) || 5000;

  var overlay  = document.getElementById('cart-overlay');
  var drawer   = document.getElementById('cart-drawer');
  var closeBtn = document.getElementById('cart-drawer-close');
  var openBtn  = document.getElementById('cart-drawer-btn');

  function open() {
    refresh().then(function () {
      drawer  && drawer.classList.add('open');
      overlay && overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  function close() {
    drawer  && drawer.classList.remove('open');
    overlay && overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function refresh() {
    return fetch('/cart.js')
      .then(function (r) { return r.json(); })
      .then(function (cart) { render(cart); return cart; })
      .catch(function () {});
  }

  function render(cart) {
    updateBadges(cart.item_count);
    updateShippingBar(cart.total_price);
    updateItems(cart);

    var subtotalEl = document.getElementById('drawer-subtotal');
    if (subtotalEl) subtotalEl.textContent = moneyFmt(cart.total_price);

    var countEl = document.getElementById('drawer-count');
    if (countEl) countEl.textContent = cart.item_count > 0 ? '(' + cart.item_count + ')' : '';
  }

  function updateBadges(count) {
    document.querySelectorAll('[data-cart-count]').forEach(function (el) {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  function updateShippingBar(total) {
    var textEl = document.getElementById('drawer-shipping-text');
    var fillEl = document.getElementById('drawer-shipping-fill');
    var remaining = Math.max(0, THRESHOLD - total);
    var pct = Math.min(100, (total / THRESHOLD) * 100);

    if (textEl) {
      textEl.textContent = remaining > 0
        ? 'Add ' + moneyFmt(remaining) + ' more for FREE shipping!'
        : '🎉 You\'ve unlocked FREE shipping!';
    }
    if (fillEl) fillEl.style.width = pct + '%';
  }

  function updateItems(cart) {
    var container = document.getElementById('drawer-items');
    if (!container) return;

    if (cart.item_count === 0) {
      var tpl = document.getElementById('drawer-empty-tpl');
      container.innerHTML = '';
      if (tpl) container.appendChild(tpl.content.cloneNode(true));
      return;
    }

    container.innerHTML = cart.items.map(function (item) {
      var img = item.image
        ? '<img src="' + item.image + '" alt="' + (item.title || '') + '" class="drawer-item-img">'
        : '<div class="drawer-item-img-placeholder"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/></svg></div>';

      var variant = (item.variant_title && item.variant_title !== 'Default Title')
        ? '<p class="drawer-item-variant">' + item.variant_title + '</p>' : '';

      return '<div class="drawer-item" data-key="' + item.key + '">' +
        '<a href="' + item.url + '">' + img + '</a>' +
        '<div class="drawer-item-body">' +
          '<a href="' + item.url + '" class="drawer-item-title">' + item.product_title + '</a>' +
          variant +
          '<div class="drawer-item-footer">' +
            '<div class="drawer-qty-control">' +
              '<button class="drawer-qty-btn" onclick="cartDrawer.updateQty(\'' + item.key + '\',' + (item.quantity - 1) + ')" aria-label="Decrease">&#8722;</button>' +
              '<span class="drawer-qty-num">' + item.quantity + '</span>' +
              '<button class="drawer-qty-btn" onclick="cartDrawer.updateQty(\'' + item.key + '\',' + (item.quantity + 1) + ')" aria-label="Increase">&#43;</button>' +
            '</div>' +
            '<span class="drawer-item-price">' + moneyFmt(item.final_line_price) + '</span>' +
          '</div>' +
          '<button class="drawer-remove-btn" onclick="cartDrawer.updateQty(\'' + item.key + '\',0)">Remove</button>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function updateQty(key, qty) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: key, quantity: qty })
    })
    .then(function (r) { return r.json(); })
    .then(function (cart) { render(cart); })
    .catch(function () {});
  }

  /* Init event listeners */
  openBtn  && openBtn.addEventListener('click',  open);
  closeBtn && closeBtn.addEventListener('click', close);
  overlay  && overlay.addEventListener('click',  close);

  /* Keyboard close */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  /* Initial badge count */
  fetch('/cart.js')
    .then(function (r) { return r.json(); })
    .then(function (cart) { updateBadges(cart.item_count); })
    .catch(function () {});

  return { open: open, close: close, refresh: refresh, updateQty: updateQty };
})();


/* ══════════════════════════════════════════
   CART PAGE — AJAX qty + remove
══════════════════════════════════════════ */
(function () {
  var THRESHOLD = (window.NutriGlen && window.NutriGlen.freeShippingThreshold) || 5000;

  function changeQty(key, qty) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: key, quantity: qty })
    })
    .then(function (r) { return r.json(); })
    .then(function (cart) {
      // Update badge
      document.querySelectorAll('[data-cart-count]').forEach(function (el) {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });

      // Update subtotal + total
      var st = document.getElementById('cart-page-subtotal');
      var tot = document.getElementById('cart-page-total');
      if (st)  st.textContent  = moneyFmt(cart.total_price);
      if (tot) tot.textContent = moneyFmt(cart.total_price);

      // Update each item's displayed qty and line price
      cart.items.forEach(function (item) {
        var row = document.querySelector('[data-key="' + item.key + '"]');
        if (!row) return;

        // Update qty display
        var qtyEl = row.querySelector('.item-qty');
        if (qtyEl) qtyEl.textContent = item.quantity;

        // Update line price
        var priceEl = row.querySelector('.line-price');
        if (priceEl) priceEl.textContent = moneyFmt(item.final_line_price);

        // Update +/- button data-qty values
        var dec = row.querySelector('.qty-dec');
        var inc = row.querySelector('.qty-inc');
        if (dec) dec.dataset.qty = item.quantity - 1;
        if (inc) inc.dataset.qty = item.quantity + 1;
      });

      // If item is now qty=0, animate it out then remove
      document.querySelectorAll('[data-key]').forEach(function (row) {
        var itemKey = row.dataset.key;
        var stillInCart = cart.items.some(function (i) { return i.key === itemKey; });
        if (!stillInCart) {
          row.classList.add('removing');
          setTimeout(function () {
            row.remove();
            // If cart is now empty, reload to show empty state
            if (cart.item_count === 0) window.location.reload();
          }, 320);
        }
      });

      // Update free shipping bar on cart page
      var bar  = document.querySelector('.h-2.bg-green-100');
      var fill = document.querySelector('.h-2.bg-green-100 .bg-green-600');
      if (fill) fill.style.width = Math.min(100, (cart.total_price / THRESHOLD) * 100) + '%';
    })
    .catch(function () {});
  }

  // Delegate qty-dec / qty-inc / cart-remove-btn
  document.addEventListener('click', function (e) {
    var dec = e.target.closest('.qty-dec');
    var inc = e.target.closest('.qty-inc');
    var rem = e.target.closest('.cart-remove-btn');

    if (dec) { e.preventDefault(); changeQty(dec.dataset.key, parseInt(dec.dataset.qty, 10)); }
    if (inc) { e.preventDefault(); changeQty(inc.dataset.key, parseInt(inc.dataset.qty, 10)); }
    if (rem) { e.preventDefault(); changeQty(rem.dataset.key, 0); }
  });
})();
