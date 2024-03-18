"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginWithSeek = exports.addListener = void 0;
var listeners = [];
function addListener(listener) {
    listeners.push(listener);
}
exports.addListener = addListener;
function loginWithSeek() {
    try {
        console.log("loginWithSeek called");
        var childWindow = window.open('https://auth-seek.vercel.app/signin', '_blank', 'width=300,height=300');
        // Listener to handle messages from the child window
        window.addEventListener('message', function (event) {
            console.log("event", event);
            listeners.forEach(function (listener) { return listener(event.data); });
            // Check origin for security purposes
            if (event.origin === 'https://auth-seek.vercel.app/signin') {
                console.log('Message received from child window:', event.data);
                // You can perform any action here with the received data
            }
            else {
                console.warn('Message received from untrusted origin:', event.origin, event.data);
            }
        });
    }
    catch (error) {
        console.log("error", error);
    }
}
exports.loginWithSeek = loginWithSeek;
