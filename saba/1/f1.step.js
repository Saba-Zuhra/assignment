const { Given, When, Then, AfterAll } = require("@cucumber/cucumber")
const { By } = require("selenium-webdriver")
const assert = require("assert")
require("chromedriver")
var webdriver = require("selenium-webdriver")
const driver = new webdriver.Builder().forBrowser("chrome").build()

Given("I have chosen a product from the list of products f1", { timeout: 60000 }, async () => {
        await driver.get("http://localhost:3000/p/1")
        await driver.sleep(1000)
    }
)

Given("I clicked the add to cart button", async () => {
    let element = 0
    try {
        element = await driver.findElement(
            By.className(
                "MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-docked-206 makeStyles-noShadow-207 MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge"
            )
        )
        await element.click()
    } catch (e) {
        element = null
        console.log("Error: ", e)
    }
})
Then("the {string}", async (string) => {
    try {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(driver.findElement(By.className("MuiTypography-root MuiTypography-h6")))
            }, 4000)
        }).then((element) => {
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(element.getText())
                }, 4000)
            }).then((text) => {
                console.log("text: ", text)
                assert.equal(string, text)
            })
        })
    } catch (e) {
        console.log("Error: ", e)
        assert.equal(false, true)
    }
})

AfterAll(async () => {
    await driver.quit()
})