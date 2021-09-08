/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const Asena = require('../events');
const {MessageType, MessageOptions, /* codded by raashii
use this git under copyright
dont change credit
*/

const Rashi = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

if (config.WORKTYPE == 'private') {

Rashi.addCommand({pattern: 'menu', fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://api.zeks.me/api/estetikpic?apikey=Raashii.life";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

if (config.FULLEVA == 'true') eva = ' ᴏɴ'
if (config.FULLEVA == 'false') eva = ' ᴏғғ'
if (config.AUTOBİO == 'true') auto_bio = ' ᴏɴ'
if (config.AUTOBİO == 'false') auto_bio = ' ᴏғғ'

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `╭──────────────────╮
   ` + config.BOTPLK + `
❍⊷═════『*ᴍᴇɴᴜ*』═════⊷❍
╔════════════════════❍
║⛀╭─────────────────⊷
║⛀│  ᴘᴏɪ  ᴜѕᴇʀ 
║⛀│      ` + wish + `
║⛀│     ᴛɪᴍᴇ - ` + time + `
║⛀│ 
║⛀│ ➫ *ᴅᴇᴠᴇʟᴏʟᴇʀ* : 𝟺ᴅ𝟺ʀ𝟻ʜ
║⛀│ ➫ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
║⛀│ ➫ *ᴠᴇʀѕɪᴏɴ* : 2.1
║⛀│ ➫ *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
║⛀│ ➫ *ᴀᴜᴛᴏ ʙɪᴏ* :  ` + auto_bio + `
║⛀│ ➫ *ᴘʀᴇғɪx* : *# / . !*
║⛀│ 
║⛀│    ▎▍▌▌▉▏▎▌▉▐▏▌▎
║⛀│    ▎▍▌▌▉▏▎▌▉▐▏▌▎
║⛀│       ©919495944164
║⛀│ 
║⛀│ ➫ *ᴏᴡɴᴇʀ* :` + config.PLK + `
║⛀╰─────────────────⊷
║⛀       *〚 ᴄᴏᴍᴍᴀɴᴅѕ⚚ 〛*
║⛂╭─────────────────⊷
║⛂├────〖 *ᴍᴇᴅɪᴀ* 〗
║⛂│
║⛂│➮ .ѕᴏɴɢ
║⛂│➮ .ᴠɪᴅᴇᴏ
║⛂│➮ .ɪɴѕᴛᴀ 
║⛂│➮ .ʏᴛ
║⛂│
║⛁├────〖 *ᴄᴏɴᴠᴇʀᴛ* 〗
║⛁│
║⛁│☛.ɢɪғ
║⛁│☛.ᴍᴘ3
║⛁│☛.ᴛᴛѕ
║⛁│☛.ɪᴍɢ
║⛁│☛.ѕᴛɪᴄᴋᴇʀ
║⛁│☛.ᴀᴛᴛᴘ
║⛁│☛.ᴛᴛᴘ
║⛁│☛.ᴘʜᴏᴛᴏ
║⛁│☛.2ɪᴍɢ
║⛃│
║⛃├───〖 *ᴍᴀᴋᴇʀ* 〗
║⛃│
║⛃│➣ .ᴍᴏʀᴇᴛxᴛ
║⛃│➣ .𝟸ᴍᴏʀᴇᴛxᴛ
║⛃│➣ .xᴍᴇᴅɪᴀ
║⛃│➣ .ᴍᴍᴘᴀᴄᴋ
║⛃│
║⛀├───〖 *ѕᴇᴀʀᴄʜ* 〗
║⛀│
║⛀│➢ .ᴡɪᴋɪ
║⛀│➢ .ʟʏʀɪᴄ
║⛀│➢ .ѕʜᴏᴡ
║⛀│➢ .ᴍᴏᴠɪᴇ
║⛀│➢ .ᴡᴇᴀᴛʜᴇʀ
║⛂│
║⛂├───〖 *ᴛᴀɢ* 〗
║⛂│
║⛂│✑ .ᴛᴀɢᴀʟʟ 
║⛂│✑ .ᴛᴀɢᴀᴅᴍɪɴѕ
║⛁│
║⛁├───〖 *ғᴜɴ* 〗
║⛁│
║⛁│➫ .ᴊᴏᴋᴇ
║⛁│➫ .ᴍᴇᴍᴇ
║⛁│➫ .ǫʀ
║⛁│➫ .ᴄʜᴀɴɢᴇѕᴀʏ
║⛁│➫ .ᴛʀᴜᴍᴘѕᴀʏ
║⛁│➫ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
║⛃│
║⛃├───〖 *ᴏᴛʜᴇʀ* 〗
║⛃│
║⛃│➮ .ᴀɴɪᴍᴇ
║⛃│➮ .ᴡᴀʟʟᴘᴀᴘᴇʀ
║⛃│➮ .ѕѕ
║⛃│➮ .ᴅɪᴄᴛ
║⛃│➮ .ѕʜᴏʀᴛ
║⛃│➮ .ᴛʀᴛ
║⛃│➮ .ʀᴇᴍᴏᴠᴇʙɢ
║⛀│
║⛀├──〖 *ᴏᴡɴᴇʀ ᴄᴍɴᴅѕ* 〗
║⛀│
║⛀│☞ .ғᴜʟʟᴇᴠᴀ 
║⛀│☞ .ᴀᴜᴛᴏʙɪᴏ
║⛀│☞ .ʙᴀɴ
║⛀│☞ .ᴀᴅᴅ
║⛀│☞ .ᴘʀᴏᴍᴏᴛᴇ
║⛀│☞ .ᴅᴇᴍᴏᴛᴇ
║⛀│☞ .ᴍᴜᴛᴇ
║⛀│☞ .ᴜɴᴍᴜᴛᴇ
║⛀│☞ .ɪɴᴠɪᴛᴇ
║⛀│☞ .ѕᴇᴛᴠᴀʀ
║   ╰───────────────⊷
╚═══════════════════❍
 © ᴄᴏᴅᴇᴅ ғʀᴏᴍ ᴢᴀʀᴀ ᴍᴡᴏʟ 
 ʀᴇᴄᴏᴅᴇᴅ ʙʏ ᴀᴅᴀʀѕʜ
`}) 

}));
}

else if (config.WORKTYPE == 'public') {

Rashi.addCommand({pattern: 'menu', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var rashi = await axios.get(config.RASHI, { responseType: 'arraybuffer' })
 
    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

if (config.FULLEVA == 'true') eva = ' ᴏɴ'
if (config.FULLEVA == 'false') eva = ' ᴏғғ'
if (config.AUTOBİO == 'true') auto_bio = ' ᴏɴ'
if (config.AUTOBİO == 'false') auto_bio = ' ᴏғғ'

    await message.sendMessage(Buffer(rashi.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `╭──────────────────╮
   ` + config.BOTPLK + `
❍⊷═════『*ᴍᴇɴᴜ*』═════⊷❍
╔════════════════════❍
║⛀╭─────────────────⊷
║⛀│  ᴘᴏɪ  ᴜѕᴇʀ 
║⛀│      ` + wish + `
║⛀│     ᴛɪᴍᴇ - ` + time + `
║⛀│ 
║⛀│ ➫ *ᴅᴇᴠᴇʟᴏʟᴇʀ* : 𝟺ᴅ𝟺ʀ𝟻ʜ
║⛀│ ➫ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
║⛀│ ➫ *ᴠᴇʀѕɪᴏɴ* : 2.1
║⛀│ ➫ *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
║⛀│ ➫ *ᴀᴜᴛᴏ ʙɪᴏ* :  ` + auto_bio + `
║⛀│ ➫ *ᴘʀᴇғɪx* : *# / . !*
║⛀│ 
║⛀│    ▎▍▌▌▉▏▎▌▉▐▏▌▎
║⛀│    ▎▍▌▌▉▏▎▌▉▐▏▌▎
║⛀│       ©919495944164
║⛀│ 
║⛀│ ➫ *ᴏᴡɴᴇʀ* :` + config.PLK + `
║⛀╰─────────────────⊷
║⛀       *〚 ᴄᴏᴍᴍᴀɴᴅѕ⚚ 〛*
║⛂╭─────────────────⊷
║⛂├────〖 *ᴍᴇᴅɪᴀ* 〗
║⛂│
║⛂│➮ .ѕᴏɴɢ
║⛂│➮ .ᴠɪᴅᴇᴏ
║⛂│➮ .ɪɴѕᴛᴀ 
║⛂│➮ .ʏᴛ
║⛂│
║⛁├────〖 *ᴄᴏɴᴠᴇʀᴛ* 〗
║⛁│
║⛁│☛.ɢɪғ
║⛁│☛.ᴍᴘ3
║⛁│☛.ᴛᴛѕ
║⛁│☛.ɪᴍɢ
║⛁│☛.ѕᴛɪᴄᴋᴇʀ
║⛁│☛.ᴀᴛᴛᴘ
║⛁│☛.ᴛᴛᴘ
║⛁│☛.ᴘʜᴏᴛᴏ
║⛁│☛.2ɪᴍɢ
║⛃│
║⛃├───〖 *ᴍᴀᴋᴇʀ* 〗
║⛃│
║⛃│➣ .ᴍᴏʀᴇᴛxᴛ
║⛃│➣ .𝟸ᴍᴏʀᴇᴛxᴛ
║⛃│➣ .xᴍᴇᴅɪᴀ
║⛃│➣ .ᴍᴍᴘᴀᴄᴋ
║⛃│
║⛀├───〖 *ѕᴇᴀʀᴄʜ* 〗
║⛀│
║⛀│➢ .ᴡɪᴋɪ
║⛀│➢ .ʟʏʀɪᴄ
║⛀│➢ .ѕʜᴏᴡ
║⛀│➢ .ᴍᴏᴠɪᴇ
║⛀│➢ .ᴡᴇᴀᴛʜᴇʀ
║⛂│
║⛂├───〖 *ᴛᴀɢ* 〗
║⛂│
║⛂│✑ .ᴛᴀɢᴀʟʟ 
║⛂│✑ .ᴛᴀɢᴀᴅᴍɪɴѕ
║⛁│
║⛁├───〖 *ғᴜɴ* 〗
║⛁│
║⛁│➫ .ᴊᴏᴋᴇ
║⛁│➫ .ᴍᴇᴍᴇ
║⛁│➫ .ǫʀ
║⛁│➫ .ᴄʜᴀɴɢᴇѕᴀʏ
║⛁│➫ .ᴛʀᴜᴍᴘѕᴀʏ
║⛁│➫ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
║⛃│
║⛃├───〖 *ᴏᴛʜᴇʀ* 〗
║⛃│
║⛃│➮ .ᴀɴɪᴍᴇ
║⛃│➮ .ᴡᴀʟʟᴘᴀᴘᴇʀ
║⛃│➮ .ѕѕ
║⛃│➮ .ᴅɪᴄᴛ
║⛃│➮ .ѕʜᴏʀᴛ
║⛃│➮ .ᴛʀᴛ
║⛃│➮ .ʀᴇᴍᴏᴠᴇʙɢ
║⛀│
║⛀├──〖 *ᴏᴡɴᴇʀ ᴄᴍɴᴅѕ* 〗
║⛀│
║⛀│☞ .ғᴜʟʟᴇᴠᴀ 
║⛀│☞ .ᴀᴜᴛᴏʙɪᴏ
║⛀│☞ .ʙᴀɴ
║⛀│☞ .ᴀᴅᴅ
║⛀│☞ .ᴘʀᴏᴍᴏᴛᴇ
║⛀│☞ .ᴅᴇᴍᴏᴛᴇ
║⛀│☞ .ᴍᴜᴛᴇ
║⛀│☞ .ᴜɴᴍᴜᴛᴇ
║⛀│☞ .ɪɴᴠɪᴛᴇ
║⛀│☞ .ѕᴇᴛᴠᴀʀ
║   ╰───────────────⊷
╚═══════════════════❍
 © ᴄᴏᴅᴇᴅ ғʀᴏᴍ ᴢᴀʀᴀ ᴍᴡᴏʟ 
 ʀᴇᴄᴏᴅᴇᴅ ʙʏ ᴀᴅᴀʀѕʜ
`}) 

}));
}
} = require('@adiwajshing/baileys');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();


    r_text[0] = "https://ibb.co/kgs7J8Z";


    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '⛦━━━━━✨️Saidali✨️━━━━━⛦\n𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 SOPHIA 𝐛𝐨𝐭.\n            *SOPHIA*\n■□■□■□■□■□■□■□■□■□■□\n♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -song <text>\n👻𝙐𝙨𝙚➜ Downloads song for you.\n🤖.song  baby love\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -video <yt link>\n👻𝙐𝙨𝙚➜ Downloads video from YouTube link.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -insta <link>\n👻𝙐𝙨𝙚➜   Downloads content from instagram.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -yt<text>\n👻𝙐𝙨𝙚➜   Gives you YT links.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -show <show name>\n👻𝙐𝙨𝙚➜   Get info related to tv series and shows.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -gif \n👻𝙐𝙨𝙚➜ Converts video to gif.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -tomp3 \n👻𝙐𝙨𝙚➜ Converts video into audio.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -say <text>\n👻𝙐𝙨𝙚➜ Converts text into voice.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -img <text>\n👻𝙐𝙨𝙚➜ It sends image from google.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trt <language code>\n👻𝙐𝙨𝙚➜ Translate the text you tag.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wiki <text>\n👻𝙐𝙨𝙚➜ It sends Wikipedia result.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -lyric <text>\n👻𝙐𝙨𝙚➜ Finds the lyrics of the song.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -covid <country code>\n👻𝙐𝙨𝙚➜ Send the covid stats of your country.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -weather <city>\n👻𝙐𝙨𝙚➜ Tells you about the weather of your place.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -removebg \n👻𝙐𝙨𝙚➜ Removes the background of tge image.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ocr\n👻𝙐𝙨𝙚➜ Finds the text written on the image.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wallpaper\n👻𝙐𝙨𝙚➜ It sends you random wallpaper.\n■□■□■□■□■□Sophia■□■□■□■□■□\n♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -joke \n👻𝙐𝙨𝙚➜ It sends a random joke.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -meme <text>\n👻𝙐𝙨𝙚➜ Cations the image into a meme.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -quote \n👻𝙐𝙨𝙚➜ It sends a random quote.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ss <website link>\n👻𝙐𝙨𝙚➜ It sends the screenshot of the website.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -changesay <text>\n👻𝙐𝙨𝙚➜ Converts text into changesay meme image.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trumpsay\n👻𝙐𝙨𝙚➜ Convert text into Trumps tweet.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -compliment \n👻𝙐𝙨𝙚➜ Gives you a compliment.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -bitly <link>\n👻𝙐𝙨𝙚➜   Shorten your link.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -dict \n👻𝙐𝙨𝙚➜   Dictionary [-dict en;anime]\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -zodiac <leo> \n👻𝙐𝙨𝙚➜   Tells you about your horoscope.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -qr <text>\n👻𝙐𝙨𝙚➜   Converts text into qr code.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -movie \n👻𝙐𝙨𝙚➜  Gives you info about movie.\n🤖movie lusifer\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -anime <text>\n👻𝙐𝙨𝙚➜  Gives you info about anime.\n🤖anime Sophia\n■□■□■□■□■Sophia□■□■□■□■□■□\n♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sticker \n👻𝙐𝙨𝙚➜ Converts img/gif into a sticker.\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -photo\n👻𝙐𝙨𝙚➜ Converts sticker into image.\n\n🤡Command➡logo\n👻Use➡ GIVE COMMENDS OF SOME TEXT TO IMAGE FEATURES\n\n🤡COMMAND➡-pubg <text>\n🤖.pubg sophia\n👻USE➡ Convert Text into pubg theamed logo\n\n🤡Command➡ -freefire <text>\n🤖.freefire Sophia\n👻Use➡ Convert Text into FREE FIRE themed LOGO\n\n🤡Command ➡-sophia <text>\n🤖.sophia ichu\n👻Use➡ Converts text into glitch logo\n\n🤡Command➡ -owner\n👻Use➡ know About git owner\n\n🤡Command➡ -git\n👻Use➡ Get git link\n\n🤡𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -attp <text>\n👻𝙐𝙨𝙚➜ Converts text into glowing sticker.\n🤖ex  attp Sophia\n■□■□■□■□■□■□■□■□■□■□\n═════💢Sophia💢═════\n▣▣▣▣▣▣▣▣▣Hisham-Muhammed▣▣▣▣▣▣▣▣▣▣▣'}) 

}));
