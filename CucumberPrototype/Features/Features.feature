Feature: This tests the login functionality of the orange hrm application

Scenario Outline: Unsucessful login with invalid credentials
	Given User is on login page
	And User enters invalid username as <invalid username> 
	And User enters invalid password as <invalid password>
	And User clicks the login button
	Then Verify the Invalid credentials message is displayed on the screen
	Examples:
	|invalid username|invalid password|
	|abc|abc|
	|xyz|xyz|