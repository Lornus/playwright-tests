import {ElementHandle, Page} from "@playwright/test";
import {BasePage} from "./base.page";
import * as manipulations from "../helpers/elements.manipulation";
import * as dotenv from 'dotenv';

dotenv.config();

export declare let process: {
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
    readonly errorArea: string;

    readonly loginBtn: string;


    constructor(page: Page) {
        super(page);

        this.page = page;

        this.inputUserNameField = '[data-test="username"]';
        this.inputPasswordField = '[data-test="password"]';

        this.standardUser = 'standard_user';
        this.lockedOutUser = 'locked_out_serve';
        this.errorArea = '[data-test="error"]';

        this.loginBtn = '[type="submit"]';
    }


    async openUrl() {
        await super.openUrls('/');
    }

    async loginAsStandardUser(): Promise<void> {
        const loginBtn: ElementHandle<Node> | null = await manipulations.getElement(this.page, this.loginBtn);
        await manipulations.typeInput(this.page, this.inputUserNameField, this.standardUser);
        await manipulations.typeInput(this.page, this.inputPasswordField, process.env.SECRET_PASSWORD);
        // @ts-ignore
        await loginBtn.click();
    }

    async loginAsBlockedUser(): Promise<void> {
        const loginBtn: ElementHandle<Node> | null = await manipulations.getElement(this.page, this.loginBtn);
        await manipulations.typeInput(this.page, this.inputUserNameField, this.lockedOutUser);
        await manipulations.typeInput(this.page, this.inputPasswordField, process.env.SECRET_PASSWORD);
        // @ts-ignore
        await loginBtn.click();
    }

    async fillSecretPassword(): Promise<void> {
        await manipulations.typeInput(this.page, this.inputPasswordField, process.env.SECRET_PASSWORD);
    }

    async getLoginBtn(): Promise<ElementHandle<Node> | null> {
        return await manipulations.getElement(this.page, this.loginBtn);
    }

}