import{a as l,S as p,i as c}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";function m(n){return l.get("/",{params:{key:"57805078-134aca3c8ad054738ba6853d0",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".load-wrapper"),y=new p(".gallery a");function h(n){const o=n.map(r=>`<div>
  <a href="${r.largeImageURL}">
    <img src="${r.webformatURL}" alt="${r.tags}">
  </a>
  <div>
    <p>Likes: ${r.likes}</p>
    <p>Views: ${r.views}</p>
    <p>Comments: ${r.comments}</p>
    <p>Downloads: ${r.downloads}</p>
  </div>
</div>`);u.innerHTML=o.join(""),y.refresh()}function g(){u.innerHTML=""}function L(){d.style.display="flex"}function i(){d.style.display="none"}const f=document.querySelector(".form");f.addEventListener("submit",b);function b(n){n.preventDefault();const o=f.elements["search-text"].value;o.trim()&&(g(),L(),m(o).then(r=>{if(r.hits.length===0){i(),c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits),i()}).catch(()=>{i(),c.error({message:"Something went wrong. Please try again later."})}))}
//# sourceMappingURL=index.js.map
