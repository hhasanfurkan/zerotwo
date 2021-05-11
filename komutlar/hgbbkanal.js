module.exports = {
  name:"hgbb",
  code:`
 $customEmoji[ptick] |  Hoşgeldin Bay Bay Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı
  $setServerVar[hgbb;$mentionedChannels[1]]
  $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $onlyIf[$mentionedChannels[1]!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]hgbb #hgbb]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

$onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$clientID/voted/$authorid;hasvote]==true;{description:Bu komutu kullanabilmek için bota [oy vermeniz gerekiyor.](https://tandembotxyz.beratozen.repl.co/bot/$clientID/vote) Oylar her 12 saatte bir sıfırlanır.}{color:FFCCFF}]

`}
 
 