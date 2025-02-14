import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use: {
    baseURL: 'https://magento.softwaretestingboard.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on',
  },
  timeout: 30000, 
  retries: 1,
});