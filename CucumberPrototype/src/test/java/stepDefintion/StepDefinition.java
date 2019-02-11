package stepDefintion;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDefinition {

	WebDriver driver;

	@Before
	public void setUp() {

		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();

	}

	@After
	public void tearDown() {
		driver.quit();
	}

	@Given("^User is on login page$")
	public void user_is_on_login_page() throws Throwable {

		driver.get("https://opensource-demo.orangehrmlive.com/");

	}

	@And("^User enters invalid username as ([^\"]*)$")
	public void setUsername(String Userame) throws Throwable {

		driver.findElement(By.id("txtUsername")).sendKeys(Userame);

	}

	@And("^User enters invalid password as ([^\"]*)$")
	public void setPassword(String Password) throws Throwable {

		driver.findElement(By.id("txtPassword")).sendKeys(Password);

	}

	@And("^User clicks the login button$")
	public void clickLogin() throws Throwable {

		driver.findElement(By.id("btnLogin")).click();

	}
	
	@Then("^Verify the Invalid credentials message is displayed on the screen$")
	public void verifyLoginFailedMessage() throws Throwable {

		Assert.assertEquals(driver.findElement(By.id("spanMessage")).getText(), "Invalid credentials");

	}
}
