module.exports = {
  name:"sil",
  code:`
  $customEmoji[ptick]\`$message\` Kadar Mesaj Kyoryuu'lara Yem Oldu
  $deletecommand
  $deleteIn[4s]
  $clear[$message[1]]
  $suppressErrors[Hata !]
  $onlyIf[$hasPerms[$authorID;managemessages]!=false;$customEmoji[pcross] | Bunun İçin \`Mesajları Yönet\` İznin Olmalı]
  $onlyIf[$message!=;Mesaj Miktarı Girermisin !]
  $onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross] | Mesajları Ham Yapmam Şey Yani Silmem İçin Bir Rakam Girmelisin ]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  
$onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$clientID/voted/$authorid;hasvote]==true;{description:Bu komutu kullanabilmek için bota [oy vermeniz gerekiyor.](https://tandembotxyz.beratozen.repl.co/bot/$clientID/vote) Oylar her 12 saatte bir sıfırlanır.}{color:FFCCFF}]

  `
} 