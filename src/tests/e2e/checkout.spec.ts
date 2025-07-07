// tests/e2e/checkout.spec.ts
import { test, expect } from '@playwright/test';

test('completes checkout flow', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Add Apple to cart/i }).click();
  await page.getByRole('link', { name: 'Shopping cart' }).click();
  await expect(page.getByText('Fresh Apple')).toBeVisible();
  await page.getByRole('button', { name: /Proceed to Checkout/i }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.getByText('Thank You for Your Order!')).toBeVisible();
});
