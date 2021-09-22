import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        screenshot:"only-on-failure"
    },
    reporter: [
        ['line'],
        ['experimental-allure-playwright']
    ],
};

export default config;