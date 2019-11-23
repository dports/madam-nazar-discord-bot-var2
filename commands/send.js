const client = require("../index");
const { Attachment, RichEmbed } = require("discord.js");

module.exports = {
  name: "send",
  description: "Send messages as MadamNasar",
  execute(message, args) {

    if (message.channel.name==="nazar-bot-controller") {
        const chan = message.content.split(")")[0].replace("(", "");
        const corpus = message.content.split(")")[1];
        const channel = client.channels.find(
          "name",
          chan.replace("/send ", "")
        );
        if (corpus.includes("|")) {
            const embed = new RichEmbed()
              .setTitle(`Information`)
              .setDescription(corpus.split('|')[1]);
            channel.send(embed);
        } else {
          channel.send(corpus);
        }
    }
  }
};
