package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.utility.Utility;

public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage(){
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath="//h1[@class='search-header__title']")
    WebElement result;

    public String verifyTheResults(){
        Reporter.log("getting  text from result"+result.toString()+"<br>");
        return getTextFromElement(result);
    }
}
