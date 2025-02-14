class CartPage {
    constructor(page) {
        this.page = page;
        this.cartIcon = page.locator("a[class='action showcart']");
        this.cartProductName = page.locator('a:has-text("Orestes Fitness Short")');
        this.cartProductPrice = '.cart-price .price';  // Price in cart
    }

    async openCart() {
        logger.info("Opening the cart...");
        await this.page.click(this.cartIcon);
        await this.page.waitForSelector(this.cartProductName);
    }

    async verifyCartProduct(expectedProduct) {
        logger.info(`Verifying product in cart: ${expectedProduct}`);
        const actualProduct = await this.page.locator(this.cartProductName).innerText();
        return actualProduct.includes(expectedProduct);
    }
}

export { CartPage };