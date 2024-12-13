//Saleforce loggin Using Playwright with Typescript.

import { chromium, test } from "@playwright/test";             //Importing the test function from the root module.
test(`Test to launch the Saleforce site`, async () => {       //Naming Title and using async arrow function
     const browser = await chromium.launch({headless:false}); //Non headless mode
     const context = await browser.newContext();              // Creating the browser context
     const page = await context.newPage();                   // Creating a new page
    await page.goto("https://login.salesforce.com/");       // Loading the url
    const url = page.url();                                // Getting the url of the page
    console.log(`The url of the page is ${url}`);          // Printing the url of the page     
    console.log(`The title of the page is ${ await page.title()}`);    // Printing the title of the page
    await page.waitForTimeout(10000);                     // Time set for 10 sec
    await page.close();                                 // Close the page
    await context.close();                             //Close the browser context
    await browser.close();                            // Close the browser
    
})

