const Discord=require('discord.js')
module.exports={
    name:'embed',
    description:'Makes an embed for the member',
    execute(client, message, args){
        avatar=message.author.avatar
        //Webhook
        description=args[0-20]
        channel=message.channel
        channel.createWebhook(message.author, {
            avatar: avatar,
          }).then(console.log('Webhook Created '))
        embed=new Discord.MessageEmbed()
            .setTitle('embed')
            .setDescription(description);
       let webhook=channel.fetchWebhooks()
       .then(hooks => console.log(`This channel has ${hooks.size} hooks`))
       .catch(console.error);
       hook=webhook.first

        


        hook.channel.send(embed)
        
    }
}