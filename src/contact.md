---
layout: page
title: Contact
permalink: /contact/
---


<form action="https://formspree.io/yeserikcan@gmail.com" method="POST">
  <div class="group">
    <input type="text" name="name" required>
    <label for="name">Name</label>
    <div class="bar"></div>
  </div>
  <div class="group">
    <input type="email" name="_replyto" required>
    <label for="_replyto">Email</label>
    <div class="bar"></div>
  </div>
  <div class="group">
    <input type="text" name="message" required>
    <label for="message">Message</label>
    <div class="bar"></div>
  </div>
  <input type="hidden" name="_next" value="{{ site.baseurl }}/thanks" />
  <input type="submit" value="Submit">
</form>

