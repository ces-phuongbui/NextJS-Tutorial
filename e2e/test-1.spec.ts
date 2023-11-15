import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.getByRole('link', { name: 'Get started' }).click();
await page.getByLabel('Switch between dark and light mode (currently light mode)').click();
  await page.goto('https://www.google.com/search?q=playwright&oq=playwright&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIxNjlqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ... Playwright https://playwright.dev' }).click();

  await page.getByRole('link', { name: 'Generating tests' }).click();
  await page.getByRole('link', { name: 'Getting started - VS Code' }).click();
  await page.getByRole('link', { name: 'Canary releases' }).click();
  await page.getByText('Playwright TestTest configurationTest use optionsAnnotationsCommand lineEmulatio').click();
  await page.getByRole('link', { name: 'Retries' }).click();
  await page.getByRole('link', { name: 'Sharding', exact: true }).click();
  await page.getByRole('link', { name: 'Timeouts', exact: true }).click();
  await page.getByRole('link', { name: 'TypeScript', exact: true }).click();
  await page.getByRole('link', { name: 'UI Mode', exact: true }).click();
  await page.getByRole('link', { name: 'Web server', exact: true }).click();
  await page.getByRole('heading', { name: 'Web server', exact: true }).click();
  await page.getByRole('link', { name: 'Test configuration' }).click();
  await page.getByRole('link', { name: 'Test use options', exact: true }).click();
  await page.getByRole('link', { name: 'Command line' }).click();
  await page.getByRole('link', { name: 'Fixtures' }).click();
  await page.getByRole('link', { name: 'Parameterize tests', exact: true }).click();
  await page.locator('body').press('Escape');
});
