const Discord=require('discord.js')
const profileData=require('../models/profileSchema')
module.exports={
    name:'balance',
    aliases:'bal',
    description:'Checks the balance of currency',
    execute(client, message, args){
        console.log(JSON.stringify(profileData.userID))


        let embed=new Discord.MessageEmbed()
        .setTitle('Balance')
        .addField(
            {name:'Coins Left', value:profileData.coins,inline:true},
            {name:'Bank', value:profileData.bank,inline:true},
            {name:'User',value:`<@!${profileData.userID}>`}
        )
        message.channel.send(embed)

    }
}