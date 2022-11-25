Feature: Item Detail
Scenario: Item is added to cart when the button is pressed
Given I have chosen a product from the list of products f1
When I clicked the add to cart button
Then the "Item added to cart"