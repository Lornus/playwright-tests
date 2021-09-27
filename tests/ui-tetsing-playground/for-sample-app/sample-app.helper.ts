import {BasePage} from "../pages/base.page";
import {Page} from "@playwright/test";

export async function enterRandomUserName(page: Page, username: string): Promise<String> {
    let basePage = new BasePage(page)
    const userNameInput = await basePage.selectElement('[placeholder="User Name"]');
    await userNameInput.fill(username);
    return userNameInput.inputValue();
}

export async function enterPassword(page: Page, password: string): Promise<void> {
    let basePage = new BasePage(page)
    const input = await basePage.selectElement('[name="Password"]');
    return await input.fill(password);
}

export async function initializing(page: Page, path: string): Promise<object> {
    return {
        basePage: new BasePage(page),
        goto: await this.basePage.goto(path)
    }
}