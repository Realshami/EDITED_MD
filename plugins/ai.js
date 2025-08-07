

const {cmd , commands} = require('../command')
const axios = require("axios")

const GEMINI_API_KEY = "AIzaSyAbJ13Z_LacATtnDXrlVDn79BwGNLa4Hqk";  //REPLACE WITH YOUR API KEY OF GEMINI
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

cmd({
  pattern: "ai",
  react: '🤖',
  desc: "Ask anything to it your AI.",
  category: "convert",
  use: ".gemini *<Your Quoestion>*",
  filename: __filename
}, async (conn, mek, msg, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    const text = args.join(" ");
    if (!text) {
      return reply(`මට ඔබේ ප්‍රශ්නය කියන්න, මම පිලිතුරු ලබා දෙන්නම්..🙂`);
    }

    const prompt = `මම ${pushname}, මම අසන ප්‍රශ්න වලට සිංහලෙන් පිළිතුරු දෙන්න. ඔබේ නම YOUR AI. ඔබ WhatsApp AI Bot කෙනෙක්. ඔබ තරුණ කොල්ලෙක් කියල හිතල එම භාෂාවෙන් පිළිතුරු දෙන්න. Funny වෙන්න, ඔබ bot කෙනෙක් කියල හිතන්න බැරි විදිහට සැබෑ මනුස්සයෙක් කියල හිතන් පිළිතුරු දෙන්න. Use meaningful emojies, don't use English.
    [Bro = මචං, Bro = සහෝ, බං, Hi = අඩෝ, සිරාවට, එලම, Funny = ආතල්]
    මගේ ප්‍රශ්නය: ${text}`;

    const payload = {
      contents: [{
        parts: [{ text: prompt }]
      }]
    };

    const response = await axios.post(
      GEMINI_API_URL,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.data || !response.data.candidates || !response.data.candidates[0]?.content?.parts) {
      return reply("❌ YOUR AI පිළිතුරු ලබා ගැනීමට අසමත් විය. 😢");
    }
    
    const aiResponse = response.data.candidates[0].content.parts[0].text;
    await reply(`${aiResponse}`);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    reply("❌ ප්‍රශ්නය සැකසීමේදී දෝෂයක් ඇති විය. 😢");
  }
});
