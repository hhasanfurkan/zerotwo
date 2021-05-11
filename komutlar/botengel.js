module.exports = {
    name: "bot-engel-aç",
    code: `
    $setServerVar[botengel;açık]
    $setServerVar[botengellog;$mentionedChannels[1]]
    $customEmoji[ptick] | Artık Sunucuya Bot Giremiyicek
    $onlyIf[$getServerVar[botengel]!=açık;$customEmoji[pcross] | Bu Zaten Açık] 
    $onlyPerms[admin;Bunun İçin \`Yönetici\` İznin Olmalı]
    $onlyBotPerms[ban;$customEmoji[pcross] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İzni Açık Olmalı]
$onlyIf[$mentionedChannels[1]!=; $customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]bot-engel-aç #log]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
    
$onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$clientID/voted/$authorid;hasvote]==true;{description:Bu komutu kullanabilmek için bota [oy vermeniz gerekiyor.](https://tandembotxyz.beratozen.repl.co/bot/$clientID/vote) Oylar her 12 saatte bir sıfırlanır.}{color:FFCCFF}]

    `
}
