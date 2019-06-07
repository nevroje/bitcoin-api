const axios = require("axios");

const getBitcoinValueApi = async () => {
  try {
    return await axios.get("https://api.livecoin.net/exchange/sellmarket");
  } catch (error) {
    console.log(error);
  }
};

const bitcoinValue = async () => {
    const bitcoin = await getBitcoinValueApi()
    if (bitcoin.data.message) {
        console.log(getBitcoinValueApi)
    }
}

export default getBitcoinValueApi;
