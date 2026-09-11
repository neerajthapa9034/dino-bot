require("dotenv").config();
const axios = require("axios");

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/dino-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/dino-bot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/dino-bot-ping - Check bot latency
/dino-bot-catfact - Get a cat fact`
  });
});

app.command("/dino-bot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});
app.command("/dino-bot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/dino-bot-weather", async ({ ack, respond, body }) => {
  await ack();

  try {
    const city = body.text.trim() || "Nepal";
    const apiKey = process.env.WEATHER_API_KEY;
    
    const response = await axios.get(
      `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
    );
    
    const weather = response.data.current;
    
    await respond({
      text:  `Temperature: ${weather.temp_c}°C\n💨 Wind: ${weather.wind_kph} km/h`
    });
    
  } catch (err) {
    await respond({ text: " Failed to fetch weather." });
  }
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();