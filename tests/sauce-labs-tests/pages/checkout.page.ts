import {BrowserContext, expect, Page} from "@playwright/test";
import {BasePage} from "./base.page";

import * as elementsManipulations from "../helpers/elements.manipulation";
import {getElementArrayHandle} from "../helpers/elements.manipulation";


export class CheckoutPage extends BasePage {

    page: Page;
    readonly context: BrowserContext;
    readonly endpoint: string = 'checkout-step-one.html';
    readonly firstNameInput: string;
    readonly lastNameInput: string;
    readonly postalCodeInput: string;
    readonly continue: string;
    readonly cancel: string;
    readonly stepTwo: string;
    readonly error: string;
    readonly cartList: string;
    readonly summaryInfo: string;
    readonly priceOfItem: string;
    private tax: number;


    constructor(page: Page, context: BrowserContext) {
        super(page);
        this.page = page;
        this.context = context;
        this.firstNameInput = '[data-test="firstName"]';
        this.lastNameInput = '[data-test="lastName"]';
        this.postalCodeInput = '[data-test="postalCode"]';
        this.continue = '[data-test="continue"]';
        this.cancel = '[data-test="cancel"]';
        this.stepTwo = 'checkout-step-two.html'
        this.error = '[data-test="error"]';
        this.cartList = '.cart_list div';
        this.summaryInfo = '.summary_info div';
        this.priceOfItem = '.inventory_item_price'
        this.tax = 0.08;


    }

    async openUrl() {
        await super.openUrls(this.endpoint);
    }

    async cancelClick() {
        await elementsManipulations.elementClick(this.page, this.cancel);
    }

    async clickOnContinue() {
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

    async goContinue() {
        await this.firstNameFill('user');
        await this.lastNameFill('test');
        await this.postalCodeFill('0000');
        await this.clickOnContinue();
    }

    async countTotalItemSum(): Promise<number> {
        let itemTotalSum: number = 0;
        const prices = await getElementArrayHandle(this.page, this.priceOfItem);
        for (let index in prices) {
            let price = await prices[index].innerText();
            itemTotalSum += +price.slice(1, 6);
        }
        return itemTotalSum;
    }

    countTotal(sum: number): number {
        const total: number = sum + (sum * this.tax);
        return +total.toFixed(2);
    }


    async getTotalPrice(): Promise<number> {
        const summaryInfo = await getElementArrayHandle(this.page, this.summaryInfo);
        const priceArea = await summaryInfo[6].innerText();
        return +priceArea.slice(8, 18);
    }

    async checkTotalPrice(): Promise<boolean> {
        const expectedPrice = this.countTotal(await this.countTotalItemSum());
        const totalPrice = await this.getTotalPrice();
        let result: boolean = true;
        if (expectedPrice !== totalPrice) {
            console.log('Prices arent equal');
            result = false;
        }
        return result;
    }
}