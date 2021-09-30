import {ElementHandle, Page} from "@playwright/test";
import {BasePage} from "./base.page";
import * as manipulations from "../helpers/elements.manipulation";
require('dotenv').config();

declare let process : {
    env: {
        SECRET_PASSWORD: string
    }
}

export class LoginPage extends BasePage {


    readonly page: Page;

    readonly inputUserNameField: string;
    readonly inputPasswordField: string;

    readonly standardUser: string;
    readonly lockedOutUser: string;

    readonly secretPassword: string;

    readonly loginBtn: string;


    constructor(page: Page) {
        super();

        this.page = page;

        this.inputUserNameField = '[data-test="username"]';
        this.inputPasswordField = '[data-test="password"]';

        this.secretPassword = 'secret_sauce';
        this.standardUser = 'standard_user';

        this.lockedOutUser = 'locked_out_serve';

        this.loginBtn = '[type="submit"]';
    }


    async openUrl() {
        await super.openUrls('/');
    }

    async loginAsStandardUser(): Promise<void> {
        const loginBtn: ElementHandle<Node> | null = await manipulations.getElement(this.page, this.loginBtn);
        await manipulations.typeInput(this.page, this.inputUserNameField, this.standardUser);
        await manipulations.typeInput(this.page, this.inputPasswordField, process.env['SECRET_PASSWORD']);
        await loginBtn.click();
    }

    async loginAsBlockedUser(): Promise<void> {
        const loginBtn: ElementHandle<Node> | null = await manipulations.getElement(this.page, this.loginBtn);
        await manipulations.typeInput(this.page, this.inputUserNameField, this.lockedOutUser);
        await manipulations.typeInput(this.page, this.inputPasswordField,  process.env['SECRET_PASSWORD']);
        await loginBtn.click();
    }

    async getLoginBtn(): Promise<ElementHandle<Node> | null> {
        return await manipulations.getElement(this.page, this.loginBtn);
    }

}