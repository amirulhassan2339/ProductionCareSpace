$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/CarePlan/Based On Patient Medical Record/Assessment_Cellulitis.feature");
formatter.feature({
  "name": "Care Plan - Add Cellulitis Assessment",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add Assessments Cellulitis",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM2"
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
  "name": "I click on assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I click on add",
  "keyword": "* "
});
formatter.step({
  "name": "I click on other assessment tempelate",
  "keyword": "* "
});
formatter.step({
  "name": "I checked Cellulitis",
  "keyword": "* "
});
formatter.step({
  "name": "I click on procced",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cTitle\u003e title",
  "keyword": "* "
});
formatter.step({
  "name": "I select dropdown values",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e comment",
  "keyword": "* "
});
formatter.step({
  "name": "I click save button",
  "keyword": "* "
});
formatter.step({
  "name": "I click on care plan tab",
  "keyword": "* "
});
formatter.step({
  "name": "I click on add new care plan button",
  "keyword": "* "
});
formatter.step({
  "name": "I click on basedonpatientmedicalrecord",
  "keyword": "* "
});
formatter.step({
  "name": "I mouse hover on assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I click on assessment icon",
  "keyword": "* "
});
formatter.step({
  "name": "I select multiple assessment checkboxes",
  "keyword": "* "
});
formatter.step({
  "name": "I click on OK button",
  "keyword": "* "
});
formatter.step({
  "name": "I should see assessment data",
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
        "Title",
        "Comment"
      ]
    },
    {
      "cells": [
        "LAIRD, MICHAEL",
        "Cellulitis Assessment",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
  "name": "Add Assessments Cellulitis",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke_USMM2"
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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to get text of object \u0027Object Repository/OR_PatientGrid/OR_SearchPatient/SearchPatientGrid/OR_Name/Obj_First_LastName\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:917)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$7.call(Unknown Source)\r\n\tat patientGrid.SD_BOPMR.I_am_on_PWB(SD_BOPMR.groovy:70)\r\n\tat ✽.I am on PWB with LAIRD, MICHAEL(Include/features/PatientGrid/CarePlan/Based On Patient Medical Record/Assessment_Cellulitis.feature:10)\r\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/OR_PatientGrid/OR_SearchPatient/SearchPatientGrid/OR_Name/Obj_First_LastName\u0027 located by \u0027//span[contains(@data-bind, \u0027text: fullName\u0027)]\u0027 not found\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1368)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:78)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:917)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$7.call(Unknown Source)\r\n\tat patientGrid.SD_BOPMR.I_am_on_PWB(SD_BOPMR.groovy:70)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:619)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:616)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:716)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_Assessment_Cellulitis.run(TC_Assessment_Cellulitis:5)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:398)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:389)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:368)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:360)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:255)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:203)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:152)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:95)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1628517316406.run(TempTestSuite1628517316406.groovy:39)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on assessment",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_click_on_assessment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_click_on_add()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on other assessment tempelate",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_click_on_other_assessment_tempelate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I checked Cellulitis",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_checked_Cellulitis()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on procced",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_click_on_procced()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter Cellulitis Assessment title",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_enter_assessment_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select dropdown values",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_select_dropdown_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. comment",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_enter_Comment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click save button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on care plan tab",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.click_On_Care_Plan_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add new care plan button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.click_On_Add_New_Care_Plan_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on basedonpatientmedicalrecord",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.click_On_BasedOnPatientMedicalRecord()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I mouse hover on assessment",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_mouse_hover_on_assessment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on assessment icon",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_click_on_assessment_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select multiple assessment checkboxes",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_select_multiple_assessment_checkboxes()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on OK button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_BOPMR.I_click_on_OK_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see assessment data",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_BOPMR.I_should_see_assessment_data()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});