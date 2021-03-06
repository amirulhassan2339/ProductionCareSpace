$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/CarePlan/Blank.feature");
formatter.feature({
  "name": "Care Plan - Blank",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Blank"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify WIP status function using save \u0026 close button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeUSMM_WIPSaveCloseBtn_Blank"
    }
  ]
});
formatter.step({
  "name": "I search \u003cPatient\u003e using global search",
  "keyword": "When "
});
formatter.step({
  "name": "I am on PWB with \u003cPatient\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on care plan tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on add new care plan button",
  "keyword": "And "
});
formatter.step({
  "name": "I click on blank",
  "keyword": "And "
});
formatter.step({
  "name": "I should see patient \u003cPatient\u003e as patient_name",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see intial status as \u003cNew Status\u003e on CP header",
  "keyword": "And "
});
formatter.step({
  "name": "I enter title \u003cTitle\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click on save and close button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see success message \u003cSucessMessage\u003e of CP",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on title from care plan grid",
  "keyword": "When "
});
formatter.step({
  "name": "I should see patient \u003cPatient\u003e as patient_name",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see patient data of WIP status",
  "keyword": "And "
});
formatter.step({
  "name": "I should see progress status as \u003cWIP Status\u003e on CP header",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "Title",
        "New Status",
        "WIP Status",
        "SucessMessage"
      ]
    },
    {
      "cells": [
        "LAIRD, MICHAEL",
        "WIPPatient",
        "New",
        "WIP",
        "successCare Plan Saved SuccessfullyHide"
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
  "name": "Verify WIP status function using save \u0026 close button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Blank"
    },
    {
      "name": "@SmokeUSMM_WIPSaveCloseBtn_Blank"
    }
  ]
});
formatter.step({
  "name": "I search LAIRD, MICHAEL using global search",
  "keyword": "When "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on PWB with LAIRD, MICHAEL",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_BOPMR.I_am_on_PWB(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to get text of object \u0027Object Repository/OR_PatientGrid/OR_SearchPatient/SearchPatientGrid/OR_Name/Obj_First_LastName\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:917)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$7.call(Unknown Source)\r\n\tat patientGrid.SD_BOPMR.I_am_on_PWB(SD_BOPMR.groovy:70)\r\n\tat ???.I am on PWB with LAIRD, MICHAEL(Include/features/PatientGrid/CarePlan/Blank.feature:150)\r\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/OR_PatientGrid/OR_SearchPatient/SearchPatientGrid/OR_Name/Obj_First_LastName\u0027 located by \u0027//span[contains(@data-bind, \u0027text: fullName\u0027)]\u0027 not found\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1368)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:78)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:917)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$7.call(Unknown Source)\r\n\tat patientGrid.SD_BOPMR.I_am_on_PWB(SD_BOPMR.groovy:70)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:619)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:616)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:716)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat WIPBySaveCloseBtn_Blank_CP.run(WIPBySaveCloseBtn_Blank_CP:5)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:398)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:389)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:368)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:360)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:255)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:203)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:152)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:95)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1628860307868.run(TempTestSuite1628860307868.groovy:39)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on care plan tab",
  "keyword": "And "
});
formatter.match({
  "location": "SD_BOPMR.click_On_Care_Plan_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add new care plan button",
  "keyword": "And "
});
formatter.match({
  "location": "SD_BOPMR.click_On_Add_New_Care_Plan_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on blank",
  "keyword": "And "
});
formatter.match({
  "location": "SD_Blank.I_click_on_blank()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see patient LAIRD, MICHAEL as patient_name",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_BOPMR.verify_Patient_Data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see intial status as New on CP header",
  "keyword": "And "
});
formatter.match({
  "location": "SD_BOPMR.I_should_see_intial_status_as_on_CP_header(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter title WIPPatient",
  "keyword": "When "
});
formatter.match({
  "location": "SD_BOPMR.user_Enter_Title_TestingPatient(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on save and close button",
  "keyword": "And "
});
formatter.match({
  "location": "SD_BOPMR.click_On_SaveClose_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see success message successCare Plan Saved SuccessfullyHide of CP",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_BOPMR.Close_and_Verify_Alert_Message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on title from care plan grid",
  "keyword": "When "
});
formatter.match({
  "location": "SD_BOPMR.I_click_on_title_from_care_plan_grid()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see patient LAIRD, MICHAEL as patient_name",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_BOPMR.verify_Patient_Data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see patient data of WIP status",
  "keyword": "And "
});
formatter.match({
  "location": "SD_BOPMR.I_should_see_patient_data_of_WIP_status()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see progress status as WIP on CP header",
  "keyword": "And "
});
formatter.match({
  "location": "SD_BOPMR.I_should_see_WIPprogress_status_as_on_CP_header(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});