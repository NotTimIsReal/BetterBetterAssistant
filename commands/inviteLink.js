const Discord=require('discord.js')
module.exports={
    name:'inviteLink',
    aliases:['link','invite'],
    description:'Link for bot',
    execute(client, message, args){
        const embed= new Discord.MessageEmbed()
            .setTitle('InviteLink')
            .setFooter('YourBetterAssistant')
            .setURL('https://bit.ly/3hliGsX')
            .setColor('AQUA')
            
            
        message.channel.send(embed);
    }
}