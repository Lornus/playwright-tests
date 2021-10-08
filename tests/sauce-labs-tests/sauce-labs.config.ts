import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: ".",

    use: {
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        baseURL: "https://www.saucedemo.com/",
        browserName: 'chromium',
        colorScheme: "dark",
    },

    grepInvert: [new RegExp("@flaky")],
    workers: 3,
    preserveOutput: "always",
    updateSnapshots: "all",
};

export default config;