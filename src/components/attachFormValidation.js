import { registerUser } from "./registerUser";

export function attachFormValidation() {
    const form = document.querySelector('.form_container')
    const passwordInput = document.querySelector('#password');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        passwordInput.classList.remove('red')


        const password = passwordInput.value.trim();
        
        if (password.length < 8) {
            alert("Пароль должен быть минимум 8 символов")
            passwordInput.classList.add('red')
            return;
        }

        const login = document.querySelector('#login').value.trim();
        registerUser(login, password)
    })

}
