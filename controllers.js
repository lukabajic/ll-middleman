const rp = require("request-promise");

exports.coinMarketCap = async (req, res) => {
  const requestOptions = {
    method: "GET",
    uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest",
    qs: {
      slug: "ethereum,liquity"
    },
    headers: {
      "X-CMC_PRO_API_KEY": "7b8dae59-91aa-430d-8276-b24a9024d6f4"
    },
    json: true,
    gzip: true
  };

  try {
    const result = await rp(requestOptions);

    res.status(200).json({
      result
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      ...err,
      error: err.message || err.toString(),
      statusCode: err.statusCode || 500
    });
  }
};
