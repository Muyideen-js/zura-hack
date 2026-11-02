(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // sticky header style
  var header = document.getElementById('header');
  function onScrollHeader() { header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  // hero spotlight follows the pointer
  var hero = document.getElementById('hero');
  if (hero && !reduce) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }

  // card glow follows the pointer
  document.querySelectorAll('.card').forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--cx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--cy', (e.clientY - r.top) + 'px');
    });
  });

  // scroll reveals: elements stay visible; only ones below the fold get animated as they enter
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('play');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal, .detail').forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight) io.observe(el);
    });
  }

  // timeline fill + lit dots
  var tl = document.getElementById('timeline');
  var items = tl ? tl.querySelectorAll('li') : [];
  function onScrollTimeline() {
    if (!tl) return;
    var r = tl.getBoundingClientRect();
    var mid = window.innerHeight * 0.6;
    var p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
    tl.style.setProperty('--progress', reduce ? 1 : p.toFixed(3));
    items.forEach(function (li) {
      var lr = li.getBoundingClientRect();
      li.classList.toggle('lit', reduce || lr.top < mid);
    });
  }
  window.addEventListener('scroll', onScrollTimeline, { passive: true });
  window.addEventListener('resize', onScrollTimeline);
  onScrollTimeline();

  // copy buttons
  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
      };
      var fallback = function () {
        var el = btn.previousElementSibling;
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        btn.textContent = 'Selected';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
      };
      try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
    });
  });
})();

// ---------- register form ----------
(function () {
  // Paste a Formspree, Tally or similar endpoint here once you have one (only works on your live site).
  var FORM_ENDPOINT = '';
  var form = document.getElementById('register-form');
  if (!form) return;
  var err = document.getElementById('form-error');
  var done = document.getElementById('form-done');
  var summary = document.getElementById('form-summary');
  var shell = document.getElementById('form-fields');

  function val(name) {
    var el = form.elements[name];
    if (!el) return '';
    if (el.length && el[0] && el[0].type === 'radio') {
      for (var i = 0; i < el.length; i++) if (el[i].checked) return el[i].value;
      return '';
    }
    return (el.value || '').trim();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    err.textContent = '';
    var name = val('name'), email = val('email');
    if (!name) { err.textContent = 'Add your full name so we know who you are.'; form.elements.name.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = 'Enter a valid email address, like you@example.com.'; form.elements.email.focus(); return; }
    if (!form.elements.agree.checked) { err.textContent = 'Please agree to the code of conduct to join.'; return; }

    var lines = [
      'Name: ' + name,
      'Email: ' + email,
      'Phone / WhatsApp: ' + (val('phone') || 'not given'),
      'Role: ' + (val('role') || 'not given'),
      'Experience: ' + (val('level') || 'not given'),
      'Skills: ' + (val('skills') || 'not given'),
      'Team: ' + (val('team') || 'not given'),
      'Idea: ' + (val('idea') || 'not given')
    ];
    var text = lines.join('\n');

    function showDone(sent) {
      summary.textContent = text;
      document.getElementById('done-sent').hidden = !sent;
      document.getElementById('done-mail').hidden = sent;
      shell.hidden = true;
      done.hidden = false;
      done.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (FORM_ENDPOINT) {
      var data = new FormData(form);
      fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(); showDone(true); })
        .catch(function () { err.textContent = 'We could not send your details. Check your connection and try again, or email hack@zura.com.ng.'; });
    } else {
      showDone(false);
      var href = 'mailto:hack@zura.com.ng?subject=' + encodeURIComponent('Zura Hack waitlist: ' + name) + '&body=' + encodeURIComponent(text);
      document.getElementById('mail-btn').setAttribute('href', href);
    }
  });
})();
