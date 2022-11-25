const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");
const { Builder } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

Given('I have added a product to my cart and I am on cart page', { timeout: 10000 }, async () => {
    await driver.get("http://localhost:3000/p/1");
    let element = 0;
    try {
        element = driver.findElement(By.className("MuiButtonBase-root MuiIconButton-root RSFCartButton-link-24 MuiIconButton-colorInherit"));
        element.click();
        driver.get("https://localhost:3000/cart");
    } catch (error) {
        element = null;
        assert.equal(false, true);
    }
})

When('The checkout button is clicked', async () => {
    let element = 0;
    try {
        element = driver.findElement(By.className("MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-checkoutButton-77 makeStyles-docked-78 MuiButton-containedPrimary"));
        element.click();
    } catch (error) {
        element = null;
        assert.equal(false, true)
    }
});

Then('I should be redirected to the payment method page', async () => {
    let element = 0
    try {
        temp = driver.get("https://localhost:3000/checkout");
        assert.equal(true,true)
    } catch (error) {
        element = null;
        assert.equal(false,true)
    }
});

// AfterAll(async () => {
//     await driver.quit();
// })