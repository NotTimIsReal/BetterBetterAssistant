module.exports={
    name:'ping',
    description:'Ping-Pong',
    execute(client, message, args){
        message.channel.send('Pong =)')
    }
}