---
layout: splash
header:
  overlay_color: "#0B0D0F"
  overlay_filter: "rgba(11, 13, 15, 0.42)"
  overlay_image: /assets/images/splash.svg
excerpt: Shipping code, chasing light.
gallery:
  - url: /assets/photos/DSC_6181.webp
    image_path: /assets/photos/thumbnails/DSC_6181.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6156.webp
    image_path: /assets/photos/thumbnails/DSC_6156.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6146.webp
    image_path: /assets/photos/thumbnails/DSC_6146.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6119.webp
    image_path: /assets/photos/thumbnails/DSC_6119.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6110.webp
    image_path: /assets/photos/thumbnails/DSC_6110.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6106.webp
    image_path: /assets/photos/thumbnails/DSC_6106.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6076.webp
    image_path: /assets/photos/thumbnails/DSC_6076.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6011.webp
    image_path: /assets/photos/thumbnails/DSC_6011.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6008.webp
    image_path: /assets/photos/thumbnails/DSC_6008.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6007.webp
    image_path: /assets/photos/thumbnails/DSC_6007.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/DSC_6005.webp
    image_path: /assets/photos/thumbnails/DSC_6005.jpg.webp
    title: Dry Island Buffalo Jump Provincial Park
  - url: /assets/photos/P7250020.webp
    image_path: /assets/photos/thumbnails/P7250020.jpg.webp
    title: Sylvan Lake, Alberta, Canada
  - url: /assets/photos/DSC_5856.webp
    image_path: /assets/photos/thumbnails/DSC_5856.jpg.webp
    title: Comet C/2020 F3 (NEOWISE)
  - url: /assets/photos/P7160043.webp
    image_path: /assets/photos/thumbnails/P7160043.jpg.webp
    title: Comet C/2020 F3 (NEOWISE)
  - url: /assets/photos/P6050177.webp
    image_path: /assets/photos/thumbnails/P6050177.jpg.webp
    title: Lighthouse @ Sylvan Lake, Alberta, Canada
  - url: /assets/photos/DSC_0053-Min Horizon Noise.webp
    image_path: /assets/photos/thumbnails/DSC_0053-Min Horizon Noise.jpg.webp
    title: Milky Way w/ Andromeda
  - url: /assets/photos/DSC_0047-Max Value.webp
    image_path: /assets/photos/thumbnails/DSC_0047-Max Value.jpg.webp
    title: Milky Way
  - url: /assets/photos/DSC_0041-Max Value.webp
    image_path: /assets/photos/thumbnails/DSC_0041-Max Value.jpg.webp
    title: Milky Way
intro:
  - excerpt: All images are © Trevor Lauder.<br>[Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
---

{% include feature_row id="intro" type="center" %}

{% include gallery class="full" %}

<script>
// Deterministic daily tagline (client-side) using _data/taglines.json.
// Fallback: the static front matter 'excerpt' remains for SEO and no-JS.
(function() {
  var taglines = {{ site.data.taglines | jsonify }};
  if(!Array.isArray(taglines) || !taglines.length) return; // Safety

  function dayOfYear(d){
    var start = new Date(Date.UTC(d.getFullYear(),0,0));
    return Math.floor((d - start) / 86400000); // 0..365
  }

  function dailyIndex(len){
    // Anchor calculation to Mountain Time (America/Denver) for consistent rollover
    var mtNow = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Denver' }));
    var idx = (dayOfYear(mtNow) + mtNow.getFullYear()) % len;
    return idx;
  }

  function setDailyTagline(){
    var el = document.querySelector('.page__lead');
    if(!el) return;

    // Prepare fade transition class
    if(!el.classList.contains('tagline-fade-transition')) {
      el.classList.add('tagline-fade-transition');
    }

    var todayIdx = dailyIndex(taglines.length);
    var computed = taglines[todayIdx];

    // Mountain Time date key
    var mtNow = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Denver' }));
    var dateKey = mtNow.getFullYear()+'-'+String(mtNow.getMonth()+1).padStart(2,'0')+'-'+String(mtNow.getDate()).padStart(2,'0');
    var LS_KEY_DATE = 'dailyTaglineDate';
    var LS_KEY_TEXT = 'dailyTaglineText';
    try {
      var storedDate = localStorage.getItem(LS_KEY_DATE);
      var storedText = localStorage.getItem(LS_KEY_TEXT);
      if(storedDate === dateKey && storedText) {
        // Use cached text if still in list; else fall back to computed
        if(taglines.indexOf(storedText) !== -1) {
          if(el.textContent.trim() !== storedText) {
            fadeSwap(el, storedText);
          }
          return; // Done for today
        }
      }
      // Store today's choice
      localStorage.setItem(LS_KEY_DATE, dateKey);
      localStorage.setItem(LS_KEY_TEXT, computed);
    } catch(e) { /* Ignore storage errors (private mode, etc.) */ }

    if(el.textContent.trim() !== computed) {
      fadeSwap(el, computed);
    }
  }

  function fadeSwap(el, text){
    // Avoid layout shift: keep current height by setting explicit min-height once
    if(!el.style.minHeight) {
      el.style.minHeight = el.offsetHeight + 'px';
    }
    el.style.opacity = 0;
    requestAnimationFrame(function(){
      setTimeout(function(){
        el.textContent = text;
        el.style.opacity = 1;
      }, 160); // allow fade out start
    });
  }

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setDailyTagline);
  } else {
    setDailyTagline();
  }
})();
</script>
<style>
.tagline-fade-transition { transition: opacity .6s ease; }
</style>
<noscript><style>.page__lead-noscript{display:block;font-style:italic;opacity:.85;margin-top:.5rem}</style><span class="page__lead-noscript">(Static tagline shown – enable JavaScript for daily variation)</span></noscript>
