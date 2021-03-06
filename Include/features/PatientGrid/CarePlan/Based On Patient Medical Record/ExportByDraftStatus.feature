Feature: Care Plan - Export While Draft Status

  Background: 
    Given I navigate to patient grid

  @Smoke_USMM
  Scenario Outline: Verify export function while draft status
    When I search <Patient> using global search
    Then I am on PWB with <Patient>
    And I click on care plan tab
    And I click on add new care plan button
    And I click on basedonpatientmedicalrecord
    Then I should see patient <Patient> as patient_name
    And I should see intial status as <New Status> on CP header
    When I enter title <Title>
    And I select work in progress as no
    And I click on save button
    Then I should see success message <SucessMessage> of CP
    * I should see patient <Patient> as patient_name
    And I should see patient data of draft status
    And I should see status as <Draft Status> on CP header
    And I should see export button

    Examples: 
      | Patient          | Title        | New Status | Draft Status | SucessMessage                           |
      | LAIRD, MICHAEL| DraftPatient | New        | Draft        | successCare Plan Saved SuccessfullyHide |
