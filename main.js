const { Client } = require("discord.js");
const bot = new Client();
const config = require("./config.json");

// im testing shit out so dont mind the bad code
bot.once("ready", () => console.log("logged in"));
bot.on("message", (msg) => {
  if (!msg.content.startsWith(config.prefix))
    return;

  let args = msg.content.slice(config.prefix.length).split(" ");
  let cmd = args[0].toLowerCase();
  console.log(args);
  console.log(cmd);

  if (cmd == "ping") {
    msg.reply("pong");
  }
});

bot.login(process.env.TOKEN);
