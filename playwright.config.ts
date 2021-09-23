import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: "./tests/",

    use: {
        screenshot:"on",
        video:"retain-on-failure",
        baseURL: "http://uitestingplayground.com",
        browserName: 'chromium'
    },
};

export default config;