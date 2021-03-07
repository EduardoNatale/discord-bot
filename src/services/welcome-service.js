const roleId = '707012360367505480';

global.discordClient.on('guildMemberAdd', (member) => {
  const message = `Seja bem vindo <@${member.id}>`;

  const role = member.guild.roles.cache.get(roleId);
  const channel = member.guild.channels.cache.find((c) => c.name.includes('bem-vindo'));

  channel.send(message);
  member.roles.add(role);
});
