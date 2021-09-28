import {ElementHandle, Page} from "@playwright/test";
import {BasePage} from "./base.page";
import * as manipulations from "../helpers/elements.manipulation";


export class LoginPage extends BasePage {

    readonly page: Page;

    constructor(page:Page) {
        super();
        this.page = page;
    }

    async openUrl() {
        await super.openUrls('/');
    }

    async loginAsStandardUser(): Promise<void> {
        const loginBtn: ElementHandle = await manipulations.getElement(this.page, '[type="submit"]');
        await manipulations.typeInput(this.page, '[name="user-name"]', "standard_user")
        await manipulations.typeInput(this.page, '[name="password"]', "secret_sauce")
        await loginBtn.click();
    }

    async loginAsBlockedUser(): Promise<void> {
        const loginBtn: ElementHandle = await manipulations.getElement(this.page, '[type="submit"]');
        await manipulations.typeInput(this.page, '[name="user-name"]', "locked_out_user")
        await manipulations.typeInput(this.page, '[name="password"]', "secret_sauce")
        await loginBtn.click();
    }

    async getLoginBtn(): Promise<ElementHandle> {
        return await manipulations.getElement(this.page, '[type="submit"]');
    }

}