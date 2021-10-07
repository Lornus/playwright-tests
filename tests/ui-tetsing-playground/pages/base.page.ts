import {ElementHandle, Page} from "@playwright/test";

export class BasePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async goto(path: string): Promise<object> {
        return await this.page.goto(path);
    }

    async selectElement(selector: string): Promise<ElementHandle> {
        return await this.page.$(selector);
    }

    async selectFromListOfElements(selector: string): Promise<Array<ElementHandle>> {
        return await this.page.$$(selector);
    }

    async waitForVisibility(selector: string): Promise<ElementHandle<SVGElement | HTMLElement>> {
        return (await this.page.waitForSelector(selector, {
                state: "visible"
            })
        )
    }

}