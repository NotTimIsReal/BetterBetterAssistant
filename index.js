require('dotenv').config();
const Discord=require('discord.js');
const mongoose=require('mongoose')
const profileModel=require('./models/profileSchema')
const client=new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});
const fs=require('fs');
let env=process.env

const myprefix=env.PREFIX
const token=env.PREFIX

const memberCounter=require('./counter/membercounter');
//Stuff 
client.command= new Discord.Collection();

const commandFiles=fs.readdirSync('./commands').filter(file=>file.endsWith('.js'));
for(const file of commandFiles){
    const command=require(`./commands/${file}`)
    client.command.set(command.name, command);
}
//Real stuff comment this out if ur not using unix

//Ready+
client.on('ready',()=>{
    const spawn=require('child_process').spawn;
    const process=spawn('python', ['./python/main.py'])
    process.stdout.on('data', data=>{
        console.log(data.toString());
    })


    console.log('logged into account,bot is online')
    memberCounter(client)
    client.user.setPresence({
       activity: {
           status:'online',
           name:'People since 2021',
           type:'WATCHING',
        
       }}).then(console.log('Presence has been set'))
})
client.on('guildMemberAdd',async member=>{
    let profile=await profileModel.create({
        userID:member.id,
            serverID:member.guild.id,
            coins:1500,
            bank:0,
    })
    profile.save()
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  const embed= new Discord.MessageEmbed()
      .setTitle('Welcome!')
      .setDescription(`Welcome to the server, ${member}`)

  if (!channel){
      const channel=member.guild.channels.cache.find(ch => ch.name === 'general');
      const embed=Discord.MessageEmbed()
      .setTitle('Welcome!')
      .setDescription(`Welcome to the server, ${member}`)
      channel.send(embed, 'Add a member-log channel with a!member-log-add')}
      channel.send(embed)
      }
      
      )

const cooldowns=new Map(); 
const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]
  


client.on('message',message=>{
    
    let blacklist=['789325858758066236','778549220755898368']
    if(message.author.id===blacklist)return message.channel.send('Blacklist goes brr')
    if(!message.content.startsWith(myprefix)|| message.author.bot)return
    const args=message.content.slice(myprefix.length).split(/ +/)
    const cmd=args.shift().toLowerCase();
    const command=client.command.get(cmd)|| client.command.find(a=> a.aliases&& a.aliases.includes(cmd))
    if(!command)return message.channel.send('That is an invalid command')
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection())
    }
    const current_time= Date.now();
    const time_stamps=cooldowns.get(command.name)
    const cooldown_amount=(command.cooldown)*1000
    if(time_stamps.has(message.author.id)){
        const expiration_time=time_stamps.get(message.author.id)+cooldown_amount
        if(current_time<expiration_time){
            const time_left=(expiration_time - current_time) / 1000
            const embed=new Discord.MessageEmbed()
            .setTitle('Cooldown')
            .setColor('#f093')
            .setDescription(`<@!${message.author.id}> you have ${time_left.toFixed(1)} seconds left `)
            return message.reply(embed)
        }
    }
    time_stamps.set(message.author.id, current_time)
    setTimeout(()=> time_stamps.delete(message.author.id), cooldown_amount)
    if(command.permissions){

        let invalidPerms = []
        for(const perm of command.permissions){
          if(!validPermissions.includes(perm)){
            return console.log(`Invalid Permissions ${perm}`);
          }
          if(!message.member.hasPermission(perm)){
            invalidPerms.push(perm);
          }
        }
        if (invalidPerms.length){
          return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
        }
      }
    //Good thing
    if(command){
        command.execute(client, message, args, cmd)
        console.log(`the command ${myprefix}${cmd}`)
    }

    
        
})
client.on('message', msg=>{
    if (msg.content.startsWith('a!sudo')){
        msg.delete({timeout:1000})
    }
})
client.on('message', msg=>{
    if (msg.content.startsWith('<@!862143828920369172>')){
        msg.channel.send('Help command is not here yet but here is the invitelink')
        msg.channel.send('https://dsc.gg/betterassistant')
    }
})
mongoose.connect(env.MONGODB_SRV,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false,

}).then(()=>{
    console.log('DB connected')
}).catch((err)=>{
    console.log(err)
})


    
            
    





client.login(process.env.TOKEN)


