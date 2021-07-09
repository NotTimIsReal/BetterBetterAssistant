const Discord=require('discord.js');
const client=new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});
require('dotenv').config();
const fs=require('fs');
const prefix=process.env.PREFIX
const memberCounter=require('./counter/membercounter')

client.command=new Discord.Collection();
const command_files=fs.readdirSync('./commands/').filter(file =>file.endsWith('.js'));
for(const file of command_files){
    const command=require(`./commands/${file}`);
    if (command.name){
        client.command.set(command.name, command)
    }
}

client.on('ready',()=>{
    console.log('logged into account,online')
    memberCounter(client)
    client.user.setPresence({
       activity: {
           status:'idle',
           name:'Helping People Since 2021',
           type:'WATCHING'
       }})


    

})

client.on('message', message=>{
    if(!prefix||message.author.bot)return
    const args=message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase
   if(command==='ping')client.command.get('ping').execute(client, message, args)
   if(command==='invite')client.command.get('inviteLink').execute(client, message, args)
   if(command==='invitelink')client.command.get('inviteLink').execute(client, message, args)
   if(command==='link')client.command.get('inviteLink').execute(client, message, args)
   if(command==='embed')client.command.get('embed').execute(client, message, args)
   if(command==='ban')client.command.get('ban').execute(client, message, args)
   if(command==='image')client.command.get('image').execute(client, message, args)
   if(command==='kick')client.command.get('kick').execute(client, message, args)
   if(command==='leave')client.command.get('leave').execute(client, message, args)
   if(command==='play')client.command.get('play').execute(client, message, args)
   if(command==='mcserver')client.command.get('mcserver').execute(client, message, args)
   if(command==='member-log-add')client.command.get('member-log-add').execute(client, message, args)
   if(command==='clear')client.command.get('clear').execute(client, message, args)
   if(command==='reactionroles')client.command.get('reactionroles').execute(client, message, args)
})


 





client.login(process.env.TOKEN)


