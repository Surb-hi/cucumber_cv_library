Feature: Job Search Test

  As user I want to test search functionality

  Scenario Outline: Verify job search result using different dataset
    Given           I am in homepage
    When            I enter job title "<jobTitle>"
    And             I enter Location "<location>"
    And             I select distance "<distance>"
    And             I click on more search options link
    And             I enter salaryMin "<salaryMin>"
    And             I enter salaryMax "<salaryMax>"
    And             I select salaryType "<salaryType>"
    And             I select jobType "<jobType>"
    And             I click on Find Jobs button
    Then            I verify the result "<result>"

    Examples:
      | jobTitle                     | location   | distance       | salaryMin | salaryMax | salaryType | jobType        | result                                                       |
      | Tester                       | Harrow     | up to 5 miles  | 3000      | 5000      | annum      | Permanent      | Permanent Tester jobs in Harrow on the Hill                  |
      | Plumber                      | London     | up to 15 miles | 4000      | 5000      | month      | Contract       | Contract Plumber jobs in London                              |
      | Cook                         | Birmingham | up to 5 miles  | 30000     | 45000     | annum      | Part Time      | Part Time Cook jobs in Birmingham                            |
      | architect                    | Chester    | up to 10 miles | 500       | 1000      | week       | Temporary      | Temporary Architect jobs in Chester                          |
      | Software Development Manager | Coventry   | up to 5 miles  | 400       | 600       | day        | Apprenticeship | Apprenticeship Software Development Manager jobs in Coventry |
      | photographer                 | Durham     | up to 10 miles | 50000     | 60500     | annum      | Permanent      | Permanent Photographer jobs in Durham                        |
      | Salespersons                 | Ely        | up to 5 miles  | 30000     | 40000     | annum      | Contract       | Contract Salespersons jobs in Ely                            |



