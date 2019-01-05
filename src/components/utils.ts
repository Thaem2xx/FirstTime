export function setCookie(name: string, val: string) {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
}

export function getCookie(name: string) {
    const a = "; " + document.cookie;
    const parts = a.split("; " + name + "=");
    
    if (parts.length === 2 ) {
        let value : string;
        value = parts.pop() as string
        // return parts.pop().split(";").shift();
        console.log(value)
        return value.split(";").shift();
    }
    return null;
}

export function deleteCookie(name: string) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"=; expires="+date.toUTCString()+"; path=/";
}