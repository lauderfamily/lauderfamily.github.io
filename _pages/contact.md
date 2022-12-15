---
permalink: /contact/
title: Contact Me
---

<main id="main" class="site-main">
  <div class="post-full inner">
    {% if site.contact_page_description %}
    <p>{{ site.contact_page_description }}</p>
    {{else}}
    {% endif %}
    <section class="contact-form">
      <form action="https://formspree.io/f/{{ site.formspree }}" method="post" id="contact-form">
        <div class="form-item">
          <label class="form-label">Your Email <span>(required)</span></label>
          <input type="text" name="email" placeholder="Your email address..." class="form-input" />
        </div>

        <div class="form-item">
          <label class="form-label">Your Name <span>(required)</span></label>
          <input type="text" name="name" placeholder="Your name..." class="form-input" />
        </div>

        <div class="form-item">
          <label class="form-label">Your Message <span>(required)</span></label>
          <textarea name="message" placeholder="Your message..." class="form-textarea"></textarea>
        </div>

        <input type="hidden" name="_next" value="/thank-you" />
        <input type="hidden" name="_subject" value="Contact form submission" />
        <input type="text" name="_gotcha" style="display: none;" class="contact-form__gotcha" val="" />

        <div class="form-item">
          <input type="submit" value="Send Message" class="button" />
        </div>
      </form>
    </section>
  </div><!-- .inner-->
</main>
