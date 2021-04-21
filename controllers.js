const rp = require("request-promise");

exports.coinMarketCap = async (req, res) => {
  const requestOptions = {
    method: "GET",
    uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    qs: {
      start: "1",
      limit: "5000",
      convert: "USD"
    },
    headers: {
      "X-CMC_PRO_API_KEY": "7b8dae59-91aa-430d-8276-b24a9024d6f4"
    },
    json: true,
    gzip: true
  };

  try {
    const res = await rp(requestOptions);

    res.status(200).json({
      res
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      ...err,
      error: err.message || err.toString(),
      statusCode: err.statusCode || 500
    });
  }
};
