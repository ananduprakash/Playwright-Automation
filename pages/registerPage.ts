import { Page } from '@playwright/test';

export default class RegisterPage{
    constructor(public page){

    }
    async enterFirstName(firstname){
        await this.page.locator('#input-firstname')
        .type(firstname);
    }
    async enterLastName(lastname){
        await this.page.locator('#input-lastname')
        .type(lastname);
    }
    async enterEmail(email){
        await this.page.locator('#input-email')
        .type(email);
    }
    async enterTelephone(telephone){
        await this.page.locator('#input-telephone')
        .type(telephone);
    }
    async enterPassword(password){
        await this.page.locator('#input-password')
        .type(password);
    }
    async enterConfirmPassword(password){
        await this.page.locator('#input-confirm')
        .type(password);
    }
    async isSubscribeChecked(){
        await this.page.getByLabel('input-newsletter-no')
        .check();
    }
    async clickTermandConditon() { 
        await this.page.click("//label[@for='input-agree']")
    }

    async clickContinueToRegister() { 
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"networkidle"}),
            this.page.click("input[value='Continue']")
        ])
    }
}
