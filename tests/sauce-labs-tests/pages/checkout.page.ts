import {BrowserContext, Page} from "@playwright/test";
import {BasePage} from "./base.page";

import * as elementsManipulations from "../helpers/elements.manipulation";


export class CheckoutPage extends BasePage {

    page: Page;
    readonly context: BrowserContext;
    readonly endpoint: string = 'checkout-step-one.html';
    readonly firstNameInput: string;
    readonly lastNameInput: string;
    readonly postalCodeInput: string;
    readonly continue: string;
    readonly cancel: string;


    constructor(page: Page, context: BrowserContext) {
        super(page);
        this.page = page;
        this.context = context;
        this.firstNameInput = '[data-test="firstName"]';
        this.lastNameInput = '[data-test="lastName"]';
        this.postalCodeInput = '[data-test="postalCode"]';
        this.continue = '[data-test="continue"]';
        this.cancel = '[data-test="cancel"]';

    }

    async openUrl() {
        await super.openUrls(this.endpoint);
    }

    async cancelClick() {
        await elementsManipulations.elementClick(this.page, this.cancel);
    }

    async goContinue() {
        await elementsManipulations.elementClick(this.page, this.continue);
    }

    async firstNameFill(text: string) {
        await elementsManipulations.typeInput(this.page, this.firstNameInput, text);
    }

    async lastNameFill(text: string) {
        await elementsManipulations.typeInput(this.page, this.lastNameInput, text);
    }

    async postalCodeFill(code: string) {
        await elementsManipulations.typeInput(this.page, this.postalCodeInput, code);
    }

}