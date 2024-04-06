"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Button.tsx
const react_1 = __importDefault(require("react"));
const SeekButton = (_a) => {
    var { primary, children } = _a, props = __rest(_a, ["primary", "children"]);
    const buttonClassName = primary ? 'primary' : '';
    function openChildWindow() {
        const childWindow = window.open('https://auth-seek.vercel.app/signin', '_blank', 'width=300,height=300');
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
            this.setInterval(() => {
                window.opener.postMessage("Hello from child!", "*");
            }, 2000);
        });
        // Send a message to child window
        childWindow === null || childWindow === void 0 ? void 0 : childWindow.postMessage('Hello from parent!', 'https://auth-seek.vercel.app/signin');
    }
    return (react_1.default.createElement("button", Object.assign({ className: `button ${buttonClassName}` }, props, { onClick: openChildWindow }),
        children,
        " Login with seek"));
};
exports.default = SeekButton;
