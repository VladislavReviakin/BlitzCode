(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),mobileMenuLinks:document.querySelectorAll(".link-nav-menu")};t.openMenuBtn.addEventListener("click",o),t.closeMenuBtn.addEventListener("click",o);function o(){t.menu.classList.toggle("is-hidden")}function i(){t.menu.classList.add("is-hidden")}t.mobileMenuLinks.forEach(r=>{r.addEventListener("click",i)})})();new Swiper(".image-slider",{loop:!0,autoplay:{delay:1e3,disableOnInteraction:!1,stopOnLastSlide:!1},speed:1500,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:24}}});
