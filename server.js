const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res, next) => {
    const quoteExpression = getRandomElement(quotes);
    res.send({ quote: quoteExpression });
});

app.listen(PORT, () => {
    console.log("The server has started");
});
