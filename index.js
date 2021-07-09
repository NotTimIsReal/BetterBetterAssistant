const Discord=require('discord.js');
const client=new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});
require('dotenv').config();
const fs=require('fs');
const memberCounter=require('./counter/membercounter')
client.command=new Discord.Collection();
client.event= new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})
client.on('ready',()=>{
    console.log('logged into account')
    client.user.setPresence({
       activity: {
           status:'idle',
           name:'Helping People Since 2021',
           type:'WATCHING'
       }})
    

})


 





client.login(process.env.TOKEN)


