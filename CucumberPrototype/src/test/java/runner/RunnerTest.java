package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "Features",
		glue= {"stepDefintion"},
		plugin= {"pretty","html:target/cucumber-reports"},
		monochrome = true
		)
public class RunnerTest {

}
