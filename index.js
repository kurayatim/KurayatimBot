const {Snake} = require("tgsnake")
const pack = require('packagescrapers')
const { exec } = require("child_process");
const axios = require('axios')
const bot = new Snake({ 
  apiHash : String(process.env.api_hash), 
  apiId : Number(process.env.api_id), 
  botToken : String(process.env.bot_token) 
}) 
bot.run()

bot.hears("/start",(ctx)=>{
    ctx.reply("Welcome To Kurayatim Bot! This Bot Have Random Feature. Check /help to know bot commands")
})

bot.hears('/help', (ctx)=>{                                                                                                                                                                                                                                 
    ctx.reply('Command Menu\n/start -> start the bot\n/help -> to see command from bot\n/go -> search on google\n/img -> search image\n/ly -> search lyrics from genius.com\n/npm -> to search package at npmjs.com')
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

bot.command('npm', (msg)=>{
    let input = msg.text
     let inputArray = input.split(" ")
    inputArray.shift()
    pesan = inputArray.join(" ")
   pack.npm(pesan).then(ok => {
      const res = ok[Math.floor(Math.random() * (ok.length))]
        const title = res.title
        const link = res.link
    msg.reply(`Title: ${title} \nUrl: ${link}`)
   })
})

bot.command('sh', (ctx)=>{
    let input = ctx.text
     let inputArray = input.split(" ")
    inputArray.shift()
    pesan = inputArray.join(" ")
    exec(pesan, (error, stdout, stderr) => {
        if (error) {
            ctx.reply(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            ctx.reply(`stderr: ${stderr}`);
            return;
        }
        ctx.reply(`stdout: ${stdout}`);
    })
});

bot.command('sticker', (msg)=>{
    let input = msg.text
     let inputArray = input.split(" ")
    inputArray.shift()
    pesan = inputArray.join(" ")
    const headers = {
    'Content-Type': 'application/json',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    };
   axios.get('https://stickers-tele-api.xlaaf.repl.co/search?q='+pesan).then(bu => {
      const ok = res.data
      const res = ok[Math.floor(Math.random() * (ok.length))]
        const title = res.data.title
        const link = res.data.link
    msg.reply(`Sticker Name: ${title} \nUrl: ${link}`)
   })
})
