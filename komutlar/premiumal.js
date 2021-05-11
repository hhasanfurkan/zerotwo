module.exports = {
name:"premium-al",
code:`$setGlobalUserVar[premium;no;$mentioned[1]]
$setVar[presayı;$sub[$getVar[presayı];1]]$useChannel[830439675025948723]
<@$mentioned[1]>
$title[Başarılı]
$description[__Premiumu Alınan Üye__:\`$username[$mentioned[1]]\`

__Premiumun Alındığı Sunucu__: [$serverName[$guildID]]($getServerInvite)
 
__Hesap Detayları__:
\`Kurulum Tarihi\` :$creationDate[$mentioned[1]]

\`Hesap ID si\` : $mentioned[1]

\`Alınma Sebebi\` : **$noMentionMessage**]

$channelSendMessage[$channelID;**$customEmoji[azerotwo] | Üyeye Premium Verildi **]

$onlyForIDs[677468381485596702;$customEmoji[azerotwo] | Sadece ParzivaL Premium Alabilir]
$onlyIf[$mentioned[1]!=;$customEmoji[azerotwo] | Birini Etiketle Bakaaa]
`
}
