import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';
import { productName, size, color } from '../testData/testData.json';
import { info } from '../utils/logger';

test.describe('Cart Functionality', () => {
    test('should add a product to the cart and verify details', async ({ page }) => {
        info('Starting add-to-cart test...');

        // Initialize POM classes
        const homePage = new HomePage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

        info('Navigate to homepage');
        await page.goto('/');
        
        logger.info('Perform search and navigate to product page');
        await homePage.searchProduct(productName);
        await productPage.navigateToProductPage();

        info('Select size and color');
        await productPage.selectSize(size);
        await productPage.selectColor(color);

        info('Add product to cart');
        await productPage.addToCart();

        info('Open cart and verify product');
        await cartPage.openCart();
        const isProductInCart = await cartPage.verifyCartProduct(productName);
        expect(isProductInCart).toBeTruthy();

        info('Add-to-cart test passed.');
    });
});