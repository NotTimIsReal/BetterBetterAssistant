var Scraper = require('images-scraper');
const Discord=require('discord.js')

const google = new Scraper({
    puppeteer: {
      headless: true,
      executablePath: '/usr/bin/chromium-browser',
    },
  })


module.exports={
    name:'image',
    cooldown:10,
    aliases:['img','searchimage'],
    description:'name an image and I will send it',
    async execute(client, message, args){
        const image_query=args.join(' ')
        if(!image_query) return message.channel.send('Bruh what is the argument ')
        const image_results=await google.scrape(image_query, 1)
        console.log(image_results[0].title)
        let embed=new Discord.MessageEmbed()
        .setTitle(image_results[0].title)
        .setURL(image_results[0].url)
        .setImage(image_results[0].url)

        message.channel.send(embed)
    }
}
