Feature: Cart
Scenario: Product checkout
Given I have added a product to my cart and I am on cart page
When The checkout button is clicked
Then I should be redirected to the payment method page