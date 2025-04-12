/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBIdCtPaFl5RElkVzk1aDRYVGJBOTZPZENkYU8wNjhLNDRYRWswaGJWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTZOQTZBSHJDWC9yZ3QvUk9DNkU3TlNwSWFCRTBLWkN1MlcyS3dJQVMyWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBREpYSVRJdmlLMDhsL3dMNHM0a1ZBbmxpUS9sYlpLN1M4UUZHUmhjdzJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0cmgvRXZZd3JjOGJoM0VFd3dONTQrTTk2bDFqRHdvb0FtSzdPczYxK1QwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOVlo2UDIyeXl5VXMrZEJsR21laWJPelFYbE9oSVZWQkRJTnRCUkk5Vzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhnZFhKTlZoT3JQWHkvMG9Tb2M5MW5oTWoxSWVaNmN0YTg3SnVTbldhV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkprZFM0VkVqR3FvNkxNQWtoL0FRajEwRkUwUmhEMmRJLzY1cWdrVEZGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNyS1Z3VEtyczBuSHhmQ2JxRkVFd1d0Y1loTjJXeTROMi9SU2k3RGkzWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFyTHJTMFhuL0ZLV2FqOUZNQ0hXWDU0OFpEMCt4QytYdlRnVmdaVzVBODhvYzdnS1p2QkVHVjlOWHkya1FHYkU3ZUtUMlRvd3BFK3J3Vm9YSDZ0SUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJ1TW9PZzgwUlEzSUVvVU5DZVVETk5qUTBGQVR5S1pZOTN5WXRKRXU0SFl3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSWEo3aWtwTVJfcWQ2RXdrZVJQZkhBIiwicGhvbmVJZCI6IjRmYTM5YTIyLWM5NWUtNDExYy1hM2U5LTBjZWZhMDZjYmMyYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMVl0NEdpdUZTTlZvQTlwd2ZWaFI2WlpXa009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1nRldNeFUrN2pQbXZoUXRKVjFabjdveFhvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ0UFI2TVYxIiwibWUiOnsiaWQiOiIyNTQ3MTg4MzU5MzM6NjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVW5rbm93bnMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pUd3VzRUJFT3ZDNkw4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImU0QjFBbkw2bk1RWXJMUDQwSlY5d2FnbW9sWVY5TkF0RlY0ZWV2UitQQ289IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9KKzhVdndBZERJL2N0WUJxNHlMbE9xcDR6bGFWL1ZielI1WUFVWmpvWEpFazJUUk1mWXlBckROSDRHbk5mdXozOW0rN3lwTXFIb0RhZXpRcWNPNkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaa1JjbjhmdVZhdUt4dllWKy92Um9QdE1zWCsyaWFVODBLMFpOZjZDS0dzREhrWkNxZnRpNnZCb21oUGtPV2J2ZlVMTXRCSHFUL2F3QkhzM0ozb3JDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxODgzNTkzMzo2M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYdUFkUUp5K3B6RUdLeXorTkNWZmNHb0pxSldGZlRRTFJWZUhucjBmandxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ0NDQ1ODE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9NdiJ9';
const autobio = process.env.AUTOBIO || 'TRUE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'TRUE';
const prefix = process.env.PREFIX || '#';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'TRUE';
const mode = process.env.MODE || 'PRIVATE';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254114283550';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'TRUE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 for mkuu the big boss!';
const group = process.env.GROUP_ONLY_MSG || 'Iliterate nigga!';
const botAdmin = process.env.BOT_ADMIN_MSG || 'make me admin first!';
const NotOwner = process.env.NOT_OWNER_MSG || 'got to hell!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
