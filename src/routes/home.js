const express = require(`express`);
const homeRouter = express.Router();
const getNews = require(`../controllers/getNews`).getNews;

const headlinesURL = `https://newsdata.io/api/1/news?apikey=${process.env.HEADLINES_API_KEY}&country=us&language=en`;
const latestURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.LATEST_API_KEY}`;

homeRouter.get(``, async (_req, res) => {
  try {
    let headlinesNews;
    let latestNews;

    headlinesNews = await getNews(headlinesURL, `headlines`);
    latestNews = await getNews(latestURL, `latest`);

    // render home-page
    res.render(`home`, {
      headlines: headlinesNews,
      latest: latestNews,
    });
  } catch (err) {
    res.render(`home`, {
      headlines: null,
      latest: null,
    });
    console.error(`Error`, err.message);
  }
});

module.exports = homeRouter;
