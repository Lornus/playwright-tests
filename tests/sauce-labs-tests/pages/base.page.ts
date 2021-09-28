import {Page} from "@playwright/test";

export class BasePage {
    page: Page;

    async openUrls(url: string) {
        await this.page.goto(url);
    }
}