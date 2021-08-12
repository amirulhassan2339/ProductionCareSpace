$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/SoapNote/SoapNotes_AddBillingInformation.feature");
formatter.feature({
  "name": "Soap Note Creation from Schedule flow",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Creating Billing Information  - Based On Patient\u0027s Medical Record",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM_CreateBillingInformation"
    }
  ]
});
formatter.step({
  "name": "I click on schedule tab",
  "keyword": "When "
});
formatter.step({
  "name": "I should see already scheduled appointment",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on three dots",
  "keyword": "When "
});
formatter.step({
  "name": "I hover over on create soapnotes",
  "keyword": "* "
});
formatter.step({
  "name": "I click on based on patient medical record",
  "keyword": "* "
});
formatter.step({
  "name": "I should see \u003cPatient\u003e as patient",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Billing Information Edit button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Add button to billing info",
  "keyword": "And "
});
formatter.step({
  "name": "I enter \u003cBillingInformation\u003e as billing information procedure",
  "keyword": "* "
});
formatter.step({
  "name": "I click on billing information OK button",
  "keyword": "* "
});
formatter.step({
  "name": "I click on SaveClose button to save billing information",
  "keyword": "* "
});
formatter.step({
  "name": "I should see Billing Information data in soap note popup",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Save button to save SOAP NOTE",
  "keyword": "When "
});
formatter.step({
  "name": "I should see soap note saved message",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on SaveClose button to save SOAP NOTE",
  "keyword": "When "
});
formatter.step({
  "name": "I should see soap note saved message",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on three dots",
  "keyword": "When "
});
formatter.step({
  "name": "I should see Edit Soap Note option",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see Billing Information data in soap note popup",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "BillingInformation",
        "Patient"
      ]
    },
    {
      "cells": [
        "99203",
        "LAIRD, MICHAEL"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
