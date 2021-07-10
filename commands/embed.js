const discord=require('discord.js')
module.exports={
    name:'embed',
    description:'Go figure',
    execute(client, message, args){
        if (!args[0])return message.channel.send('What am I saying?')
        let msg=args.slice(0).join(" ")
        let embed=new discord.MessageEmbed()
        .setTitle('Embed')
        .setDescription(msg)
        .setColor('#f093')
        message.channel.send(embed)
    
    }

}