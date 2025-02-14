import logger from('../utils/logger');


class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator("input[id='search']");
        this.searchResultsContainer = page.locator("div[id='search_autocomplete']");
        this.productLinks = page.locator("a[class='product-item-link']"); // Get all product links
    }

    async searchProduct(searchKeyword) {
        logger.info(`Searching for product: ${searchKeyword}`);
        await this.page.fill(this.searchInput, searchKeyword);
        await this.page.press(this.searchInput, 'Enter');
    }

    async verifySearchResults(searchKeyword) {
        logger.info('Verifying search results');
        await this.page.waitForSelector(this.searchResultsContainer);

        // Get all product names and check if they contain the search keyword
        const productLinksCount = await this.productLinks.count();
        if (productLinksCount > 0) {
            for (let i = 0; i < productLinksCount; i++) {
                const productText = await this.productLinks.nth(i).innerText();
                expect(productText.toLowerCase()).toContain(searchKeyword.toLowerCase());
                logger.info(`Found product: ${productText}`);
            }
            return true;
        }
        return false;
    }
}

export { HomePage };