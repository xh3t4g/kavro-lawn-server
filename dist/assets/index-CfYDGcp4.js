const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-Cfa5xV2t.css","./gallery-fIHFTGfE.css","./auth-Dc5xk9Hv.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const P="modulepreload",L=function(t,n){return new URL(t,n).href},y={},f=function(n,a,s){let e=Promise.resolve();if(a&&a.length>0){let b=function(i){return Promise.all(i.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),g=l?.nonce||l?.getAttribute("nonce");e=b(a.map(i=>{if(i=L(i,s),i in y)return;y[i]=!0;const d=i.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(s)for(let v=o.length-1;v>=0;v--){const _=o[v];if(_.href===i&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":P,d||(c.as="script"),c.crossOrigin="",c.href=i,g&&c.setAttribute("nonce",g),document.head.appendChild(c),d)return new Promise((v,_)=>{c.addEventListener("load",v),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return e.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return n().catch(r)})};function m(t){history.pushState({},"",t),h()}function E(){const t=document.querySelector("#goHome"),n=document.querySelector("#goGallery"),a=document.querySelector("#login-btn");t&&t.addEventListener("click",()=>m("/home")),n&&n.addEventListener("click",()=>m("/gallery")),a&&a.addEventListener("click",()=>m("/auth"))}function w(){return`
        
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

    `}function O(){return`

    <header>

        <div class="header_container">

        <div id="login-btn">
        <span>login</span></div>
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

    `}function S(t){const n=document.querySelector("#gallery_list");n.innerHTML="",t.forEach(a=>{let s=document.createElement("a");s.href=a.img,s.rel="noopener";let e=document.createElement("img");e.src=a.img,e.alt="",s.appendChild(e),n.appendChild(s)})}const u={currentPage:"home"},j=""+new URL("1-ubfdrqOD.jpg",import.meta.url).href,T=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),k=""+new URL("2-CrAP1hrV.jpg",import.meta.url).href,M=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),x=""+new URL("3-NfXDj49L.jpg",import.meta.url).href,A=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),R=Object.entries(Object.assign({"../assets/images/1.jpg":T,"../assets/images/2.jpg":M,"../assets/images/3.jpg":A})).map(([t,n])=>({img:n.default}));function q(){return`
    
    <header>
        <div class="header_container">

        <div id="login-btn">
        <span>login</span></div>
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
        <form class="form_container">
            <div class="form">

                <input type="text" name="login" id="login" placeholder="ваша почта">
                <input type="password" name="password" id="password" placeholder="ваш пароль">

                <button type="submit" name="btn_login" id="btn_login">войти</button>
            </div>
        </form>
    </main>

    <div class="footer_gradient"></div>
    
    <footer>
        <div class="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div class="fog"></div>
    </footer>

    `}function H(){const t=document.querySelector("#app");t.innerHTML="",u.currentPage==="home"&&(t.innerHTML=O(),f(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url)),u.currentPage==="gallery"&&(t.innerHTML=w(),f(()=>Promise.resolve({}),__vite__mapDeps([1]),import.meta.url),S(R)),u.currentPage==="auth"&&(t.innerHTML=q(),f(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url)),E()}function h(){const t=window.location.pathname;t==="/gallery"?u.currentPage="gallery":t==="/home"?u.currentPage="home":t==="/auth"?u.currentPage="auth":u.currentPage="home",H()}function K(){window.addEventListener("DOMContentLoaded",h),window.addEventListener("popstate",h)}K();
