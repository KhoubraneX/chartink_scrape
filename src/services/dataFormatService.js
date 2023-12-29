async function formatData(response) {
    try {
      let stockSymbols = [];
  
      for (let i = 0; i < response.length; i++) {
        let stock = response[i];
        stockSymbols.push(stock);
      }
  
      console.log(stockSymbols);
  
      const formattedResponse = {
        status: "success",
        msg: stockSymbols
      };
  
      return formattedResponse;
  
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

module.exports = { formatData };
