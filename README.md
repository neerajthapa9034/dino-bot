Dino Bot

A Slack bot with multiple slash commands that fetches real-time data from external APIs and runs 24/7 on a Linux server.

Overview

Dino Bot is a Node.js application built with Slack Bolt Framework that provides multiple slash commands for entertainment and information. The bot uses Socket Mode for direct Slack connection and runs continuously on Nest Linux server with systemd service management.

Available Commands
Command	Description	Example
/dino-bot-ping	Check bot latency in milliseconds	/dino-bot-ping
/dino-bot-help	Show all available commands	/dino-bot-help
/dino-bot-catfact	Get a random cat fact	/dino-bot-catfact
/dino-bot-joke	Get a random joke	/dino-bot-joke
/dino-bot-weather	Get weather for any city	/dino-bot-weather London
Features
Multiple slash commands with instant responses
Real-time API integration (cat facts, jokes, weather)
Socket Mode for secure connection to Slack
Runs 24/7 on Nest Linux server
Systemd service with auto-restart on failure
Error handling for API failures
Environment variables for secure token management

Code Overview

The bot uses Slack Bolt Framework with Socket Mode connection. Each command is registered with app.command() and handles requests asynchronously.

Key dependencies:

@slack/bolt: Slack SDK for building bots
axios: HTTP client for making API requests
dotenv: Environment variable loader

Commands fetch data from:

catfact.ninja: Random cat facts
official-joke-api.appspot.com: Random jokes
api.weatherstack.com: Weather data

API Errors

Check API service is online and API key is correct. Verify city name spelling for weather command.

Resources
Slack Bolt Framework: https://slack.dev/bolt-js/
Slack API Docs: https://api.slack.com/docs
Weatherstack API: https://weatherstack.com/
Cat Facts API: https://catfact.ninja/
Joke API: https://official-joke-api.appspot.com/
Nest Server: https://nest.hackclub.com/
What I Learned
Slack API and Socket Mode implementation
Node.js asynchronous programming
External API integration with axios
Environment variables and security best practices
Linux systemd services for 24/7 deployment
Git and GitHub workflows
Error handling and graceful API failures
License

MIT License. Feel free to fork and modify.

Author

Neeraj Thapa GitHub: https://github.com/neerajthapa9034 Email: neerajthapa9034@gmail.com

Built for Stardance Challenge.
