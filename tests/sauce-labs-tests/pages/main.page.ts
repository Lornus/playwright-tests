import {BrowserContext, Page} from "@playwright/test";
import {BasePage} from "./base.page";

import * as elementsManipulations from "../helpers/elements.manipulation";
import {checkInnerTextElementOfArray} from "../helpers/expects";

export class MainPage extends BasePage {

    page: Page;
    readonly context: BrowserContext;
    readonly endpoint: string = 'inventory.html';
    readonly addToCart: string;
    readonly itemName: string
    readonly cartLink: string;
    readonly burgerMenu: string;
    readonly logoutLink: string;
    readonly removeItem: string;
    readonly continueShopping: string;
    readonly checkout: string;

    constructor(page: Page, context: BrowserContext) {
        super(page);
        this.page = page;
        this.context = context;

        this.addToCart = '.btn';
        this.itemName = '.inventory_item_name';
        this.cartLink = '.shopping_cart_link';
        this.burgerMenu = '.bm-burger-button';
        this.logoutLink = '#logout_sidebar_link';
        this.removeItem = '.cart_button';
        this.continueShopping = '[data-test="continue-shopping"]';
        this.checkout = '[data-test="checkout"]'
    }


    async openUrl() {
        await super.openUrls(this.endpoint);
    }

    async logOut() {
        await elementsManipulations.elementClick(this.page, this.burgerMenu);
        await elementsManipulations.elementClick(this.page, this.logoutLink);
    }

    async getItemLabel(index: number): Promise<string> {
        const itemLabels = await elementsManipulations.getElementArrayHandle(this.page, this.itemName)
        const text = await itemLabels[index].innerText();
        return text;
    }

    async goToCart(): Promise<void> {
        await elementsManipulations.elementClick(this.page, this.cartLink);
    }

    async getCheckout(): Promise<void> {
        await elementsManipulations.elementClick(this.page, this.checkout);
    }

    setAmount(num: number): number[] {
        return new Array<number>(num).fill(num);
    }

    async clickOnAddToCartButton(howManyElementsAdd: number) {
        const addToCartButtons = await elementsManipulations.getElementArrayHandle(this.page, this.addToCart);
        const indexes = this.setAmount(howManyElementsAdd);

        await Promise.all(indexes.map(async (el, index) => {
            await addToCartButtons[index].click();
        }))
    }

    async checkLabelsInCart(howManyItemsInCart: number) {
        const itemsInCart = await elementsManipulations.getElementArrayHandle(this.page, this.itemName);
        const amountOfLabels = this.setAmount(howManyItemsInCart);

        await Promise.all(amountOfLabels.map(async (el, index) => {
            await checkInnerTextElementOfArray(this.page, index, itemsInCart, await this.getItemLabel(index));
        }))
    }
}