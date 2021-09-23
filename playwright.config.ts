import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: "./tests/",

    use: {
        screenshot:"only-on-failure",
        video:"retain-on-failure",
        baseURL: "http://uitestingplayground.com",
        browserName: 'chromium'
    },
};

export default config;