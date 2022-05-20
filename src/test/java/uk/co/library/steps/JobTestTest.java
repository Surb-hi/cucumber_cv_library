package uk.co.library.steps;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobTestTest {
    @Given("^I am in homepage$")
    public void iAmInHomepage() {
    }

    @When("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String JobTitletext){
     new HomePage().clickOnAcceptCookie();
        new HomePage().enterJobTitle(JobTitletext);
    }

    @And("^I enter Location \"([^\"]*)\"$")
    public void iEnterLocation(String Locationtext){
        new HomePage().enterLocation(Locationtext);
    }

    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String Distancetext){
        new HomePage().selectDistance(Distancetext);
    }

    @And("^I click on more search options link$")
    public void iClickOnMoreSearchOptionsLink() throws InterruptedException {
        Thread.sleep(2000);
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter salaryMin \"([^\"]*)\"$")
    public void iEnterSalaryMin(String minSalary )  {
        new HomePage().enterMinSalary(minSalary);
    }

    @And("^I enter salaryMax \"([^\"]*)\"$")
    public void iEnterSalaryMax(String maxSalary)  {
        new HomePage().enterMaxSalary(maxSalary);
    }

    @And("^I select salaryType \"([^\"]*)\"$")
    public void iSelectSalaryType(String SalaryTypeText)  {
        new HomePage().selectSalaryType(SalaryTypeText);
    }

    @And("^I select jobType \"([^\"]*)\"$")
    public void iSelectJobType(String JobTypeText)  {
        new HomePage().selectSalaryType(JobTypeText);
    }

    @And("^I click on Find Jobs button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^I verify the result \"([^\"]*)\"$")
    public void iVerifyTheResult(String result){
        Assert.assertTrue("",new ResultPage().verifyTheResults().contains(result));
    }
}
