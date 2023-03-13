import { expect, test } from "@playwright/test";

test("Interact with frames", async ({ page }) => {

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No.of frames: " + allframes.length);

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Anandu");
    await frame.locator("input[name='lname']").fill("Prakash");

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("anandu@gmail.com")

    await frame.locator("input[name='fname']").fill("ANANDU");

    // const myFrame = page.frame("firstFr")
    // // if (myFrame != null) {
    // //     await myFrame.fill("", "")
    // // }
    // await myFrame?.fill("input[name='fname']", "Anandu")
    // await myFrame?.fill("input[name='lname']", "Prakash")

    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")


    // await page.waitForTimeout(3000);

})