const Discord= require('discord.js')
const util=require('minecraft-server-util')

module.exports={
    name:'mcserver',
    description:'searches the server up',
    execute(client, message, args){
        if (!args[0])return message.channel.send('the server ip mate')
        if(!args[1])return message.channel.send('and the port(normally 25565)')
        util.status(args[0], {port: parseInt(args[1])}).then((response)=>{
            const embed= new Discord.MessageEmbed()
            .setTitle('MC SERVER RESULTS!')
            .addFields(
                {name:'Server IP', value: response.host},
                {name:'Players Online', value:response.onlinePlayers},
                {name:'Version Required', value:response.version},
                {name:'Description', value:response.description},
                {name:'Max Players', value:response.maxPlayers}
                
                
            )
            message.channel.send(embed)

        }).catch((error)=>{
            message.channel.send('Something Happened')
            throw error;
        })

    }
}