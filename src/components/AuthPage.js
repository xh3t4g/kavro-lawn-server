export function AuthPage() {
    return `
    
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

    `;
}
