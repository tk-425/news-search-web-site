const axios = require(`axios`);

const getNews = async (apiURL, fileName) => {
  let news = await axios.get(apiURL);
  const status = news.data.status;

  if (status === `success` || status === `ok`) {
    return news.data;
  } else {
    throw new Error(`No data from APIs`);
  }
};

exports.getNews = getNews;
