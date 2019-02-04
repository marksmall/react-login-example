Feature: Login

  Scenario: Display public page
    Given I go to /public url
    Then I see "Public" on the page

  Scenario: Redirect to /login if not logged in already
    Given I go to /protected url
    Then I see "Login" on the page

  Scenario: Successful Login
    Given I go to /stadiums url
    When I type "joe90@supermarionation.com" into the Email field
    When I type "password" into the Password field
    When I click "Login" button
    Then I see /stadiums map on the page

