module.exports = ({
    name: "linkengel-aç",
    code: `
    $onlyPerms[admin;$customEmoji[pcross] | Bunun İçin \`Yönetici\` İznin Olmalı]
    $setServerVar[lengel;açık]
    $onlyIf[$getServerVar[lengel]!=açık;$customEmoji[pcross] | Bu Sistem Zaten Açık !]
  $customEmoji[ptick] | Link Engel Sistemi Başarıyla Açıldı Kapatmak İçin \`$getServerVar[Prefix]linkengel-kapat\` Yaz
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]`
    }) 