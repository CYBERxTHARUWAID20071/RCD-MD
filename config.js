//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJNRVNYdlQ4ZDZuQTZ2QlU0a3ZlYzhsbTJQSEZEV2dKalZtbWtjbG0wTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2VoQjBOMTJoSnQ3NUF4NnVUbVdhVHFvSUdodno1amE4WXFVUnFMZWVWUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q1BONHFLaDRRTUo0T1pxdFB0NG9hLzEwb05Jd0hBVFZlSWowL3Z2L0VzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzOFFVVnZxZ1RWZlFEYkJQaVEwOXg4WUs4UmxFemM5QTk0NlRTVjM2Um5vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFU3NxM3FDYnB2QXp3YjIyRUVvVy83akhMdE5DNUdkcUtQaTdpZ3RTV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk5QmFIb2hXeWR5WHJCL1JSQnZBMGRhNVU1WjNkWEI3U2pFR2RiS2hPbW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUV6Y1hkOC9aL0Z2elRvSjZKZXdIQm9ZNzlXNXBJSXd5MWpWZnI5bVNGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzVSK1A0WGFpTXhYOVMvVnREVUppbU1hbUxqMU91THBDUnh4OXFXS2VVND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ1ZU5GM1JEaUpZV3RrZjRXRE1kNHNmMlBJNnRha0xISzJibi84UVZIeTU1anM4TEFJQkdnVnllK2ZUdTBKRjNRd2xsTkFpbUlnY1FtWHl1ZGlBYUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6ImdQaDc4dFAwWE10M1VmZHhacjhzV2txNGRRM2ZjbklXTnFNZHBmenZPSXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkwxbERQUGFtU2plX21OcjdGdG9RRkEiLCJwaG9uZUlkIjoiOTJiNWVlODQtZWFhOS00M2RjLTk4ODEtMDEzMTU2YWZmMjBlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE4ZGt0ZUMxWllKNXRIaVlPa3o4c21Kdllmaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRzJSRTdXZG9aMTQxQ1h2TkN1b1BFRzRueGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUU1QNkhRM0UiLCJtZSI6eyJpZCI6Ijk0NzE2ODQ2NjE2OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iu+8o++8ue+8ou+8pe+8siDvvLgg77y077yo77yh77yy77y177y377yhIO+8qe+8pCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3FieE1VSEVJVGF2N2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic1dteDhMQ3lrOGhHVW9JczZsKzEwT28zSzU2M3Npd3RlWTQrNjlyQUlVMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoicDJ3VFdGNGJyN2hydzJVUUs2Lyt5dUdKbzR5bU4wWWtuUzJwTEFndkRKK2R4MUxiREUzOEJsVUNIaHFud0k5WDZ1R1JKYXBjMVhZVGZPcVhqRmNsQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InZaNnJzV0FhKzNWZUpLb05rSWdvTitmcWRxaXV6VUF6NFIwNms0NEQ4dHZWelpvMkRhV0lVRDVCVGlIcHZCMGt1cSsyRU5CK2xFOHd6WHUweHU2b0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTY4NDY2MTY6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkZwc2ZDd3NwUElSbEtDTE9wZnRkRHFOeXVldDdJc0xYbU9QdXZhd0NGTiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTE5NDEyOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGWjkifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94716846616";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || ".",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "ＣＹＢＥＲ ｘ ＴＨＡＲＵＷＡ ＩＤ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
