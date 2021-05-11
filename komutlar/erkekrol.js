module.exports = {
  name:"erol",
  code:`
 $customEmoji[ptick] | Erkek Rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
 $setServerVar[erol;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false; $customEmoji[pcross] | Bunun İçin\`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]erol @Erkeküye]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
 `
} 