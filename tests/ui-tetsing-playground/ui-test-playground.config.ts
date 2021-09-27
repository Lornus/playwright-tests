import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: ".",

    use: {
        screenshot:"only-on-failure",
        video:"retain-on-failure",
        baseURL: "http://uitestingplayground.com",
        browserName: 'chromium',

    },
    grepInvert: [new RegExp("@flaky")],
    workers:4,
    preserveOutput : "failures-only",

};

export default config;