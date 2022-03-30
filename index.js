const Discord = require("discord.js")
const intents = new Discord.Intents()
const client = new Discord.Client({ intents: 32767 })


client.on("messageCreate", function(message) {
    console.log("Bot Ecendido")
})

client.login("OTU4MDgyNDcwNDg4NzMxNzE5.YkIJ1Q.R8MqicqGop744OVXo4vwe2nBiBs")