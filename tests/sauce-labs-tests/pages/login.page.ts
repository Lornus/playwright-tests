import {BrowserContext, ElementHandle, Page} from "@playwright/test";
import {BasePage} from "./base.page";
import * as manipulations from "../helpers/elements.manipulation";
import * as dotenv from 'dotenv';
import {pathToLoginStates} from "../helpers/paths";

dotenv.config();

export declare let process: {
    env: {
        SECRET_PASSWORD: string
    }
}

export class LoginPage extends BasePage {


    readonly page: Page;
    private contexT: BrowserContext;


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
        this.lockedOutUser = 'locked_out_user';
        this.errorArea = '[data-test="error"]';

        this.loginBtn = '[type="submit"]';
    }


    async openUrl() {
        await super.openUrls('/');
    }

    async loginAsStandardUser(context:BrowserContext): Promise<void> {
        await manipulations.typeInput(this.page, this.inputUserNameField, this.standardUser);
        await manipulations.typeInput(this.page, this.inputPasswordField, process.env.SECRET_PASSWORD);
        await manipulations.elementClick(this.page, this.loginBtn);
        this.contexT = context;
        await context.storageState({path: pathToLoginStates})

    }

    async loginAsBlockedUser(): Promise<void> {
        await manipulations.typeInput(this.page, this.inputUserNameField, this.lockedOutUser);
        await manipulations.typeInput(this.page, this.inputPasswordField, process.env.SECRET_PASSWORD);
        await manipulations.elementClick(this.page, this.loginBtn);
    }

    async fillSecretPassword(): Promise<void> {
        await manipulations.typeInput(this.page, this.inputPasswordField, process.env.SECRET_PASSWORD);
    }

    async getLoginBtn(): Promise<ElementHandle<Node> | null> {
       const loginBtn =  await manipulations.getElementHandle(this.page, this.loginBtn);
       return loginBtn;
    }
}