const { readEnv } = require('../lib/database');
const { cmd } = require('../command');

cmd({
    pattern: "setting",
    alias: ["set", "env"],
    react: "🪄",
    desc: "Show all environment variables and their values",
    category: "owner",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {
    if (!isOwner) return;

    try {
        const envVars = await readEnv();
        if (!envVars || Object.keys(envVars).length === 0) {
            return reply("🗣️ *No environment variables found in the database.*");
        }

        // Format the output
        const formattedVars = Object.entries(envVars)
    .map(([key, value], idx) => `*${idx + 1}. ${key}* ➠ ${value}`)
    .join('\n');

        reply(`😇 *තියෙන සෙටින් මෙහෙම වෙනස් කර ගන්න 👇*\n\n*🍃 පහල හැම සෙටින් එකම වෙනස් කරගන්න පුලුවන් මේ විදිහට.*\n\n*_උදා:-_*\n*.update OWNER_NAME: your_name 🎈*\n*.update BOT_NAME: your_name-BOT 🚀*\n*.update OWNER_REACT: true*\n*.update OWNER_EMOJI: 😁*\n*.update MODE: public*\n*.update AUTO_REPLY: false*\n*.update ALIVE_IMG: img url*\n*මේ විදිහට ඕන සෙටින් වෙනස් කරගෙන ඉවරවෙලා .restart කමාන්ඩ් එක ගහන්න, දාපු සෙටින් මාරු වෙන්න 😇*\n*_(true = ඔන් , fales = ඕෆ්)_*\n\n*දැන් තියෙන සෙටින් 👇*\n\n${formattedVars}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ your_name 👨‍💻*`);
    } catch (err) {
        console.error('Error fetching environment variables: ' + err.message);
        reply("🙇‍♂️ *Failed to fetch environment variables. Please try again.*");
    }
});
