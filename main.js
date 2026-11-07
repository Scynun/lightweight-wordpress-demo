// PixelRank Studio demo — mobile nav, portfolio/blog filters, enquiry form, video placeholder.
(function () {
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () { nav.classList.toggle('open'); });
  }

  // Generic filter: buttons [data-filter] filter items [data-category] in a container.
  // Works for the portfolio grid (#portfolioGrid / #noProjects) and the blog list (#postList / #noPosts).
  document.querySelectorAll('.filters').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      group.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      var section = group.closest('section');
      var items = section.querySelectorAll('[data-category]');
      var visible = 0;
      items.forEach(function (item) {
        var cats = (item.getAttribute('data-category') || '').split(/\s+/);
        var show = filter === 'all' || cats.indexOf(filter) !== -1;
        item.classList.toggle('hidden', !show);
        if (show) visible++;
      });
      ['noProjects', 'noPosts'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.style.display = visible === 0 ? 'block' : 'none';
      });
    });
  });

  // Enquiry form: client-side validation + demo success message (no backend in a static demo).
  var form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      function check(id, errId, test, msg) {
        var el = document.getElementById(id);
        var err = document.getElementById(errId);
        var valid = el && test(el.value.trim());
        if (err) err.textContent = valid ? '' : msg;
        if (!valid) ok = false;
      }
      check('name', 'err-name', function (v) { return v.length >= 2; }, 'Please enter your name.');
      check('phone', 'err-phone', function (v) { return /^[+\d][\d\s-]{7,}$/.test(v); }, 'Please enter a valid phone number.');
      check('email', 'err-email', function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }, 'Please enter a valid email address.');
      check('message', 'err-message', function (v) { return v.length >= 10; }, 'Please tell us a little about your project (10+ characters).');
      var success = document.getElementById('formSuccess');
      if (ok && success) {
        success.style.display = 'block';
        form.querySelector('button[type="submit"]').disabled = true;
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Video testimonial placeholder: explain what would play here.
  var videoBox = document.getElementById('videoBox');
  var videoNote = document.getElementById('videoNote');
  if (videoBox && videoNote) {
    videoBox.addEventListener('click', function () {
      videoNote.textContent = 'Demo note: the client’s real testimonial video (e.g. a 1–2 min YouTube embed or self-hosted MP4, lazy-loaded so it doesn’t slow the page) would play here. No real client video was supplied for this demo.';
    });
  }
})();
