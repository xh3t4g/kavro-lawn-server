import { navigate } from "./navigate";

export function attachEvent() {
    const goHome = document.querySelector('#goHome');
    const goGallery = document.querySelector('#goGallery');

    if (goHome) {
        goHome.addEventListener('click', () => navigate('/home'))
    }

    if (goGallery) {
        goGallery.addEventListener('click', () => navigate("/gallery"))
    }
}
