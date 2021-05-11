module.exports = {
name:"sunucu-bilgi",
code:`
 $thumbnail[$serverIcon]
$title[Sunucu Bilgileri]
$description[
✏**Sunucu Adı:** \`$serverName[$guildID]\`

👑**Sunucu Sahibi:** \`$username[$ownerID]\`

🔰**Sunucu Bölgesi:** \`$serverRegion\`

📜**Toplam Kategori Sayısı:** \`$channelCount[category]\`

❇**Toplam Kanal Sayısı:** \`$channelCount\`

💬**Toplam Yazı Kanalı:** \`$channelCount[text]\`

📣**Toplam Ses Kanalı:** \`$channelCount[voice]\`

👤**Toplam Üye Sayısı:** \`$membersCount\`

🎃**Toplam Bot Sayısı:** \`$botCount\`]

$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

$onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$clientID/voted/$authorid;hasvote]==true;{description:Bu komutu kullanabilmek için bota [oy vermeniz gerekiyor.](https://tandembotxyz.beratozen.repl.co/bot/$clientID/vote) Oylar her 12 saatte bir sıfırlanır.}{color:FFCCFF}]

`}
