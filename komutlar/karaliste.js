  module.exports = {
  name:"karaliste",
  code:`
  $setGlobalUserVar[karaliste;evet;$mentioned[1]]
  $setGlobalUserVar[ksebep;$noMentionMessage;$mentioned[1]]
  
  \`$username[$mentioned[1]]#$discriminator[$mentioned[1]]\` Adlı Üyeyi \`$noMentionMessage\` Sebebi İle Kara Listeye Aldım
  $suppressErrors[]
  $onlyForIDs[$botOwnerID;$customEmoji[pcross] | Bu Komut Sahibime Özeldir]
  $onlyIf[$message[2]!=;$customEmoji[pcross] | Bakaaa Sebebini Yaz]
  `
}
 