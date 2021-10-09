import {ElementHandle, Page} from "@playwright/test";


export async function getElementHandle(page: Page, selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return await page.$(selector);

}

export async function getElementArrayHandle(page: Page, selector: string): Promise<ElementHandle<SVGElement | HTMLElement>[]> {
    return await page.$$(selector);
}

export async function typeInput(page: Page, selector: string, text: string): Promise<void> {
    const element: ElementHandle<Node> | null = await getElementHandle(page, selector)
    await element.fill(text);
}

export async function getInputValue(page: Page, element: ElementHandle): Promise<string> {
    return await element.inputValue();
}

export async function setLocator(page: Page, selector: string) {
    return page.locator(selector);
}

export async function elementClick(page: Page, selector: string) {
    const element: ElementHandle<Node> | null = await getElementHandle(page, selector)
    await element.click();
}
