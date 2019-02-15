import Discord from 'discord.js'

const client = new Discord.Client()

client.once('ready', () => console.log(`Logged in as ${client.user.tag}.`))
client.on('message', msg => msg.content.toLowerCase() === '!ping' && msg.reply('Pong!'))

// You must have added your Discord application client token as an environment
// variable called 'TOKEN'. You should do this by adding this token as a Now secret
// with `$ now secrets add discord-token "mysecretdiscordtoken"` and making sure your now.json
// exposes this secret as an environment variable called `TOKEN`. Example now.json snippet:
// "env": {
//     "TOKEN": "@discord-token"
// }
client.login(process.env.TOKEN)

// This lets Now know that we want this program to continue running and not
// just execute once then terminate.
require('http').createServer().listen(3000)

