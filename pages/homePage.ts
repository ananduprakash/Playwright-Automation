
import { Page } from "@playwright/test";

export default class HomePage {


    constructor(public page: Page) { }

    async addFirstProductToTheCart() {

        await this.page.locator('#widget-navbar-217834 > ul > li:nth-child(1) > a > div > span').click();

        this.page.waitForLoadState("domcontentloaded");

        await this.page.locator("#mz-product-listing-image-37213259-0-0 > div > div.carousel-item.active > img").hover();
        // await this.page.locator("#swiper-wrapper-d3c826ef4eef16a7 > div.swiper-slide.swiper-slide-active > div > div.product-thumb-top > div.product-action > button.btn.btn-cart.cart-107 > i")
        // .click();

    }
    // async isToastVisible() { 
    //     // await this.page.waitFor
    //     const toast = this.page.locator("//a[.='View Cart ']");
    //     await toast.waitFor({state:"visible"})
    //     return toast;
    // }
}
