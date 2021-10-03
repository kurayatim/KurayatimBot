const {Snake} = require("tgsnake")//importing the modules.
const axios = require('axios')
const bot = new Snake({ // create new client. you can pass the options in tgsnake.config.js file.
  apiHash : "58d810fbe8e9532bba0e73644ed55e62", // get it from my.telegram.org
  apiId : 3719337, // get it from my.telegram.org
  botToken : "2003643779:AAH7cWpXq0r6HZAZqVdYrZBccMVcLfSWiio" // if you need login with user remove this and create session first. then paste your string session in field "session".
}) 
bot.run() // running client. 
// bot.generateSession() // enable this to generate session and disable the bot.run().

bot.hears("/start",(ctx)=>{
    ctx.reply("Welcome To Kurayatim Bot! This Bot Have Random Feature. Check /help to know bot commands")
})

bot.hears('/help', (ctx)=>{                                                                                                                                                                                                                                 
    ctx.reply('Command Menu\n/start -> start the bot\n/help -> to see command from bot\n/go -> search on google\n/img -> search image\n/ly -> search lyrics from genius.com')
})

bot.command('go', (ctx)=>{
    const input = ctx.text
    let inputArray = input.split(" ");
    inputArray.shift();
              pesan = inputArray.join(" ");  
    axios.get('https://apiapi.xlaaf.repl.co/search?q='+pesan)
    .then(res => {
         const me = res.data.data
         const hai = me[Math.floor(Math.random() * (me.length))] 
         const judul = hai.title
         const link = hai.link
         const desk = hai.desk
         ctx.reply(`Found From Keywords : ${pesan}\n${judul}\nUrl: ${link}\nDesc: ${desk}`)
       })
})

bot.command('img', (msg)=>{
    const input = msg.text
    let inputArray = input.split(" ");
    inputArray.shift();
              pesan = inputArray.join(" ");            
              axios.get('https://adadad.xlaaf.repl.co/cari?q='+pesan)
              .then(res => {
    const g = res.data.img
    msg.telegram.sendPhoto(msg.chat.id, g)
            })
})

bot.command('ly', (msg)=>{
    const input = msg.text
    let inputArray = input.split(" ");
    inputArray.shift();
              pesan = inputArray.join(" ");            
              axios.get('https://lyrics-api.xlaaf.repl.co/search?q='+pesan)
              .then(res => {
    const lt = res.data.data
    msg.reply(lt)
            })
})