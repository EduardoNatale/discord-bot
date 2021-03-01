module.exports = (client) => {
  const channelId = "812072946402197526";
  const roleId = "707012360367505480";

  client.on("guildMemberAdd", (member) => {
    const message = `Seja bem vindo <@${member.id}>`;

    const role = member.guild.roles.cache.get(roleId);
    const channel = member.guild.channels.cache.get(channelId);

    channel.send(message);
    member.roles.add(role);
  });
};
