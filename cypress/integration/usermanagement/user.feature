Feature: Login

  I want to login to RAPID

  Scenario: Display public page
    Given I go to /public url
    Then I see "Public" on the page

  Scenario: Redirect to /login if not logged in already
    Given I go to /protected url
    Then I see "Login" on the page
