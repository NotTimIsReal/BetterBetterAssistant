const Discord=require('discord.js');
const client=new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});
require('dotenv').config();
const prefix=process.env.PREFIX
const fs=require('fs');
const memberCounter=require('./counter/membercounter')

client.command=new Discord.Collection();
const commandFiles=fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'));
for(const file of commandFiles){
    const command=require(`./commands/${file}`)
    client.command.set(command.name, command);
}


 

client.on('ready', ()=>{
     console.log('logged into account')
     memberCounter(client)
     client.user.setPresence({
        activity: {
            status:'idle',
            name:'Helping People Since 2021',
            type:'WATCHING'
        }})
    
})
client.on('guildMemberAdd', member => {
    
    // Send the message to a designated channel on a server:
    let channel = member.guild.channels.cache.find(ch => ch.name === 'member-log' );
    // Do nothing if the channel wasn't found on this server
    if (!channel) {
        let channel = member.guild.channels.cache.find(ch => ch.name === 'general' )
        const embed= new Discord.MessageEmbed()
        .setTitle('Welcome!')
        .setDescription(`Welcome to the server, ${member}.`)
    // Send the message, mentioning the member
        channel.send(embed,'Next Time add a #member-log channel for my conveniance with a!member-log-add');

    }

    

            

    

    const embed= new Discord.MessageEmbed()
        .setTitle('Welcome!')
        .setDescription(`Welcome to the server, ${member}.`)
    // Send the message, mentioning the member
    channel.send(embed);
  });
client.on('message', message=>{
    const guild = new Discord.Guild();
    if(!message.content.startsWith(prefix)||message.author.bot)return;
    const args=message.content.slice(prefix.length).split(/ +/);
    const command= args.shift().toLowerCase();
    if(message.author.bot)return
    if(command==='invitelink'){
        client.command.get('inviteLink').execute(message, args)
        console.log(guild.name)
    } 
    if(command==='ping'){
        client.command.get('ping').execute(message, args)
    }
    if(command==='invite'){
        client.command.get('inviteLink').execute(message, args)
    } 
    if(command==='link'){
        client.command.get('inviteLink').execute(message, args)
    } 
    if(command==='play'){
        client.command.get('play').execute(message,args)
    }
    if (command==='leave'){
        client.command.get('play').execute(message, args)
    }
    if(command==='kick'){
        client.command.get('kick').execute(message, args)
    }
    if(command==='ban'){
        client.command.get('ban').execute(message, args)}
    if (command==='clear'){
        client.command.get('clear').execute(message, args)
    }
    if (command==='member-log-add'){
        client.command.get('member-log-add').execute(message, args)
        console.log('Channel Created')
    }
    if (command==='embed'){
        client.command.get('embed').execute(message, args)

    }
    if(command==='reactionroles'){
        client.command.get('reactionrole').execute(message, args, Discord, client);
    }
    if (command==='leave'){
        client.command.get('leave').execute(message, args)
    }
    if (command==='image'){
        client.command.get('image').execute(client, message, args)
    }
    if(command==='mcserver'){
        client.command.get('mcserver').execute(client, message, args)
    }

}
)





client.login(process.env.TOKEN)