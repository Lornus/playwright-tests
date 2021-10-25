import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: ".",

    use: {
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        baseURL: "http://uitestingplayground.com",
        browserName: 'chromium',

    },
    reporter: [
        ['html', { outputFolder: 'phtml-utp'}],
        ['list'],
        ['experimental-allure-playwright']
    ],
    grepInvert: [new RegExp("@flaky")],
    workers: 2,
    preserveOutput: "failures-only",

};

export default config;