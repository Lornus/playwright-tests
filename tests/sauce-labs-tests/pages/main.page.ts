import {BrowserContext, Page} from "@playwright/test";
import {BasePage} from "./base.page";

import * as elementsManipulations from "../helpers/elements.manipulation";

export class MainPage extends BasePage {

    page: Page;
    readonly context: BrowserContext;
    readonly endpoint: string = 'inventory.html';
    readonly addToCart: string;
    readonly item: string
    readonly cartLink: string;
    readonly itemInCart: string;
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
        this.item = '.inventory_item_name';
        this.cartLink = '.shopping_cart_link';
        this.itemInCart = '.inventory_item_name';
        this.burgerMenu = '.bm-burger-button';
        this.logoutLink = '#logout_sidebar_link';
        this.removeItem = '.cart_button';
        this.continueShopping = '[data-test="continue-shopping"]';
        this.checkout = '[data-test="checkout"]'
    }


    async openUrl() {
        await super.openUrls(this.endpoint);
    }

    async clickOnAddToCartButton(index: number) {
        const addToCartButtons = await elementsManipulations.getElementArrayHandle(this.page, this.addToCart);
        await addToCartButtons[index].click();
    }

    async logOut() {
        await elementsManipulations.elementClick(this.page, this.burgerMenu);
        await elementsManipulations.elementClick(this.page, this.logoutLink);
    }

    async getItemLabel(index: number): Promise<string> {
        const itemLabels = await elementsManipulations.getElementArrayHandle(this.page, this.item)
        return await itemLabels[index].innerText();
    }

    async goToCart(): Promise<void> {
        await elementsManipulations.elementClick(this.page, this.cartLink);
    }

    async getCheckout(): Promise<void> {
        await elementsManipulations.elementClick(this.page, this.checkout);
    }
}