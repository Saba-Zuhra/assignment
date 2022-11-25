Feature: Item Detail
Scenario: Selecting the suggesting item from the selecting item
Given I have selected a product from the list of products f1
When I select a suggested product
Then the product detail page of the selected product opens