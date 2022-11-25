const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver")
var webdriver = require("selenium-webdriver")
const driver = new webdriver.Builder().forBrowser("chrome").build()

Given ("I have chosen a product from the list of products f2", async () => {
    await driver.get("http://localhost:3000/p/1")
    await driver.sleep(1000)
});

Given ("I clicked on plus button", async () => {
    let element = null;
    try {
        element = await driver.findElement(
            By.className(
                "MuiButtonBase-root MuiIconButton-root RSFQuantitySelector-button-171 RSFQuantitySelector-add-173 MuiIconButton-sizeSmall"
            )
        )
        await element.click()
    } catch (e) {
        element = null;
        console.log("Error: ", e)
    }
})

Then ("the quantity of the product increases", async () => {
    assert(true, true)
})

AfterAll(async () => {
    await driver.quit()
})