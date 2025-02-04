// Fetch live Binance AI token price
async function fetchTokenPrice() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd");
        const data = await response.json();
        document.getElementById("tokenPrice").innerText = `$${data.binancecoin.usd}`;
    } catch (error) {
        document.getElementById("tokenPrice").innerText = "Price Unavailable";
    }
}

// Simple AI Chatbot
function askChatbot() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    let response = "I didn't understand that. Try asking about Binance AI!";

    if (userInput.includes("price")) {
        response = "The Binance AI Token price is updated in the Market Data section.";
    } else if (userInput.includes("buy")) {
        response = "You can buy Binance AI on PancakeSwap. Click the 'Buy Now' button above!";
    } else if (userInput.includes("roadmap")) {
        response = "Binance AI Token is launching in multiple phases! Check the Roadmap section.";
    }

    document.getElementById("chatResponse").innerText = response;
}

// Run fetchTokenPrice function on page load
fetchTokenPrice();
