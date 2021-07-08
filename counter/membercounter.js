module.exports = async (client) =>{
    const guild = client.guilds.cache.get('849940401838096414');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('862564607292604447');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}
 