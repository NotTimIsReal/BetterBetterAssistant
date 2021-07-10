require('dotenv').config();
const Discord=require('discord.js');
const sudo=require('sudo-prompt')
const client=new Discord.Client({partials:["MESSAGE","CHANNEL","REACTION"]});
const fs=require('fs');

const myprefix=process.env.PREFIX
const token=process.env.PREFIX

const memberCounter=require('./counter/membercounter');
const { userInfo } = require('os');
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

  if (!channel){
      const channel=member.guild.channels.cache.find(ch => ch.name === 'general');
      const embed=Discord.MessageEmbed()
      .setTitle('Welcome!')
      .setDescription(`Welcome to the server, ${member}`)
      channel.send(embed, 'Add a member-log channel with a!member-log-add')}
      channel.send(embed)
      }
      
      )


client.on('message',message=>{
    let blacklist=['789325858758066236','778549220755898368']
    if(message.author.id===blacklist)return message.channel.send('Blacklist goes brr')
    if(!message.content.startsWith(myprefix)|| message.author.bot)return
    const args=message.content.slice(myprefix.length).split(/ +/)
    const cmd=args.shift().toLowerCase();
    const command=client.command.get(cmd)|| client.command.find(a=> a.aliases&& a.aliases.includes(cmd))
    //Good thing
    if(command){
        command.execute(client, message, args)
    }
    
        
})
client.on('message', msg=>{
    if (msg.content.startsWith('a!sudo')){
        msg.delete({timeout:1000})
    }
})

    
            
    





client.login(process.env.TOKEN)


