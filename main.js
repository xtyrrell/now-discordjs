import Discord from 'discord.js'
import secrets from './secrets'

const client = new Discord.Client()

client.once('ready', () => console.log(`Logged in as ${client.user.tag}.`))
client.on('message', msg => msg.content.toLowerCase() === '!ping' && msg.reply('Pong!'))

client.login(secrets.token || process.env.token)
