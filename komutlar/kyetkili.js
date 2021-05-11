module.exports = {
  name:"kyetkili",
  code:`
 $customEmoji[ptick] | Kayıt Yetkilisi \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
 $setServerVar[kyetkili;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]kyetkili @kayıtyetkilisi]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
 `
} 