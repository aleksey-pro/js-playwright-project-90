import { Locator, Page } from "@playwright/test"

export default class AppPageClass {
  private readonly page: Page;
  
  loginBtn: Locator;  
  infoBlock: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator('button[type="submit"]');
    this.infoBlock = page.getByRole("status");
  }

  async goto() {
    await this.page.goto('http://localhost:5173/')
  }

  async fillByLabel(name: string, data: string) {
    const elem = this.page.getByLabel(name);
    await elem.fill(data);
  }

  async clickSubmitButton() {
    await this.loginBtn.click();
  }
}