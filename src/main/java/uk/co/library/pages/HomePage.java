package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitle1;
    @FindBy(xpath = "//input[@id='location']")
    WebElement Location;
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;
    @FindBy(id = "toggle-hp-search")
    WebElement moreSearchOptionsLink;
    @FindBy(xpath = "//*[contains(text(),'Accept')]")
    WebElement cookies;
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;


    public void enterJobTitle(String jobTitle) {
        sendTextToElement(jobTitle1, jobTitle);
        log.info("Enter jobTitle" + jobTitle + " to jobTitle field " + jobTitle1.toString() + "<br>");
    }


    public void enterLocation(String location) {
        sendTextToElement(Location, location);
        log.info("Enter Location" + location + " to Location field " + Location.toString() + "<br>");
    }


    public void selectDistance(String distance) {
        selectByVisibleTextFromDropDown(distanceDropDown, distance);
        log.info("Selecting distanceDropDown " + distance + " from dropdown " + distanceDropDown.toString() + "<br>");
    }

    public void clickOnMoreSearchOptionLink() {
        clickOnElement(moreSearchOptionsLink);
        log.info("Clicking on moreSearchOptionsLink" + moreSearchOptionsLink.toString() + "<br>");
    }

    public void clickOnAcceptCookie() {
        switchToiFrame("gdpr-consent-notice");
        log.info("Clicking on Accept Cookies : " + cookies.toString());
        clickOnElement(cookies);
    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(salaryMin, minSalary);
        log.info("Enter salaryMin" + minSalary + " to salaryMin  field " + salaryMin.toString() + "<br>");
    }


    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(salaryMax, maxSalary);
        log.info("Enter salaryMax" + maxSalary + " to salaryMax field " + salaryMax.toString() + "<br>");
    }


    public void selectSalaryType(String sType) {
        selectByValueFromDropDown(salaryTypeDropDown, sType);
        log.info("Selecting salaryTypeDropDown " + sType + " from dropdown " + salaryTypeDropDown.toString() + "<br>");
    }


    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);
        log.info("Selecting jobTypeDropDown" + jobType + " from dropdown " + jobTypeDropDown.toString() + "<br>");
    }


    public void clickOnFindJobsButton() {
        clickOnElement(findJobsBtn);
        log.info("Clicking on findJobsBtn" + findJobsBtn.toString() + "<br>");
    }
}
