const Discord = require('discord.js')
const bot = new Discord.Client()
 
const prefix = "do"
 
bot.on("ready", () => {
    console.log("Bejelentkezve: " + bot.user.tag)
    bot.user.setActivity("DOGGY", { type: "WATCHING" })
})
 
bot.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) { return }
 
    let args = message.content.substring(prefix.length).split(" ")
 
    switch (args[0]) {
        case "ggy":
            message.channel.send("https://cdn.portfolio.hu/articles/images-o/d/o/g/dogememe-444964.png")
            message.author.send("**#DOGE MEME**")
            break
        case "ggydm":
            let user = message.mentions.users.first()
            user.send("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n**Join the new giveaway server!**\nhttps://discord.gg/yNnQpHEn6S\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
            break
        default:
            message.channel.send("**Mindenki doggy-t a chatbe!**")
            break
    }
})
