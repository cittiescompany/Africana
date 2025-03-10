import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export const setCookie = (name, value, days = 7) => {
    // const expires = days ? `; expires=${new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).toUTCString()}` : '';
    const expires = "; expires=" + (new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).toUTCString())
    const secure = window.location.protocol === "https:"?'; secure':'';
    const sameSite =secure? '; sameSite=none':'';
    const domain = window.location.hostname.includes("localhost")?'; domain=localhost':'';
    document.cookie = name + "=" + (value || "") + expires + "; path=/"+secure+sameSite+domain;
};
// export const getCookie = (name) => {
//     const nameEQ = name + "=";
//     const ca = document.cookie.split(";");
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == " ") c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// };

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(';').shift());
    }
    return null; 
}

export const clearCookie=(name) =>{
    document.cookie = name + '=; Max-Age=0; path=/;'; 
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const formatCurrency = (currencyCode,value) => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: currencyCode||"NGN",
    }).format(+value);
};


export const debounce=(func, delay)=> {
    let timeout;
   
     const debounced = (...args) => {
       clearTimeout(timeout);
       timeout = setTimeout(() => func(...args), delay);
     };
   
     // Add a cancel method to clear the timeout
     debounced.cancel = () => {
       clearTimeout(timeout);
     };
   
     return debounced;
   }
