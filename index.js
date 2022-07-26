  
const Discord = require('discord.js')
const bot = new Discord.Client()
 
const prefix = "do"

bot.login(process.env.BOT_TOKEN)
 
bot.on("ready", () => {
    console.log("Bejelentkezve: " + bot.user.tag)
    bot.user.setActivity("doggyhelp", { type: "WATCHING" })
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
        case "ggykick":
            if (!message.mentions.members.first()) { message.channel.send("Nem említettél meg senkit!"); return }
            if (!message.member.hasPermission("KICK_MEMBERS")) { message.channel.send("Nincs ehhez jogod!"); return }
            if (!message.mentions.members.first().kickable) { message.channel.send("Őt nem tudom kickelni!"); return }
            message.mentions.members.first().kick()
            message.channel.send("Kickelve!")
            break
        case "ggyban":
            if (!message.mentions.members.first()) { message.channel.send("Nem említettél meg senkit!"); return }
            if (!message.member.hasPermission("BAN_MEMBERS")) { message.channel.send("Nincs ehhez jogod!"); return }
            if (!message.mentions.members.first().bannable) { message.channel.send("Őt nem tudom bannolni!"); return }
            message.mentions.members.first().ban()
            message.channel.send("Bannolva!")
            break
        case "ggydelete":
            if (!args[1] || isNaN(args[1])) { db = 1 } else { db = Number(args[1]) }
            if (!message.member.hasPermission("ADMINISTRATOR")) { message.channel.send("Ehhez nincs jogod!"); return }
            message.channel.bulkDelete(db + 1)
            message.channel.send(db + " üzenet törölve!")
            break
        case "ggygv":
            if (!message.member.hasPermission("ADMINISTRATOR")) { message.channel.send("Ehhez nincs jogod!"); return }
            const gv = bot.channels.cache.find(channel => channel.id === "878973316646453258");
            const msgg = gv.send("**Nyereményjáték**\n\n__Nyeremény:__ Discord nitro 1 hónap\n__Véget ér:__ 2022.07.25\n\n**Reagálj az emotikonnal!**");
            const reactions = [];
            msgg.send
            reactions.push('🎉')
            break
        case "ggygvend":
            if (!message.member.hasPermission("ADMINISTRATOR")) { message.channel.send("Ehhez nincs jogod!"); return }
            const gvend = bot.channels.cache.find(channel => channel.id === "878973316646453258");
            gvend.send("**Vége a nyereményjátéknak!**\n\n**Nyertes:** <@656899126838951950>")
            break
        case "ggyhelp":
            message.channel.send("**Parancsok:\ndoggy (Az alap parancs)\ndoggykick [@név] [indok] (Kickel)\ndoggyban [@név] [indok] (Bannol)\ndoggydelete [mennyiség] (Üzenetet töröl)**")
            break
        default:
            message.channel.send("**Ismeretlen parancs! Parancsok listája: doggyhelp\nWeboldal: https://asdasd35.github.io/doggybot**")
            break
    }
})
