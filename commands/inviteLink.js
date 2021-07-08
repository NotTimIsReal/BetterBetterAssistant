const Discord=require('discord.js')
module.exports={
    name:'inviteLink',
    description:'Link for bot',
    execute(message, args){
        const embed= new Discord.MessageEmbed()
            .setTitle('InviteLink')
            .setFooter('YourBetterAssitant')
            .setURL('https://bit.ly/3hliGsX')
            .setColor('AQUA')
            
            
        message.channel.send(embed);
    }
}