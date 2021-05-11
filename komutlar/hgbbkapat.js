module.exports = {
  name:"hgbb-kapat",
  code:`
   $customEmoji[ptick] | Hoşgeldin Baybay Kapatıldı
   $onlyPerms[admin; $customEmoji[pcross] | Bunun İçin \`Yönetici\` Yetkin Olmalı]
   $resetServerVar[hgbb]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
  }