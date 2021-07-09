const memberCounter=require('/Users/alastair/Desktop/Personal Coding/YourBetterAssistant/counter/membercounter.js')
const Discord=require('discord.js')
const client=new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});
module.exports=(client)=>{
    console.log('logged into account')
    client.user.setPresence({
       activity: {
           status:'idle',
           name:'Helping People Since 2021',
           type:'WATCHING'
       }})
}

