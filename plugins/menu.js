/* codded by raashii
reedited by hisham
use this git under copyright
dont change credit
*/

const Hisham= require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

Hisham.addCommand({pattern: 'menu', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
        r_text[0] = "itsmeadarsh.jpg";
       
    
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

if (config.FULLEVA == 'true') eva = 'On'
if (config.FULLEVA == 'false') eva = 'Off'
if (config.AUTOBİO == 'true') auto_bio = 'On'
if (config.AUTOBİO == 'false') auto_bio = 'Off'

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
