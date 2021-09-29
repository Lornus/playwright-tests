import {BrowserContext, ElementHandle, Page} from "@playwright/test";
import {BasePage} from "./base.page";
import {LoginPage} from "./login.page";

import * as manipulations from "../helpers/elements.manipulation";
import * as fs from "fs";


export class MainPage extends BasePage {

    page: Page;
    context:BrowserContext;
    buttons: Array<string> = ["", ""];

    constructor(page: Page, context:BrowserContext) {
        super();
        this.page = page;
        this.context = context;
    }


    async openUrl() {
        await super.openUrls('inventory.html');
    }


}