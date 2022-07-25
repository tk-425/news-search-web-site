const express = require(`express`);
const creditsRouter = express.Router();
const getNews = require(`../controllers/getNews`).getNews;

const headlinesURL = `https://newsdata.io/api/1/news?apikey=${process.env.HEADLINES_API_KEY}&country=us&language=en`;

creditsRouter.get(`/`, async (_req, res) => {
  let headlinesNews;

  try {
    headlinesNews = await getNews(headlinesURL, `headlines`);

    res.render(`credits`, {
      headlines: headlinesNews,
    });
  } catch (err) {
    if (err.response) {
      console.error(err.response.data);
    } else if (err.request) {
      console.error(err.request.data);
    } else {
      console.error(`Error`, err.message);
    }
  }
});

module.exports = creditsRouter;
