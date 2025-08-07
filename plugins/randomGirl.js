

const { cmd, commands } = require('../command')
const { fetchJson } = require('../lib/functions');
var cants = "I cant find this."

cmd({
    pattern: "china",
    react: '🌸',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.agatz.xyz/api/china`)
let wm = `🧧 Random china image

> *ᴘᴏᴡᴇʀᴅ ʙʏ  your_name : )*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "japan",
    react: '🌸',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.agatz.xyz/api/Japan`)
let wm = `🧧 Random japan image

> *ᴘᴏᴡᴇʀᴅ ʙʏ  your_name : )*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "indonesia",
    react: '🌸',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.agatz.xyz/api/indonesia`)
let wm = `🧧 Random indonesia image

> *ᴘᴏᴡᴇʀᴅ ʙʏ  your_name : )*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "vietnam",
    react: '🌸',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.agatz.xyz/api/vietnam`)
let wm = `🧧 Random vietnam image

> *ᴘᴏᴡᴇʀᴅ ʙʏ  your_name : )*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "korea",
    react: '🌸',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.agatz.xyz/api/korea`)
let wm = `🧧 Random korean image

> *ᴘᴏᴡᴇʀᴅ ʙʏ  your_name : )*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "malaysia",
    react: '🌸',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.agatz.xyz/api/malaysia`)
let wm = `🧧 Random malaysia image

> *ᴘᴏᴡᴇʀᴅ ʙʏ  your_name : )*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "thailand",
    react: '🌸',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.agatz.xyz/api/thailand`)
let wm = `🧧 Random thailand image

> *ᴘᴏᴡᴇʀᴅ ʙʏ  your_name : )*`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "asupan",
    react: '🌸',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.agatz.xyz/api/asupan`)
let wm = `🧧 Random asupan video

> *ᴘᴏᴡᴇʀᴅ ʙʏ  your_name : )*`
await conn.sendMessage(from, { video: { url: res.data }, caption: wm, ptv: true }, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});
cmd({
    pattern: "gore",
    react: '🌸',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await fetchJson(`https://api.agatz.xyz/api/gore`)
let wm = `🧧 Random gore video

*Title:* ${res.data.title}


> *ᴘᴏᴡᴇʀᴅ ʙʏ  your_name : )*`
await conn.sendMessage(from, { video: { url: res.data.video2 }, caption: wm, ptv: true }, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
});