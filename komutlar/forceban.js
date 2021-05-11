module.exports = {
  name:"forceban",
  code:`
  $suppressErrors[$customEmoji[pcross] | Böyle Bir IDli Kullanıcı Bulamadım Tekrar Kontrol Edermisin !?]
  $ban[$message[1];$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10]]
 $customEmoji[ztban] \`$username[$message[1]]#$discriminator[$message[1]]\` Adlı Üye Sunucudan Force-Ban İle Yasaklanmıştır 
  $onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross] | Bu Bir ID Değil Benimi Trollüyon?]
  $onlyIf[$message!=;$customEmoji[pcross] | Bir ID Girmelisiniz]
  $onlyPerms[ban;$customEmoji[pcross] | Bunun İçin \`Üyeleri Yasakla\` İzin Olmalı!]
  $onlyBotPerms[ban;$customEmoji[pcross] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İznim Açık Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
} 