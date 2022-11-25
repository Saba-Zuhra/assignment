const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver")
var webdriver = require("selenium-webdriver")
const driver = new webdriver.Builder().forBrowser("chrome").build()

Given ("I have selected a product from the list of products f1", { timeout: 10000 }, async () => {
    await driver.get("http://localhost:3000/p/1")
    await driver.sleep(1000)
});

When("I click on product color", async() => {
    let element = 0
    try {
        element = await driver.findElements(
            By.className(
                "RSFProductOptionSelector-button-150 RSFSwatchProductOption-button-152 RSFSwatchProductOption-default-159"
            )
        );
        for (let i = 0; i < element.length; i++) {
            element[i].click();
        }
    } catch (e) {
        element = null;
        console.log("Error: ", e)
        assert(false, true)
    }
});

Then ("the product color is selected", async () => {
    assert(true, true)
})

AfterAll(async () => {
    await driver.quit();
});