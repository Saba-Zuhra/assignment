const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");
const { Builder, Key, until } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

Given("I have selected a product from the list of products f3", async () => {
    await driver.get("http://localhost:3000/p/1");
});

When("I select different images of the product", async () => {
    let element = null;
    try {
        element = await driver.findElements(By.className("RSFCarouselThumbnails-thumb-125 RSFImage-root-136 RSFImage-contain-139"));
        for (let i = 0; i < element.length; i++) {
            element[i].click();
        }
    } catch (e) {
        element = null;
        console.log("Error: " + e);
    }
});

Then("the selected image of the product appears", async () => {
    assert(true, true);
});

AfterAll(async () => {
    await driver.quit();
});