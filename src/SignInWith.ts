import { setCookie, setProfileCookies } from "../myModule";
import { BACKEND_URL, FRONTEND_URL } from "./utils/Urls";

type ValueChangeListener = (value: any) => void;
const listeners: ValueChangeListener[] = [];

export function addListener(listener: ValueChangeListener): void {
    listeners.push(listener);
}

export function signinWithSeek() {
    try {
        window.open(FRONTEND_URL+"/signin", 'ChildWindow', 'width=800,height=900');

        // Listener to handle messages from the child window
        window.addEventListener('message', function (event) {
            console.log("event", event);

            // Check origin for security purposes
            if (event.origin === 'https://auth-seek.vercel.app') {
                listeners.forEach(listener => listener(event.data));
                console.log('Message received from child window:', event.data);
                setCookie(event.data.access_token)
                // You can perform any action here with the received data
            } else {
                console.warn('Message received from untrusted origin:', event.origin, event.data);
            }
        });

    } catch (error) {
        console.log("error", error);

    }
}
export const getSeekProfile = async () => {
    try {
        const apiRes = await fetch(`${BACKEND_URL}/profile`)

        const apiResJson = await apiRes.json()
        if (apiRes.ok) {
            setProfileCookies(JSON.stringify(apiResJson))
            return apiResJson
        }
        throw apiResJson

    } catch (error) {
        throw error
    }
}