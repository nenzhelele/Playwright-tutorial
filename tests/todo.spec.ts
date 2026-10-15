import { test, expect } from '@playwright/test';

test('test-todo-sanity @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  //await expect(page.locator('H3')).toHaveText('todos');
   await expect(page).toHaveURL(/todomvc/);
  await expect(page).toHaveTitle(/TodoMVC/);
 
  
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Eat eggs');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('gym');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('study');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('drink water');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByTestId('todo-list')).toContainText('gym');
  await page.getByText('gym').click();
  await page.getByRole('listitem').filter({ hasText: 'gym' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-item-label')).toContainText('gym');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByText('study').click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByText('study').click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'Eat eggs' }).getByTestId('todo-item-toggle')).toBeVisible();
  await page.getByText('Eat eggs').click();
  await page.getByText('study').click();
  await page.getByText('drink water').click();
});