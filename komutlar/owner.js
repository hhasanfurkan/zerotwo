module.exports = ({
name:"owner",
code:`
$title[Ownerı Buldum]
$description[**\`$serverName[$guildID]\`** Adlı Sunucunun Sahibi **\`$userTag[$ownerID]\`**]
$footer[Zero Two;$serverIcon[$guildID]]
$color[303136]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

$onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$clientID/voted/$authorid;hasvote]==true;{description:Bu komutu kullanabilmek için bota [oy vermeniz gerekiyor.](https://tandembotxyz.beratozen.repl.co/bot/$clientID/vote) Oylar her 12 saatte bir sıfırlanır.}{color:FFCCFF}]

`
})
