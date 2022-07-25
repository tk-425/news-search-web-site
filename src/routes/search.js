const express = require(`express`);
const searchRouter = express.Router();
const dateRange = require(`../controllers/getDates`).dateRange;
const getNews = require(`../controllers/getNews`).getNews;

const headlinesURL = `https://newsdata.io/api/1/news?apikey=${process.env.HEADLINES_API_KEY}&country=us&language=en`;
const searchURL = `https://newsapi.org/v2/everything?q=`;
const searchParameters = `&language=en&${dateRange}&apiKey=${process.env.LATEST_API_KEY}`;

searchRouter.post(`/`, async (req, res) => {
  const search = req.body.search;
  let headlinesNews;
  let searchedNews;

  try {
    headlinesNews = await getNews(headlinesURL, `headlines`);
    searchedNews = await getNews(searchURL + search + searchParameters);

    res.render(`search`, {
      headlines: headlinesNews,
      searched: search,
      articles: searchedNews,
    });
  } catch (err) {
    res.render(`search`, { articles: null });

    if (err.response) {
      console.error(err.response.data);
    } else if (err.request) {
      console.error(err.request.data);
    } else {
      console.error(`Error`, err.message);
    }
  }
});

module.exports = searchRouter;
