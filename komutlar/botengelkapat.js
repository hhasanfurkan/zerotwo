module.exports = {
    name: "bot-engel-kapat",
    code: `
    $setServerVar[botengel;kapalı]
    $resetServerVar[botengellog]
    $customEmoji[ptick] | Artık Sunucuya Bot Girebilicek
    $onlyIf[$getServerVar[botengel]!=kapalı;$customEmoji[pcross] | Bu Zaten Kapalı] 
    $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` Yetkin Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
    `
}
