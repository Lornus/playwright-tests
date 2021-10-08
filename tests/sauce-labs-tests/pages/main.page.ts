import {BrowserContext, Page} from "@playwright/test";
import {BasePage} from "./base.page";

import * as elementsManipulations from "../helpers/elements.manipulation";


export class MainPage extends BasePage {

    page: Page;
    readonly context: BrowserContext;
    readonly addToCart: string;
    readonly item: string
    readonly cartLink: string;
    readonly itemInCart: string;
    readonly burgerMenu: string;
    readonly logoutLink: string;

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
    }


    async openUrl() {
        await super.openUrls('inventory.html');
    }

    async clickOnAddToCartButton(index: number) {
        const addToCartButtons = await elementsManipulations.getElementArrayHandle(this.page, this.addToCart);
        await addToCartButtons[index].click();
    }

    async logOut() {
        const burgerMenu = await elementsManipulations.getElementHandle(this.page, this.burgerMenu);
        await burgerMenu.click();

        const logoutLink = await elementsManipulations.getElementHandle(this.page, this.logoutLink);
        await logoutLink.click();
    }

    async getItemLabel(index: number): Promise<string> {
        const itemLabels = await elementsManipulations.getElementArrayHandle(this.page, this.item)
        return await itemLabels[index].innerText();
    }

    async goToCart(): Promise<void> {
        const cartLink = await elementsManipulations.getElementHandle(this.page, this.cartLink);
        await cartLink.click();
    }
}