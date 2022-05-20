$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobserachtest.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "\r\nAs user I want to test search functionality",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 19,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;1"
    },
    {
      "comments": [
        {
          "line": 20,
          "value": "#      | Tester   | Harrow   | up to 5 miles | 3000      | 5000      | annum      | Permanent | Permanent Tester jobs in Harrow on the Hill |"
        }
      ],
      "cells": [
        "Plumber",
        "London",
        "up to 15 miles",
        "4000",
        "5000",
        "month",
        "Contract",
        "Contract Plumber jobs in London"
      ],
      "line": 21,
      "id": "job-search-test;verify-job-search-result-using-different-dataset;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3528280200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#      | Tester   | Harrow   | up to 5 miles | 3000      | 5000      | annum      | Permanent | Permanent Tester jobs in Harrow on the Hill |"
    }
  ],
  "line": 21,
  "name": "Verify job search result using different dataset",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Plumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter Location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salaryMin \"4000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMax \"5000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType \"month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Contract Plumber jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobTestTest.iAmInHomepage()"
});
formatter.result({
  "duration": 68456899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Plumber",
      "offset": 19
    }
  ],
  "location": "JobTestTest.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 20223714301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobTestTest.iEnterLocation(String)"
});
formatter.result({
  "duration": 52955400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobTestTest.iSelectDistance(String)"
});
formatter.result({
  "duration": 101894201,
  "status": "passed"
});
formatter.match({
  "location": "JobTestTest.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 2106827300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 19
    }
  ],
  "location": "JobTestTest.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 121560500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 19
    }
  ],
  "location": "JobTestTest.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 68399600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "month",
      "offset": 21
    }
  ],
  "location": "JobTestTest.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 76436700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 18
    }
  ],
  "location": "JobTestTest.iSelectJobType(String)"
});
formatter.result({
  "duration": 20075858700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Contract\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-UEJFETJP\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:287)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:190)\r\n\tat uk.co.library.utility.Utility.selectByValueFromDropDown(Utility.java:156)\r\n\tat uk.co.library.pages.HomePage.selectSalaryType(HomePage.java:80)\r\n\tat uk.co.library.steps.JobTestTest.iSelectJobType(JobTestTest.java:55)\r\n\tat ✽.And I select jobType \"Contract\"(jobserachtest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobTestTest.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Plumber jobs in London",
      "offset": 21
    }
  ],
  "location": "JobTestTest.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 780750900,
  "status": "passed"
});
});