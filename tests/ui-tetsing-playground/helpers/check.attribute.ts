import {ElementHandle, expect, Page} from "@playwright/test";

export async function checkAttribute(page: Page, selector: string, attribute: string, expected: string): Promise<String> {
    const element: ElementHandle = await page.$(selector);
    return expect(await element.getAttribute(attribute)).toEqual(expected);
}