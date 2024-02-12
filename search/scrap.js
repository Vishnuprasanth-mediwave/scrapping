const puppeteer = require("puppeteer");

// starting Puppeteer
const handleScrap = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com/?p=2");

  let scrapList = await page.evaluate(() => {
    const titleList = document.body.querySelectorAll(".athing");

    let list = [];

    titleList.forEach((titleElement) => {
      const parentTr = titleElement.closest("tr");
      const ageElement = parentTr.nextElementSibling.querySelector(".age");
      const utcTime = ageElement.title.trim();
      const ISTDate = new Date(ageElement.title);

      const data = {
        id: titleElement.id,
        title: titleElement.querySelector(".titleline a").innerText,
        link: titleElement.querySelector(".titleline a").href,
        date: utcTime,
      };
      list.push(data);
    });

    return list;
  });

  console.log({ scrapList });

  // closing the browser
  await browser.close();
  return scrapList;
};
module.exports = {
  handleScrap,
};
