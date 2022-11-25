Feature: Item Detail
Scenario: Quantity of product is decreased when minus button is pressed
Given I have chosen a product from the list of products f3
Given I pressed on minus button
Then the quantity of the product decreases