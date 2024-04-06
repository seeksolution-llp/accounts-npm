"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProfileCookies = exports.setCookie = void 0;
const SEEK_COOKIES = "seek_access_token";
const SEEK_PROFILE_COOKIES = "seek_profile";
function setCookie(cookieValue) {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = SEEK_COOKIES + "=" + cookieValue + ";" + expires + ";path=/";
}
exports.setCookie = setCookie;
function setProfileCookies(cookieValue) {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = SEEK_PROFILE_COOKIES + "=" + cookieValue + ";" + expires + ";path=/";
}
exports.setProfileCookies = setProfileCookies;
