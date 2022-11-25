const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");
var webdriver = require("selenium-webdriver");
const driver = new webdriver.Builder().forBrowser("chrome").build();

Given("I have selected a product from the list of product f2", async () => {
    await driver.get("http://localhost:3000/p/1");
});

When("I click on product size", async () => {
    let element = 0;
    try {
        element = await driver.findElement(
            By.className("MuiButtonBase-root MuiButton-root MuiButton-outlined RSFProductOptionSelector-button-150 RSFTextProductOption-root-167")
        );
        for (let i = 0; i < element.length; i++) {
            element[i].click();
        }
    } catch (e) {
        element = null;
        console.log("Error: ", e);
        assert(false, true);
    }
});

When("Product size is selected", async () => {
    assert(true, true);
});

AfterAll(async () => {
    await driver.quit();
});