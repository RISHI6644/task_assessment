import { test, expect } from '@playwright/test';
import { searchKeyword } from '../testData/testData.json';
import { info } from '../utils/logger.js';
import { HomePage } from '../pages/home.page';

test.describe('Search Functionality', () => {
    test('should return relevant results when searching with partial keywords', async ({ page }) => {
        info('Starting search functionality test...');
        
        info('Navigate to homepage');
        await page.goto('/');

        // Initialize HomePage POM
        const homePage = new HomePage(page);

        info('Perform searching');
        await homePage.searchProduct(searchKeyword);

        info('Verify search results');
        const resultsFound = await homePage.verifySearchResults(searchKeyword);
        expect(resultsFound).toBeTruthy();

        info('Search functionality test passed.');
    });
});
