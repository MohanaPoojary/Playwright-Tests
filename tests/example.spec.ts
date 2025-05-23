import { test, expect } from '@playwright/test';

test.describe("Home page", ()=> {
  test.beforeEach(async({page})=>{
    await page.goto("https://playwright.dev/docs/intro")
  })
  test("Should have correct metadata", async({page})=>{
    await expect(page).toHaveTitle("Installation | Playwright")

    await expect(page.getByRole("heading", {name: "Installation"})).toBeVisible()
  })

  test("check navigation", async({page})=>{
    await page.getByRole("link", {name: "Running Tests"}).click()

    await expect(page.getByRole("heading", {name: "Running and debugging tests"})).toBeVisible()
  })
})