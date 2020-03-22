# now-discordjs
A template for developing a discord.js bot to deploy on ZEIT's free Now deployment platform.

## Quickstart
1. Clone this repository
2. Install and login to `now`
3. Add your Discord bot token secret to `now`
4. Build your bot
5. Deploy with `$ now`

## What is this?
If you've written a Discord bot, and want to run it on a Discord server, one option is to simply run it from your own computer. However, having to choose between keeping your PC running or letting your bot go offline isn't great.

A better option would be to deploy the bot to a remote platform where it can stay online 24/7 and operate independently of your own computer.

This project provides a template to deploy a bot written using the `discord.js` library to ZEIT's free [Now deployment platform](https://zeit.co/now).

Note that because this project is set up for bots written in JavaScript, you will probably struggle to get it working for a bot written in any other language. In that case, try deploying it through Heroku or glitch.com, or with a paid VPS like a DigitalOcean droplet.

# How to deploy your bot
Credits: parts of this guide are adapted from https://itnext.io/hosting-a-javascript-discord-bot-for-free-with-zeit-now-c140e27c6936.

## Step 1: Clone this repository
To start off, clone this repository to a directory where you keep your projects.
```bash
$ git clone https://github.com/ImFeelingDucky/now-discordjs.git && cd now-discordjs
```

## Step 2: Set up Now
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

## Step 3: Add your discord bot token
After setting Now up, you'll need to add your Discord bot's token to the project. Go to https://discordapp.com/developers/applications/, click on your bot's application, then click `Bot` in the Settings menu on the left, and copy your bot's 'token'.

Then run
```bash
$ now secrets add discord-token "PASTE_YOUR_TOKEN_HERE"
```

## Step 4: Build your bot
Have fun writing your bot! Consult https://discord.js.org/#/docs/main/stable/general/welcome for documentation, guides and examples on writing a bot.

This template includes ESM magic, so you can `import` rather than `require()` without any Node.js trickery. That means start building in `main.js` not `index.js`.

## Step 5: Deploy
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

Deployment scaling is already defined in the provided `now.json` so the bot will always be scaled to one instance (so that it never goes offline or has more than one copy active). It has been configured to deploy this one instance to the `bru1` region in Brussels, Belgium, but if Now [supports a region closer to you](https://zeit.co/docs/v1/features/scaling/#regions) which supports non-serverless deployments (`iad1` does not, so cannot be used, for example) you can redefine this to whatever region that is.

# Troubleshooting
- If `now` is refusing to deploy your bot, make sure you've got a now.json file specifying `"version": 1` in the project directory (this template provides one by default), and that you run `now` in the project directory.
