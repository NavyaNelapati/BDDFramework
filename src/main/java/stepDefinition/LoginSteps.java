package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class LoginSteps {
	WebDriver driver;
	
@Given ("^User is already on Login page$")
public void user_already_on_login_page() {
		
	System.setProperty("webdriver.chrome.driver", "C:\\Selenium Drivers\\chromedriver_win32\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("https://www.costco.com/");
	}

@When("^login page is Welcome to Costco Wholesale$")
public void login_page_is_Welcome_to_Costco_Wholesale() {
	Assert.assertEquals("Welcome to Costco Wholesale", driver.getTitle());
}

@And("^Click on Sign In/Register link$")
public void click_on_SignIn_link() {
	driver.findElement(By.id("header_sign_in")).click();
}

@Then("^User enters Username and Password$")
public void user_enters_Username_and_Password() {
driver.findElement(By.id("logonId")).sendKeys("Navya");
driver.findElement(By.id("logonPassword")).sendKeys("Navya@123");
	
}

@And("^User clicks on Login Button$")
public void user_clicks_on_Login_Button() {
	driver.findElement(By.xpath("//input[@class='primary']")).click();
}
@Then ("^close Browser$")
public void close_Browser() {
	driver.quit();
}
}
