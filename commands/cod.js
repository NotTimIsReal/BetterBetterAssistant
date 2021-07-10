require('dotenv').config()
const Discord=require('discord.js')
const cod_api=require('call-of-duty-api')
const username=process.env.CODUSER
const password=process.env.CODPASS
module.exports={
    name:'cod',
    aliases:['callofdutystats','callofduty'],
    description:'cod stats',
    async execute(client, message, args){
        if (!args[0]) return message.channel.send('who is the player');
        if(!args[1])return message.channel.send("What's the platform? xbox,ps,steam or battle?")
        try{
            await cod_api(username, password)
            let data =await cod_api.CWmp(args[0], args[1])
            let codData=data.lifetime.all.properties
            const embed=new Discord.MessageEmbed()
            .setTitle('COD STATS')
            .addField({
                name:'Games Played', value:codData.totalGamesPlayed,inline:true},
                {name:'Wins', value:codData.wins,inline:true},
                {name:'Loses', value:codData.Losses, inline:true},
                {name:'KDR', value:codData.kdratio, inline:true},
                {name:'Kills', value:codData.kills, inline:true},
                {name:'Deaths',value:codData.deaths},
                {name:'Longest Kill Streak', value:codData.longestKillStreak},
                {name:'Time Played', value:codData.timePlayedTotal})
            .setFooter('Pls Donate')
            message.channel.send(embed)



            
            console.log(data.lifetime.all.properties)
        }catch(error){
            message.channel.send('Um error')
            throw error
        }
    }
}