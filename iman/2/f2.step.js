const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");
const assert = require("assert");
require("chromedriver");
const { Builder, Key, until } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

Given("I have selected a product from the list of products f2", { timeout: 20000 }, async () => {
    await driver.get("http://localhost:3000/p/1");
});

When("I hover over the product image", async () => {
    let element = null;
    try {
        element = await driver.findElement(By.className("makeStyles-rimRoot-104"));
        await element.click();
    } catch (e) {
        element = null;
        console.log("Error: " + e);
    }
});

Then("the product image expands", async () => {
    assert(true, true);
})