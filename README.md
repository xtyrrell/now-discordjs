# now-discordjs
A template for developing a discord.js bot to be deployed on ZEIT's free Now deployment platform.

## What is this?
If you're written a Discord bot, and want to run it on a Discord server, one option is to simply run it from your own computer. However, having to choose between keeping your PC running or letting your bot go offline isn't great.

A better option would be to deploy the bot to a remote platform where it can stay online 24/7 and operate independently of your own computer.

This project provides a template to deploy a bot written using the `discord.js` library to ZEIT's free [Now deployment platform](https://zeit.co/now).

Note that because this project is set up for bots written in JavaScript, you will probably struggle to get it working for a bot written in any other language. In that case, try deploying it through Heroku or glitch.com, or with a paid VPS like a DigitalOcean droplet.

# How to deploy your bot
Credits: parts of this guide are adapted from https://itnext.io/hosting-a-javascript-discord-bot-for-free-with-zeit-now-c140e27c6936.

## Clone this repository
To start off, clone this repository to a directory where you keep your projects
```bash
$ git clone https://github.com/ImFeelingDucky/now-discordjs.git && cd now-discordjs
```

## Set up Now
Make a ZEIT account at https://zeit.co/signup.

Next, set up Now on your computer. You can do this by either simply installing the Now command-line interface with
```bash
$ npm install --global now
```
or by [downloading the Now desktop app](https://zeit.co/download), which comes with a friendly GUI as well as the same command-line interface.

Finally, login to Now. Follow the prompts if you're using the desktop app, or run
```bash
$ now login
```
in your terminal and follow the instructions.

## Add your discord bot token
After setting Now up, you'll need to add your Discord bot's token to the project. Go to https://discordapp.com/developers/applications/, click on your bot's application, then click `Bot` in the Settings menu on the left, and copy your bot's 'token'.

Then run
```bash
$ now secrets add discord-token "PASTE_YOUR_TOKEN_HERE"
```

## Deploy
Now you can simply deploy your bot. Be careful not to have multiple bots running at the same time, which can be problematic.

```bash
$ now
```

If you've updated your bot and want to redeploy the new version, first delete the deployment of the bot currently running. You can do this with
```bash
$ now rm now-discordjs
```
where `now-discordjs` is the name of the current directory. There will be some downtime when you are in between deployments. Then redeploy with the new code:
```bash
$ now
```
