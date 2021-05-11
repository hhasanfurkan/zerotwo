module.exports = {
name:"afk",
code:`$setGlobalUserVar[afk;evet]
$setGlobalUserVar[afkc;0]
$setGlobalUserVar[afks;$message]
$title[Başarılı;]
$description[$customEmoji[ptick] | Artık AFK'sın. Anime İzle, Dışarı Çık, Kız Arkadaşını Yemeğe Götür Kısaca Keyfini Çıkar. İnsanlar Seni Etiketlediğinde \`$message\` Sebebinden AFK Diyeceğim Arkan Sağlam Yani ;)]
$thumbnail[$authorAvatar]
$color[FFCCFF]
$deleteIn[5s]
$onlyIf[$message!=;$customEmoji[pcross] | Lütfen bir afk sebebi belirleyin]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]


`}