module.exports={
    name:'ping',
    aliases:['pingpong','pings'],
    description:'Ping-Pong',
    execute(client, message, args){
        var yourping = new Date().getTime() - message.createdTimestamp
        var botping = Math.round(bot.ws.ping)

        message.channel.send(`PONG! Your ping: ${yourping} \nBots ping: ${botping}`)
    }
}