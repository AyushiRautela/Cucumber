$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features.feature");
formatter.feature({
  "line": 1,
  "name": "This tests the login functionality of the orange hrm application",
  "description": "",
  "id": "this-tests-the-login-functionality-of-the-orange-hrm-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Unsucessful login with invalid credentials",
  "description": "",
  "id": "this-tests-the-login-functionality-of-the-orange-hrm-application;unsucessful-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters invalid username as \u003cinvalid username\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters invalid password as \u003cinvalid password\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the Invalid credentials message is displayed on the screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "this-tests-the-login-functionality-of-the-orange-hrm-application;unsucessful-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "invalid username",
        "invalid password"
      ],
      "line": 10,
      "id": "this-tests-the-login-functionality-of-the-orange-hrm-application;unsucessful-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abc",
        "abc"
      ],
      "line": 11,
      "id": "this-tests-the-login-functionality-of-the-orange-hrm-application;unsucessful-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz",
        "xyz"
      ],
      "line": 12,
      "id": "this-tests-the-login-functionality-of-the-orange-hrm-application;unsucessful-login-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6051120940,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Unsucessful login with invalid credentials",
  "description": "",
  "id": "this-tests-the-login-functionality-of-the-orange-hrm-application;unsucessful-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters invalid username as abc",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters invalid password as abc",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the Invalid credentials message is displayed on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 3965939122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 32
    }
  ],
  "location": "StepDefinition.setUsername(String)"
});
formatter.result({
  "duration": 308780590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 32
    }
  ],
  "location": "StepDefinition.setPassword(String)"
});
formatter.result({
  "duration": 229799548,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickLogin()"
});
formatter.result({
  "duration": 982172072,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verifyLoginFailedMessage()"
});
formatter.result({
  "duration": 139589746,
  "status": "passed"
});
formatter.after({
  "duration": 724687827,
  "status": "passed"
});
formatter.before({
  "duration": 2700159498,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Unsucessful login with invalid credentials",
  "description": "",
  "id": "this-tests-the-login-functionality-of-the-orange-hrm-application;unsucessful-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters invalid username as xyz",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enters invalid password as xyz",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the Invalid credentials message is displayed on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 4122804923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 32
    }
  ],
  "location": "StepDefinition.setUsername(String)"
});
formatter.result({
  "duration": 252224409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 32
    }
  ],
  "location": "StepDefinition.setPassword(String)"
});
formatter.result({
  "duration": 224688060,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickLogin()"
});
formatter.result({
  "duration": 934584903,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verifyLoginFailedMessage()"
});
formatter.result({
  "duration": 136918543,
  "status": "passed"
});
formatter.after({
  "duration": 708229089,
  "status": "passed"
});
});