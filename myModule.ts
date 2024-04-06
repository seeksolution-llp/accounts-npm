const SEEK_COOKIES = "seek_access_token"
const SEEK_PROFILE_COOKIES = "seek_profile"
export function setCookie(cookieValue: string) {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = SEEK_COOKIES + "=" + cookieValue + ";" + expires + ";path=/";
}
export function setProfileCookies(cookieValue: string) {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = SEEK_PROFILE_COOKIES + "=" + cookieValue + ";" + expires + ";path=/";
}