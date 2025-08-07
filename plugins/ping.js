const config = require('../config');
const { cmd, commands } = require('../command');

// Bot details
const botname = "your_name 𝙼𝙳";
const ownername = "your_name";

// Quoted object
const Supunwa = {
  key: {
    remoteJid: 'status@broadcast',
    participant: '0@s.whatsapp.net'
  },
  message: {
    newsletterAdminInviteMessage: {
      newsletterJid: 'your_gp_jid@newsletter', // your channel jid
      newsletterName: "MOVIE CIRCLE",
      caption: botname + ` 𝚅𝙴𝚁𝙸𝙵𝙸𝙴𝙳 𝙱𝚈 ` + ownername,
      inviteExpiration: 0
    }
  }
};

// PING COMMAND
cmd({
  pattern: "ping",
  alias: ["speed", "p"],
  use: '.ping',
  desc: "Check bot's response time.",
  category: "main",
  react: "⚡",
  filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
  try {
    const startTime = Date.now();
    await new Promise(resolve => setTimeout(resolve, 10)); // simulate delay
    const ping = Date.now() - startTime;

    let contextInfo = {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardingScore: 999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: 'your_gp_jid@newsletter', 
        newsletterName: "your_name ㋡",
        serverMessageId: 999
      },
      externalAdReply: {
        title: 'your_name-MD 👨‍💻',
        body: 'BOT STATUS | ONLINE ㋡',
        thumbnailUrl: "your_img_url",
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true
      }
    };

    // Send the ping response
    await conn.sendMessage(from, {
      text: `*your_name MD SPEED ➟ ${ping}ms*`,
      contextInfo
    }, { quoted: Supunwa });

  } catch (e) {
    console.error(e);
    reply(`An error occurred: ${e.message}`);
  }
});