import {BrowserContext, Cookie} from "@playwright/test";

export async function checkCookies(context: BrowserContext) {
    const cookies: Cookie[] = await context.cookies();
    if (cookies.length === 0) {
        throw Error("Cookies haven't initialised re-run writing cookies ")
    }
}
