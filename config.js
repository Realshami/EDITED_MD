const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~KMM9Rrowk36e2PL", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:https://cloud.mongodb.com/v2/68944db8f67657317229fe2d#",  //ඔයාගෙ mongoDb url එක
};
 
