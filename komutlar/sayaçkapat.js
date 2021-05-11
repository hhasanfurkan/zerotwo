module.exports = {
  name:"sayaç-kapat",
  code:`
  $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $resetServerVar[sayac]
  $resetServerVar[sayaclog]
  $onlyIf[$getServerVar[sayaçlog]!=;$customEmoji[pcross] | Bu Zaten Kapalı]
  $customEmoji[ptick] | Sayaç Kapatıldı Tekrardan Açmak İçin \`$getServerVar[Prefix]sayaç\` Yazın
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
  }