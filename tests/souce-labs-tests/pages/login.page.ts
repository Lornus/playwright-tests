import {ElementHandle, expect, Page} from "@playwright/test";
import {BasePage} from "./base.page";

export class LoginPage extends BasePage {

    readonly page: Page;

    constructor(page) {
        super();
        this.page = page;
    }

    async openUrl() {
        await super.openUrls('/');
    }

    async getElement(selector: string): Promise<ElementHandle> {
        return await this.page.$(selector);
    }

    async checkText(selector: string, expected: string): Promise<void> {
        const element: ElementHandle = await this.getElement(selector);
        expect(await element.innerText()).toEqual(expected);
    }

    async typeInput(selector: string, text: string) {
        const element: ElementHandle = await this.getElement(selector);
        await element.fill(text);
    }

    async checkElementEditable(selector: string): Promise<boolean> {
        const element: ElementHandle = await this.getElement(selector);
        return await expect(element.isEditable()).toBeTruthy();
    }

    async checkButtonIsEnabled(selector: string): Promise<boolean> {
        const element: ElementHandle = await this.getElement(selector);
        return await expect(element.isEnabled()).toBeTruthy();
    }

    async getInputValue(element: ElementHandle): Promise<string> {
        return await element.inputValue();
    }

}