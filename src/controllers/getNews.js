const axios = require(`axios`);
const UpdateDB = require(`./updateDB`);

const getNews = async (apiURL, fileName) => {
  let news;

  if (UpdateDB.checkFiles(fileName)) {
    news = UpdateDB.readJSON(fileName);
    return JSON.parse(news);
  } else {
    news = await axios.get(apiURL);
    const status = news.data.status;

    if (status === `success` || status === `ok`) {
      if (fileName !== undefined) {
        UpdateDB.writeJSON(news.data, fileName);
      }
      return news.data;
    } else {
      throw new Error(`No data from APIs`);
    }
  }
};

exports.getNews = getNews;
