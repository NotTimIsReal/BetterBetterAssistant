require('dotenv').config()
module.exports=(Discord, client, message)=>{
    const prefix=process.env.PREFIX
    if(!message.content.startsWith(prefix)|| message.author.bot)return
    const args=message.content.slice(prefix.length).split(/ +/);
    const cmd=args.shift().toLowerCase
    const command=client.commands.get(cmd)
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