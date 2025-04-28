import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { BookServicePage } from "../pages/book.service.page";

const url: string = process.env.APP_BASEURL as string;
const username: string = process.env.APP_USERNAME as string;
const password: string = process.env.APP_PASSWORD as string;

test.describe("Regression Suites", () => {
  test("Login", async ({ page }) => {
    await page.goto(url);
    await page.waitForTimeout(5000);
    const objLogin = new LoginPage(page);
    await expect(objLogin.txtUsername).toBeVisible();
    await expect(objLogin.txtUsername).toBeEnabled();

    await expect(objLogin.txtPassword).toBeVisible();
    await expect(objLogin.txtPassword).toBeEnabled();

    await expect(objLogin.btnSubmitLogin).toBeVisible();
    await expect(objLogin.btnSubmitLogin).toBeEnabled();

    await objLogin.txtUsername.clear();
    await objLogin.txtUsername.fill(username);

    await objLogin.txtPassword.clear();
    await objLogin.txtPassword.fill(password);

    await objLogin.btnSubmitLogin.click();

    await page.waitForTimeout(10000);
    if ((await objLogin.txtPassword.all()).length > 0) {
      await objLogin.txtUsername.fill(username);
      await objLogin.txtPassword.fill(password);
      await objLogin.btnSubmitLogin.click();
    }
    
    await expect(objLogin.lnkAdmin).toBeVisible();
    await expect(objLogin.lnkLogout).toBeVisible();

    await expect(objLogin.txtUsername).toBeHidden();
    await expect(objLogin.txtPassword).toBeHidden();
    await expect(objLogin.btnSubmitLogin).toBeHidden();

    await objLogin.lnkDashboard.click();
    await expect(objLogin.tilesDashboard).toBeVisible();
  });

  test("Logout", async ({ page }) => {
    await page.goto(url);
    const objLogin = new LoginPage(page);
    await expect(objLogin.txtUsername).toBeVisible();
    await expect(objLogin.txtUsername).toBeEnabled();

    await expect(objLogin.txtPassword).toBeVisible();
    await expect(objLogin.txtPassword).toBeEnabled();

    await expect(objLogin.btnSubmitLogin).toBeVisible();
    await expect(objLogin.btnSubmitLogin).toBeEnabled();

    await objLogin.txtUsername.clear();
    await objLogin.txtUsername.fill(username);

    await objLogin.txtPassword.clear();
    await objLogin.txtPassword.fill(password);

    await objLogin.btnSubmitLogin.click();

    await page.waitForTimeout(10000);
    if ((await objLogin.txtPassword.all()).length > 0) {
      await objLogin.txtUsername.fill(username);
      await objLogin.txtPassword.fill(password);
      await objLogin.btnSubmitLogin.click();
    }

    await expect(objLogin.lnkAdmin).toBeVisible();
    await expect(objLogin.lnkLogout).toBeVisible();

    await expect(objLogin.txtUsername).toBeHidden();
    await expect(objLogin.txtPassword).toBeHidden();
    await expect(objLogin.btnSubmitLogin).toBeHidden();

    await objLogin.lnkDashboard.click();
    await objLogin.lnkAdmin.click();
    await objLogin.lnkLogout.click();

    await expect(objLogin.txtUsername).toBeVisible();
    await expect(objLogin.txtPassword).toBeVisible();
    await expect(objLogin.btnSubmitLogin).toBeVisible();

    await expect(objLogin.lnkAdmin).toBeHidden();
    await expect(objLogin.lnkLogout).toBeHidden();
  });

  test("Book Service", async ({ page }) => {
    await page.goto(url);
    const objLogin = new LoginPage(page);
    const objBookService = new BookServicePage(page);
    const serviceName = `Test_${Date.now()}`;

    await expect(objLogin.txtUsername).toBeVisible();
    await expect(objLogin.txtUsername).toBeEnabled();

    await expect(objLogin.txtPassword).toBeVisible();
    await expect(objLogin.txtPassword).toBeEnabled();

    await expect(objLogin.btnSubmitLogin).toBeVisible();
    await expect(objLogin.btnSubmitLogin).toBeEnabled();

    await objLogin.txtUsername.clear();
    await objLogin.txtUsername.fill(username);

    await objLogin.txtPassword.clear();
    await objLogin.txtPassword.fill(password);

    await objLogin.btnSubmitLogin.click();

    await page.waitForTimeout(10000);
    if ((await objLogin.txtPassword.all()).length > 0) {
      await objLogin.txtUsername.fill(username);
      await objLogin.txtPassword.fill(password);
      await objLogin.btnSubmitLogin.click();
    }
    
    await expect(objLogin.lnkAdmin).toBeVisible();
    await expect(objLogin.lnkLogout).toBeVisible();

    await objBookService.lnkManage.click();
    await objBookService.lnkServices.click();

    await expect(objBookService.btnAddService).toBeVisible();
    await objBookService.btnAddService.click();

    await objBookService.txtServiceName.fill(serviceName);
    await objBookService.btnSaveService.click();

    await expect(objBookService.lblSuccessMessage).toBeVisible();
    await expect(objBookService.getCreatedService(serviceName)).toBeVisible();
  });

  test("Cancel Service", async ({ page }) => {
    await page.goto(url);
    const objLogin = new LoginPage(page);
    const objBookService = new BookServicePage(page);
    const serviceName = `Test_${Date.now()}`;

    await expect(objLogin.txtUsername).toBeVisible();
    await expect(objLogin.txtUsername).toBeEnabled();

    await expect(objLogin.txtPassword).toBeVisible();
    await expect(objLogin.txtPassword).toBeEnabled();

    await expect(objLogin.btnSubmitLogin).toBeVisible();
    await expect(objLogin.btnSubmitLogin).toBeEnabled();

    await objLogin.txtUsername.clear();
    await objLogin.txtUsername.fill(username);

    await objLogin.txtPassword.clear();
    await objLogin.txtPassword.fill(password);

    await objLogin.btnSubmitLogin.click();

    await page.waitForTimeout(10000);
    if ((await objLogin.txtPassword.all()).length > 0) {
      await objLogin.txtUsername.fill(username);
      await objLogin.txtPassword.fill(password);
      await objLogin.btnSubmitLogin.click();
    }
    
    await expect(objLogin.lnkAdmin).toBeVisible();
    await expect(objLogin.lnkLogout).toBeVisible();

    await objBookService.lnkManage.click();
    await objBookService.lnkServices.click();

    await expect(objBookService.btnAddService).toBeVisible();
    await objBookService.btnAddService.click();

    await objBookService.txtServiceName.fill(serviceName);
    await objBookService.btnSaveService.click();

    await expect(objBookService.lblSuccessMessage).toBeVisible();
    await expect(objBookService.getCreatedService(serviceName)).toBeVisible();

    await objBookService.cancelService.click();
    await objBookService.confirmCcancelService.click();
    await page.reload();
    await expect(objBookService.getCreatedService(serviceName)).toBeHidden();    
  });

  test("Edit Service Schedule", async ({ page }) => {
    await page.goto(url);
    const objLogin = new LoginPage(page);
    const objBookService = new BookServicePage(page);
    const serviceName = `Test_${Date.now()}`;

    await expect(objLogin.txtUsername).toBeVisible();
    await expect(objLogin.txtUsername).toBeEnabled();

    await expect(objLogin.txtPassword).toBeVisible();
    await expect(objLogin.txtPassword).toBeEnabled();

    await expect(objLogin.btnSubmitLogin).toBeVisible();
    await expect(objLogin.btnSubmitLogin).toBeEnabled();

    await objLogin.txtUsername.clear();
    await objLogin.txtUsername.fill(username);

    await objLogin.txtPassword.clear();
    await objLogin.txtPassword.fill(password);

    await objLogin.btnSubmitLogin.click();

    await page.waitForTimeout(10000);
    if ((await objLogin.txtPassword.all()).length > 0) {
      await objLogin.txtUsername.fill(username);
      await objLogin.txtPassword.fill(password);
      await objLogin.btnSubmitLogin.click();
    }
    
    await expect(objLogin.lnkAdmin).toBeVisible();
    await expect(objLogin.lnkLogout).toBeVisible();

    await objBookService.lnkManage.click();
    await objBookService.lnkServices.click();

    await expect(objBookService.btnAddService).toBeVisible();
    await objBookService.btnAddService.click();

    await objBookService.txtServiceName.fill(serviceName);
    await objBookService.btnSaveService.click();

    await expect(objBookService.lblSuccessMessage).toBeVisible();
    await page.waitForTimeout(10000);

    await objBookService.expandSchedule.click();
    await objBookService.daySchedule.first().click();
    await objBookService.daySchedule.nth(1).click();
    await objBookService.daySchedule.nth(2).click();
    await objBookService.btnSaveSchedule.click();
    await expect(objBookService.lblSuccessMessage.last()).toBeVisible();
  });
});
