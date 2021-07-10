module.exports={
    name:'ping',
    aliases:['pingpong','pings'],
    description:'Ping-Pong',
    execute(client, message, args){
        message.channel.send('Pong =)')
    }
}