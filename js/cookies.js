export function getCookie(c_name) {
    let c_value = document.cookie.match('(^|;) ?' + c_name + '=([^;]*)(;|$)');
    return c_value ? decodeURIComponent(c_value[2]) : null;
}
export function setCookie(c_name, value, exdays) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    let cookieValue = { value: value, expires: exdate.toUTCString() };
    document.cookie = `${c_name}=${encodeURIComponent(JSON.stringify(cookieValue))}; expires=${exdate.toUTCString()}; path=/; SameSite=Lax`;
}
// OBTENER DATOS COOKIE
export function getCookieInfo(c_name) {
    let cookie = getCookie(c_name);
    if (cookie) {
        try {
            let { value, expires } = JSON.parse(cookie);
            let daysRemaining = Math.floor((new Date(expires) - new Date()) / (1000 * 60 * 60 * 24));
            return { name: c_name, value: value, daysRemaining: daysRemaining };
        } catch (e) {
            console.error('Error al analizar la cookie:', e);
        }
    }
    return null;
}
export function checkAndShowCookieBar() {
    let cookieName = 'ESTOPA-unofficial';
    let cookieInfo = getCookieInfo(cookieName);
    if (!cookieInfo || (cookieInfo.value !== true)) {
        document.getElementById('barraaceptacion').style.display = 'block';
    } else {
        document.getElementById('barraaceptacion').style.display = 'none';
// PINTAR DATOS COOKIE
        if (cookieInfo.daysRemaining !== null) {
            console.info(`La cookie %c${cookieInfo.name}%c tiene valor %c${cookieInfo.value}%c y expirará en %c${cookieInfo.daysRemaining}%c días.`,
                'color: rgb(0,255,0)', '', 'color: rgb(0,255,0)', '', 'color: rgb(0,255,0)', '');
        } else {
            console.error(`No se pudo determinar el tiempo restante para la cookie "${cookieName}".`);
        }
    }
}
export function PonerCookie(event) {
    if (event) event.preventDefault();
    setCookie('ESTOPA-unofficial', true, 365);
    document.getElementById('barraaceptacion').style.display = 'none';
}
export function initCookieBar() {
    document.addEventListener('DOMContentLoaded', () => {
        checkAndShowCookieBar();
        document.getElementById('aceptarBtn').addEventListener('click', PonerCookie);
    });
}
initCookieBar()