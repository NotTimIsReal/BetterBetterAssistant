const Discord=require('discord.js')
module.exports={
    name:'sudo',
    description:'Makes an embed for the member',
    execute(client, message, args){
        message.channel.delete
        const {sudo} = require('discord.sudo')
        const member = message.mentions.members.first()
        const msg = args.slice(1).join(" ")
        const sudoMessage = new sudo({
            setMessage: message,
            setText: msg, 
            setMember: member,
        })
        sudoMessage.start()
    }
}
