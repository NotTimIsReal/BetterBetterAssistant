const Discord=require('discord.js')
module.exports={
    name:'member-log-add',
    description:'Makes a channel called member-log',
    execute(message, args){
        message.guild.channels.create('member-log', {
            type: "text", //This create a text channel, you can make a voice one too, by changing "text" to "voice"
            permissionOverwrites: [
               {
                 id: message.guild.roles.everyone, //To make it be seen by a certain role, user an ID instead
                 allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY'], //Allow permissions
                 deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY','ADD_REACTIONS'] //Deny permissions
               }
            ],
          })
        message.channel.send('Channel Created')  
    
    }
}
