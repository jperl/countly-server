const { launch } = require("qawolf");
const selectors = require("../selectors/setup");

describe("setup", () => {
    let browser;

    beforeAll(async () => {
        browser = await launch({ url: process.env.URL });
    });

    afterAll(() => browser.close());

    it('can click "full_name" input', async () => {
        await browser.click(selectors[0]);
    });

    it('can type into "full_name" input', async () => {
        await browser.type(selectors[1], "Test Test");
    });

    it("can Tab", async () => {
        await browser.type(selectors[2], "↓Tab↑Tab");
    });

    it('can type into "email" input', async () => {
        await browser.type(selectors[3], "test@domain.com");
    });

    it("can Tab", async () => {
        await browser.type(selectors[4], "↓Tab↑Tab");
    });

    it('can type into "username" input', async () => {
        await browser.type(selectors[5], "test");
    });

    it("can Tab", async () => {
        await browser.type(selectors[6], "↓Tab↑Tab");
    });

    it('can type into "password" input', async () => {
        await browser.type(selectors[7], "Test1test$");
    });

    it("can Enter", async () => {
        await browser.type(selectors[8], "↓Enter↑Enter");
    });

    it('can click "Enter application name..." input', async () => {
        await browser.click(selectors[9]);
    });

    it('can type into "Enter application name..." input', async () => {
        await browser.type(selectors[10], "Test application");
    });

    it('can click "Choose application type" div', async () => {
        await browser.click(selectors[11]);
    });

    it('can click "Web" div', async () => {
        await browser.click(selectors[12]);
    });

    it('can click "Time Zone" div', async () => {
        await browser.click({ css: "#first-app-add-timezone" });
    });

    it("can type into input", async () => {
        await browser.type(selectors[14], "United");
    });

    it('can click "United Kingdom" div', async () => {
        await browser.click(selectors[15]);
    });

    it('can click "Populate app with random data for demo a..." label', async () => {
        await browser.click(selectors[16]);
    });

    it('can click "Add application" link', async () => {
        await browser.click(selectors[17]);
    });

    it('can click "Yes, populate data" div', async () => {
        await browser.click(selectors[18]);
    });

    it('can click "Stop Generating" link', async () => {
        await browser.click(selectors[19]);
    });

    it('can click "Continue" div', async () => {
        await browser.click(selectors[20]);
    });

    it('navigates to "Overview" page', async () => {
        await browser.hasText("TOTAL SESSIONS");
        await browser.hasText("TOTAL VISITORS");
    });
});
