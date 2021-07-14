module.exports={
    name:'say',
    aliases:'repeat',
    description:'ur mum',
    execute(client, message, args){
        if(!args[0]) return message.channel.reply('BRuh')
        msg=args.slice(0).join(" ")
        message.channel.send(msg)
    }

}