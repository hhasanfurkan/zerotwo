module.exports = {
  name:"karalisteçıkar",
  code:`
  $setGlobalUserVar[karaliste;hayır;$mentioned[1]]
  $setGlobalUserVar[ksebep;;$mentioned[1]]
  
  \`$username[$mentioned[1]]#$discriminator[$mentioned[1]]\` Adlı Üye Kara Listeden Çıkarıldı
  
  $suppressErrors[]
  $onlyForIDs[$botOwnerID;$customEmoji[pcross] | Bu Komut Geliştiricilerime Özeldir]
  $onlyIf[$message!=;$customEmoji[azerotwo] | Bakaaa Birini Etiketle]
  `
}
 