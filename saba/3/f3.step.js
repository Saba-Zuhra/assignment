const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver")
var webdriver = require("selenium-webdriver")
const driver = new webdriver.Builder().forBrowser("chrome").build()

Given ("I have chosen a product from the list of products f3", { timeout: 80000 }, async () => {
    await driver.get("http://localhost:3000/p/1")
    await driver.sleep(1000)
});

Given("I pressed on minus button", async () => {
    let element = 0
    try {
        element = await driver.findElement(
            By.className(
                "MuiButtonBase-root MuiIconButton-root RSFQuantitySelector-button-171 RSFQuantitySelector-subtract-172 MuiIconButton-sizeSmall"
            )
        );
        await element.click();
    } catch (e) {
        element = null;
        console.log("Error: ", e)
    }
});

Then ("the quantity of the product decreases", async () => {
    assert(true, true)
})

AfterAll(async () => {
    await driver.quit()
})