import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnSubmitLogin: Locator;
  readonly lnkDashboard: Locator;
  readonly lnkAdmin: Locator;
  readonly lnkLogout: Locator;
  readonly tilesDashboard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.page.bringToFront();
    this.btnSubmitLogin = this.page.locator("//button[text()='Log in']");
    this.txtUsername = this.page.locator("#login");
    this.txtPassword = this.page.locator("#pass");
    this.lnkDashboard = this.page.locator("a[title='Dashboard']");
    this.lnkAdmin = this.page.locator(".nav-item.sub-menu.nav-item--account .angle.dcjq-icon");
    this.lnkLogout = this.page.locator("a[title='Log out']");
    this.tilesDashboard = this.page.locator(".dashboard-base-info");
  }
}
