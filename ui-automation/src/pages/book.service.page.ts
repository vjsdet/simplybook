import { type Locator, type Page } from "@playwright/test";

export class BookServicePage {
  readonly page: Page;
  readonly lnkManage: Locator;
  readonly lnkServices: Locator;
  readonly btnAddService: Locator;
  readonly txtServiceName: Locator;
  readonly btnSaveService: Locator;
  readonly lblSuccessMessage: Locator;
  readonly cancelService: Locator;
  readonly confirmCcancelService: Locator;
  readonly expandSchedule: Locator;
  readonly daySchedule: Locator;
  readonly btnSaveSchedule: Locator;

  constructor(page: Page) {
    this.page = page;
    this.page.bringToFront();
    this.lnkManage = this.page.locator("a[title='Manage']");
    this.lnkServices = this.page.locator("a[title='Services']");
    this.btnAddService = this.page.locator(".far.icon.fa-plus");
    this.txtServiceName = this.page.locator("[placeholder='Service name']");
    this.btnSaveService = this.page.locator("(//div[@class ='title' and contains(text(),'Service details')]/../../..//span[contains(text(),'Save & Close')])[2]");
    this.lblSuccessMessage = this.page.locator("//div[@class='alert--content' and text()='Your settings were successfully saved.']");
    this.cancelService = this.page.locator(".management-app-header .btn--danger-high");
    this.confirmCcancelService = this.page.locator(".--confirm.btn-primary");  
    this.expandSchedule = this.page.locator("//div[@class ='title' and contains(text(),'Service schedule')]");
    this.daySchedule = this.page.locator("label[for^='sb_day_off']>span");
    this.btnSaveSchedule = this.page.locator("(//div[@class ='title' and contains(text(),'Service schedule')]/../../..//span[contains(text(),'Save & Close')])[2]");

  }

  getCreatedService(name:string)
  {
    return this.page.locator(`//a[contains(@href,'#services/edit/details/') and normalize-space()='${name}']`)
  }
}
