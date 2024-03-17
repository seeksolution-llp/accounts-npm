"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginWithSeek = void 0;
function loginWithSeek() {
    try {
        console.log("loginWithSeek called");
        var childWindow = window.open('https://auth-seek.vercel.app/signin', '_blank', 'width=300,height=300');
        // Listener to handle messages from the child window
        window.addEventListener('message', function (event) {
            // Check origin for security purposes
            if (event.origin === 'https://auth-seek.vercel.app/signin') {
                console.log('Message received from child window:', event.data);
                // You can perform any action here with the received data
            }
            else {
                console.warn('Message received from untrusted origin:', event.origin);
            }
            this.setInterval(function () {
                window.opener.postMessage("Hello from child!", "*");
            }, 2000);
        });
        // Send a message to child window
        childWindow === null || childWindow === void 0 ? void 0 : childWindow.postMessage('Hello from parent!', 'https://auth-seek.vercel.app/signin');
    }
    catch (error) {
        console.log("error", error);
    }
}
exports.loginWithSeek = loginWithSeek;
