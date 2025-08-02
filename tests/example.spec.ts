import { test, expect, Page } from '@playwright/test';
import { describe } from 'node:test';
import AppPageClass from '../src/utils/AppPage';

test('It renders successfully', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const appRoot = page.locator('#root');
  await expect(appRoot).toBeVisible();
});

describe('Test login-logout', () => {
  const userData = {
    username: 'anxieter',
    password: '123'
  }

  let appPageClass: AppPageClass;

  test.beforeEach(async ({ page }) => {
    appPageClass = new AppPageClass(page);
    await appPageClass.goto();
  });

  test('Login correctly', async () => {    
    await appPageClass.fillByLabel('Имя пользователя', userData.username);
    await appPageClass.fillByLabel('Пароль', userData.password);

    await appPageClass.clickSubmitButton();

    await expect(appPageClass.loginBtn).toHaveText('Выйти');
    await expect(appPageClass.infoBlock).toHaveText('Вы вошли');
  });

  test('Logout correctly', async () => {

    await appPageClass.clickSubmitButton();

    await expect(appPageClass.loginBtn).toHaveText('Войти');
    await expect(appPageClass.infoBlock).toHaveText('Вы разлогинены');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
})


