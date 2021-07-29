$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/SearchPatient.feature");
formatter.feature({
  "name": "Search Patient",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PatientGrid"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Search Patient Using MRN From Patient Grid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchByMRN"
    }
  ]
});
formatter.step({
  "name": "I search \u003cPatient\u003e using global search",
  "keyword": "When "
});
formatter.step({
  "name": "I should see \u003cPatient_Name\u003e as patient with \u003cMRN\u003e as MRN and \u003cDOB\u003e as DOB and \u003cPatient_Status\u003e as Status on patient grid",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "Patient_Name",
        "MRN",
        "DOB",
        "Patient_Status"
      ]
    },
    {
      "cells": [
        "PE05E6ECEF0E46443B887BA108B24D9049",
        "ADam, Tom",
        "PE05E6ECEF0E46443B887BA108B24D9049",
        "02/02/2000",
        "Active"
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
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Patient Using MRN From Patient Grid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PatientGrid"
    },
    {
      "name": "@SearchByMRN"
    }
  ]
});
formatter.step({
  "name": "I search PE05E6ECEF0E46443B887BA108B24D9049 using global search",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see ADam, Tom as patient with PE05E6ECEF0E46443B887BA108B24D9049 as MRN and 02/02/2000 as DOB and Active as Status on patient grid",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_SearchPatient.Patient_should_be_verified(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});