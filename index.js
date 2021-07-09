const Discord=require('discord.js');
const sudo=require('sudo-prompt')
const client=new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});
require('dotenv').config();
const fs=require('fs');

const prefix=process.env.PREFIX
const memberCounter=require('./counter/membercounter');
const { userInfo } = require('os');
//Stuff
client.command= new Discord.Collection();

const commandFiles=fs.readdirSync('./commands').filter(file=>file.endsWith('.js'));
for(const file of commandFiles){
    const command=require(`./commands/${file}`)
    client.command.set(command.name, command);
}
//Real stuff
client.on('ready',()=>{

    console.log('logged into account,bot is online')
    memberCounter(client)
    client.user.setPresence({
       activity: {
           status:'idle',
           name:'IN MAINTENANCE',
           type:'STREAMING',
           url:'https://google.com'
        
       }})
})
client.on('guildMemberAdd', member=>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  const embed= new Discord.MessageEmbed()
      .setTitle('Welcome!')
      .setDescription(`Welcome to the server, ${member}`)
      channel.send(embed);
  if (!channel){
      const channel=member.guild.channels.cache.find(ch => ch.name === 'general');
      const embed=Discord.MessageEmbed()
      .setTitle('Welcome!')
      .setDescription(`Welcome to the server, ${member}`)
      channel.send('Add a member-log channel with a!member-log-add')}
      channel.send(embed)
      }
      )


client.on('message',message=>{
    if(!message.content.startsWith(prefix)|| message.author.bot)return
    const args=message.content.slice(prefix.length).split(/ +/)
    const command=args.shift().toLowerCase();
    if(message.author.id===null)return message.channel.reply('ur blacklisted')
    if(command==='ping'){
        client.command.get('ping').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='ban'){
        client.command.get('ban').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='sudo'){
        client.command.get('sudo').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='invite'){
        client.command.get('inviteLink').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='kick'){
        client.command.get('kick').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='leave'){
        client.command.get('leave').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='mcserver'){
        client.command.get('mcserver').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='member-log-add'){
        client.command.get('member-log-add').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)

    }
    if(command==='clear'){
        client.command.get('clear').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='play'){
        client.command.get('play').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='reactionrole'){
        client.command.get('reactionrole').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
        
    }
    if(command==='coinflip'){
        client.command.get('coinflip').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)
    }
    if(command==='inviteLink'){
        client.command.get('inviteLink').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)}
    if(command==='link'){
        client.command.get('inviteLink').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)}
    if(command==='image'){
        client.command.get('image').execute(client, message, args)
        console.log(`The command ${prefix}${command} was used`)}
        
})
client.on('message', msg=>{
    if (msg.content.startsWith('a!sudo')){
        msg.delete({timeout:1000})
    }
})
    
            
    





client.login(process.env.TOKEN)


