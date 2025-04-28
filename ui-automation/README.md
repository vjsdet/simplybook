Install Node.js from below URL.
https://nodejs.org/en/download/

Open the commnad prompt in root directory.

Run the **"npm install"** command to install the dependencies.

SET the application url using below command

**SET APP_BASEURL=url**

SET the account info using below command

**SET APP_USERNAME=secretKey**
**SET APP_PASSWORD=password**

SET the headless mode for chrome extension using below command

**SET CHROME_EXTENSION_HEADLESS=value**

You can also set all above keys using .env file located in the root directory.

Execute your tests using the below command in run mode. 

**npx playwright test**

By default Playwright test runs in headless mode, to run in headed mode use -– headed flag.

**npx playwright test -–headed**

Using **run** mode when test execution is completed then report file **"index.html"** is generated in the root directory of the project inside **"playwright-report"** folder.

