import {BrowserContext, ElementHandle, Page} from "@playwright/test";
import {BasePage} from "./base.page";

import * as manipulations from "../helpers/elements.manipulation";
import * as fs from "fs";


export class MainPage extends BasePage {

    page: Page;
    context: BrowserContext;
    addToCart: string;
    item: string
    cartLink: string;
    itemInCart: string;

    constructor(page: Page, context: BrowserContext) {
        super(page);
        this.page = page;
        this.context = context;
        this.addToCart = '.btn';
        this.item = '.inventory_item_name';
        this.cartLink = '.shopping_cart_link';
        this.itemInCart = '.inventory_item_name';
    }


    async openUrl() {
        await super.openUrls('inventory.html');
    }

    async onFirstAddToCartClick() {
        const button = await manipulations.getElementHandle(this.page, this.addToCart);
        await button.click();
    }


}