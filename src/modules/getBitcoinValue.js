async function getBitcoinValueFromApiAsync() {
  try {
    const response = await fetch("https://api.livecoin.net/exchange/buymarket");
    const responseJson = await response.json();
    return responseJson.buymarket;
  } catch (error) {
    console.log(error);
  }
}
export default getBitcoinValueFromApiAsync;