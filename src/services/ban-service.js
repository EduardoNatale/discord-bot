/* eslint-disable no-restricted-syntax */
const skulls = ['818232496898572299', '818232654625112065', '818232673083719731'];
const words = ['fdp', 'caralho', 'puta', 'merda', 'fuder', 'bosta', 'b0sta', 'karol conká'];
const messages = ['Cuidado com as palavras digitadas, elas podem fazer você se arrepender', 'O retardado! Já te disse uma vez, não me faça repetir.', 'Seu filho da puta do caralho é o último aviso, seu bosta.'];

const ban = async (msg) => {
  const text = msg.content.toLowerCase().trim();

  let is2ban = false;
  for (const word of words) {
    is2ban = text.includes(word);
    if (is2ban) { break; }
  }

  if (is2ban) {
    let roleIndex = -1;

    for (const role of msg.member.roles.cache) {
      if (skulls.includes(role[0])) {
        roleIndex = skulls.indexOf(role[0]);
      }
    }

    if (roleIndex !== skulls.length - 1) {
      msg.author.send(messages[roleIndex + 1]);
      const role = msg.guild.roles.cache.get(skulls[roleIndex + 1]);
      msg.member.roles.add(role);
    } else {
      try {
        await msg.author.send('"Has Tela Vista baby", Arnold Schwarzenegger, 1991');
        await msg.member.ban({ days: 1, reason: 'Xingou mais de 3 vezes' });
      } catch (error) {
        await msg.author.send('Desculpa, não tiver poder suficiente');
      }
    }
  }
};

module.exports = ban;
