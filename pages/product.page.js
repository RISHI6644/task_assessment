import logger from('../utils/logger');


class ProductPage {
    constructor(page) {
        this.page = page;
        this.productLink = page.locator('a[href*="orestes-fitness-short"]').nth(0);
        this.sizeSelector = page.locator("div[class='swatch-attribute size']");
        this.colorSelector = page.locator("div[class='swatch-attribute color']");
        this.addToCartButton = page.locator("button[id='product-addtocart-button']");;
        this.cartSuccessMessage = page.locator('a:has-text("shopping cart")');
    }

    async navigateToProductPage() {
        logger.info('Navigating to the product page');
        await this.productLink.click();  // Click on the first result
        await this.page.waitForURL('https://magento.softwaretestingboard.com/orestes-fitness-short.html');
    }

    async selectSize(size) {
        logger.info(`Selecting size: ${size}`);
        await this.page.click(`${this.sizeSelector}[option-label="${size}"]`);
    }

    async selectColor(color) {
        logger.info(`Selecting color: ${color}`);
        await this.page.click(`${this.colorSelector}[option-label="${color}"]`);
    }

    async addToCart() {
        logger.info("Adding product to cart...");
        await this.page.click(this.addToCartButton);
        await this.page.waitForSelector(this.cartSuccessMessage);
    }
}

export { ProductPage };