---
permalink: /privacy/
title: Privacy
layout: single
---

This site uses Google Analytics (GA4) to understand aggregate usage. We aim to minimize data collection and respect your choices.

What we do:

- Respect Do Not Track (DNT). If your browser’s DNT is enabled, analytics are disabled.
- Consent Mode defaults: ad storage is denied; analytics is denied until you accept.
- We set privacy‑friendly flags (`ads_data_redaction`, disable Google Signals, no URL passthrough).

Your choices:

- You can accept or reject analytics using the banner shown on first visit.
- You can change your choice any time below.

<button id="reset-consent" class="btn btn--primary" type="button">Change my choice</button>

<script>
  (function(){
    var $btn = document.getElementById('reset-consent');
    if(!$btn) return;
    $btn.addEventListener('click', function(){
      if(window.privacyConsent && typeof window.privacyConsent.reset === 'function') {
        window.privacyConsent.reset();
        alert('Preference cleared. A banner will appear so you can choose again.');
      } else {
        try {
          localStorage.removeItem('consent.analytics');
          alert('Preference cleared. Reload the page.');
        } catch(e) {}
      }
    });
  })();
</script>
