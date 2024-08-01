const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237690600986";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_54_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMxLFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc5LFxuICAgICAgICA3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI3LFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjdjNlb2ViRitPTlkvd1Q2TmNsMUNIaFNBUjIxV1NKRGI2bXo5bytvZXVvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzcXl4QkNFTVJHbWs1UDdQel9kVGJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFmYTljMzM4LTcwNjUtNGE5ZS1iODQyLTE0MWRiNzJkZGU4OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDk0LFxuICAgICAgMjUyLFxuICAgICAgNzcsXG4gICAgICA5NixcbiAgICAgIDIyMSxcbiAgICAgIDE5MCxcbiAgICAgIDE1OCxcbiAgICAgIDI1LFxuICAgICAgOTcsXG4gICAgICAyMzAsXG4gICAgICA0NixcbiAgICAgIDcsXG4gICAgICAxNDEsXG4gICAgICA0OCxcbiAgICAgIDQ1LFxuICAgICAgMjMzLFxuICAgICAgNDYsXG4gICAgICAxNTMsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMjMxLFxuICAgICAgNyxcbiAgICAgIDExOCxcbiAgICAgIDEzMixcbiAgICAgIDg0LFxuICAgICAgNTcsXG4gICAgICAyMTcsXG4gICAgICAxMzksXG4gICAgICAxNzIsXG4gICAgICAyMDgsXG4gICAgICAxNDAsXG4gICAgICAxNTksXG4gICAgICAxOTEsXG4gICAgICAzNSxcbiAgICAgIDExLFxuICAgICAgNzcsXG4gICAgICAxMTgsXG4gICAgICAyMjYsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01PUWliMEVFS1REcnJVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlVQT0J1KzhGdWpJc0gzZCs4elYrTUFlUFZ4SGdiUElUMUxHUEJZTHpSRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5REhkYWFxdjRGdExMemtkTW1KbUxmSm94QndPOWM4cU1DL3E4cGplRTdscUtGQ1ZmL2Z4Y05zc2NhK1owMHZLWm9FVDZ3dnpxUTJDS2hVUXRIejhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVV1oweDFqTG1hZDYvQ1V3MmZlZHNGOHhzd1Rsd25OOU9YOXljM0FDWU1rbHQ1UXNpSlZvanh1RXFFdysxWGN6ZURaL0hXQ29CUUljS0RlNDRXcEFodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5MDYwMDk4NjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg4MTQ5NzgzMzkyNDYzOjE1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjkwNjAwOTg2OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUyNDA3MlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "asiinformatique",
  ownername:process.env.OWNER_NAME|| "karell franklin TAMBEU DEFO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
