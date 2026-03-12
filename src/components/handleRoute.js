import { render } from "./render";
import { state } from "./state";

export function handleRoute() {
    const path = window.location.pathname;

    if (path === "/gallery") {
        state.currentPage = "gallery";
    } else if (path === '/home') {
        state.currentPage = 'home'
    } else if (path === '/auth') {
        state.currentPage = 'auth'
    } else {
        state.currentPage = 'home'
    }


    render();
}


