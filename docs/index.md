---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "PyCharming"
  text: "A Python Library for ASCII Art"
  tagline: Processing-style creative coding for the terminal. Create ASCII art animations, generative art, terminal games, and expressive data visualizations.
  image:
    src: /example.png
    alt: PyCharming-example
  actions:
    - theme: brand
      text: Get Started
      link: /docs/get-started
    - theme: alt
      text: What is PyCharming?
      link: /docs/what-is-pycharming
    - theme: alt
      text: Examples
      link: /examples/readme

features:
  - title: 🎨 Highly Expressive
    details: Colors in PyCharming include a character channel alongside foreground and background colors, giving you more ways to express your ideas.
  - title: 🚀 Powerful and Flexible
    details: Draw shapes, curves, images, and typography with transforms and events. More flexible than most terminal art tools.
  - title: 📚 Easy to Learn
    details: Beginner-friendly with Python's simple syntax and Processing-style APIs. Start creating terminal art in minutes.
---

<div id="hero-name" style="display:none">
  <img src="/logo.svg"/>
</div>

<script setup>

// import {onMounted} from "vue";

// onMounted(() => {
//   const p = document.querySelector(".name.clip");
//   const s = document.querySelector("#hero-name");
//   if (!p || !s) return;
//   while (p.lastChild) p.lastChild.remove();
//   s.style.display = "block";
//   p.style.opacity = 1;
//   p.append(s);
// });

</script>

<style>

/* .VPHero .text {
  font-size: 45px !important;
  line-height: 56px !important;
}

.name.clip {
  height: 160px !important;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  margin-bottom: 20px !important;
}

.VPImage.image-src {
  border-radius: 10px;
} */
</style>
