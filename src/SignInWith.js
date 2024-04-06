"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeekProfile = exports.signinWithSeek = exports.addListener = void 0;
const myModule_1 = require("../myModule");
const Urls_1 = require("./utils/Urls");
const listeners = [];
function addListener(listener) {
    listeners.push(listener);
}
exports.addListener = addListener;
function signinWithSeek() {
    try {
        window.open(Urls_1.FRONTEND_URL + "/signin", 'ChildWindow', 'width=800,height=900');
        // Listener to handle messages from the child window
        window.addEventListener('message', function (event) {
            console.log("event", event);
            // Check origin for security purposes
            if (event.origin === 'https://auth-seek.vercel.app') {
                listeners.forEach(listener => listener(event.data));
                console.log('Message received from child window:', event.data);
                (0, myModule_1.setCookie)(event.data.access_token);
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
exports.signinWithSeek = signinWithSeek;
const getSeekProfile = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apiRes = yield fetch(`${Urls_1.BACKEND_URL}/profile`);
        const apiResJson = yield apiRes.json();
        if (apiRes.ok) {
            (0, myModule_1.setProfileCookies)(JSON.stringify(apiResJson));
            return apiResJson;
        }
        throw apiResJson;
    }
    catch (error) {
        throw error;
    }
});
exports.getSeekProfile = getSeekProfile;
