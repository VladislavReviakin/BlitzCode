(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),mobileMenuLinks:document.querySelectorAll(".link-nav-menu")};e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n);function n(){e.menu.classList.toggle("is-hidden")}function i(){e.menu.classList.add("is-hidden")}e.mobileMenuLinks.forEach(r=>{r.addEventListener("click",i)})})();new Swiper(".image-slider",{loop:!0,autoplay:{delay:1e3,disableOnInteraction:!1,stopOnLastSlide:!1},speed:1500,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:24}}});var l=document.querySelector(".number"),f=l.getBoundingClientRect().top,u=+l.innerHTML,p=+l.dataset.max;window.addEventListener("scroll",function e(){if(window.pageYOffset>f-window.innerHeight/2){this.removeEventListener("scroll",e);var n=setInterval(function(){l.innerHTML=++u,u==p&&clearInterval(n)},100)}});var s=document.querySelector(".number1"),L=s.getBoundingClientRect().top,a=+s.innerHTML,v=+s.dataset.max;window.addEventListener("scroll",function e(){if(window.pageYOffset>L-window.innerHeight/2){this.removeEventListener("scroll",e);var n=setInterval(function(){s.innerHTML=++a,a==v&&clearInterval(n)},5)}});var c=document.querySelector(".number2"),g=c.getBoundingClientRect().top,m=+c.innerHTML,w=+c.dataset.max;window.addEventListener("scroll",function e(){if(window.pageYOffset>g-window.innerHeight/2){this.removeEventListener("scroll",e);var n=setInterval(function(){c.innerHTML=++m,m==w&&clearInterval(n)},5)}});(()=>{const e={openMenuBtn:document.querySelector("[data-modal-open]"),closeMenuBtn:document.querySelector("[data-modal-close]"),menu:document.querySelector("[data-modal]"),mobileMenuLinks:document.querySelectorAll(".link-nav-menu")};e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n);function n(){e.menu.classList.toggle("is-hidden")}function i(){e.menu.classList.add("is-hidden")}e.mobileMenuLinks.forEach(r=>{r.addEventListener("click",i)})})();
