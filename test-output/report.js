$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Costco Login Feature",
  "description": "",
  "id": "costco-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Costco Test Scenario",
  "description": "",
  "id": "costco-login-feature;costco-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "login page is Welcome to Costco Wholesale",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign In/Register link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Username and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_already_on_login_page()"
});
formatter.result({
  "duration": 15863931898,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_page_is_Welcome_to_Costco_Wholesale()"
});
formatter.result({
  "duration": 17202461,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_SignIn_link()"
});
formatter.result({
  "duration": 21107716923,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_Username_and_Password()"
});
formatter.result({
  "duration": 293772308,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 118528000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_Browser()"
});
formatter.result({
  "duration": 675016615,
  "status": "passed"
});
});