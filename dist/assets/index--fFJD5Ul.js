const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CfY9bawS.css","./gallery-CqhIPwSk.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const L="modulepreload",P=function(t,n){return new URL(t,n).href},h={},g=function(n,c,s){let e=Promise.resolve();if(c&&c.length>0){let b=function(o){return Promise.all(o.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),m=i?.nonce||i?.getAttribute("nonce");e=b(c.map(o=>{if(o=P(o,s),o in h)return;h[o]=!0;const d=o.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(s)for(let p=a.length-1;p>=0;p--){const v=a[p];if(v.href===o&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":L,d||(l.as="script"),l.crossOrigin="",l.href=o,m&&l.setAttribute("nonce",m),document.head.appendChild(l),d)return new Promise((p,v)=>{l.addEventListener("load",p),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}function r(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return e.then(a=>{for(const i of a||[])i.status==="rejected"&&r(i.reason);return n().catch(r)})};function y(t){history.pushState({},"",t),_()}function E(){const t=document.querySelector("#goHome"),n=document.querySelector("#goGallery");t&&t.addEventListener("click",()=>y("/home")),n&&n.addEventListener("click",()=>y("/gallery"))}function O(){return`
        
    <header>
        <div class="header_container">
            <div class="header_text_container">
                <h3>Kavro</h3>

                <span>⋆⋆ все наши работы ⋆⋆</span>
            </div>

            <div class="header_link_kover">
                <nav>  
                    <a id="goHome">‹ Главное</a>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section>
            <div id="gallery_list">
            </div>
        </section>
    </main>

    <div class="footer_gradient"></div>
    
    
    <footer>
        <div class="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div class="fog"></div>
    </footer>

    `}function w(){return`

    <header>
        <div class="header_container">
            <div class="header_text_container">
                <div class="Kavro_title_header">
                    <span><h3>K</h3></span>

                    <h3>avro</h3>
                </div>

                <span>Услуги в твоем районе</span>
            </div>

            <div class="header_link_gallery">
                <nav>  
                    <a id="goGallery">Галерея ›</a>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section class="section_Our_services">
            <div class="card_container">
                <div class="card_trova">
                    <div class="card_container_title_trova">
                    <h3>🌱 Покос травы</h3></div>

                    <div class="card_container_text_trova">
                        <span>Косим траву</span>
                        <span>Убираем траву</span>
                    </div>

                    <div class="card_container_text_trova">
                        <span>Вывозим мусор</span>
                        <span>Чистим участок</span>
                    </div>

                    <div class="card_container_text_trova">
                        <span>Подравниваение</span>
                        <span>Удаление сорняков</span>
                    </div>
                </div>

                <div class="card_bild">
                    <div class="card_container_title_bild">
                        <h3>🛠 Разнорабочие</h3>
                    </div>
                    
                        <div class="card_container_text_bild">
                          <span>Вывоз хлама</span>  
                          <span>Демонтаж</span>
                        </div>
                        
                        <div class="card_container_text_bild">
                          <span>Сборка и ремонт</span>  
                          <span>Уборка после работ</span>
                        </div>

                        <div class="card_container_text_bild">
                          <span>Перенос и погрузка</span>  
                          <span>Мелкий ремонт</span>
                        </div>
                </div>
            </div>

            <div class="news">
                <a href="https://t.me/cnskfho" class="Telegram" target="_blank" rel="noopener">Написать в Telegram</a>

                <a href="https://wa.me/79931849236" class="WhatsApp" target="_blank" rel="noopener">Написать в WhatsApp</a>
            </div>
        </section>
    </main>

    <div class="footer_gradient"></div>
    
    <footer>
        <div class="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div class="fog"></div>
    </footer>

    `}function S(t){const n=document.querySelector("#gallery_list");n.innerHTML="",t.forEach(c=>{let s=document.createElement("a");s.href=c.img,s.rel="noopener";let e=document.createElement("img");e.src=c.img,e.alt="",s.appendChild(e),n.appendChild(s)})}const f={currentPage:"home"},j=""+new URL("1-ubfdrqOD.jpg",import.meta.url).href,T=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),k=""+new URL("2-CrAP1hrV.jpg",import.meta.url).href,M=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),R=""+new URL("3-NfXDj49L.jpg",import.meta.url).href,q=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),x=Object.entries(Object.assign({"../assets/images/1.jpg":T,"../assets/images/2.jpg":M,"../assets/images/3.jpg":q})).map(([t,n])=>({img:n.default}));function A(){const t=document.querySelector("#app");t.innerHTML="",f.currentPage==="home"&&(t.innerHTML=w(),g(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url)),f.currentPage==="gallery"&&(t.innerHTML=O(),g(()=>Promise.resolve({}),__vite__mapDeps([1]),import.meta.url),S(x)),E()}function _(){window.location.pathname==="/gallery"?f.currentPage="gallery":f.currentPage="home",A()}function H(){window.addEventListener("DOMContentLoaded",_),window.addEventListener("popstate",_)}H();
