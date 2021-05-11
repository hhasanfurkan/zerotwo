module.exports = {
  name:"kız",
  aliases: ['k'],
  code:`
    $useChannel[$getServerVar[ckanal]]
  $color[$getRoleColor[$highestRole[$mentioned[1]]]]
  <@$mentioned[1]>
  $title[Kayıt Başarılı ]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
**$customEmoji[azerotwo]Hoşgeldin \`$userTag[$mentioned[1]]\` Yetkililer Seni Kız Olarak Kayıt Etti

$customEmoji[zttick_red]Toplam Kız Üye Sayısı: $roleMembersCount[$getServerVar[krol]]

$customEmoji[ztdans7]Kayıt Eden Yetkili: <@$authorID>

$customEmoji[zttakla]Kuralları Okumayı Unutma**]

$channelSendMessage[$channelID;{title:Başarılı}{description:**$customEmoji[zttakla]\`$userTag[$mentioned[1]]\` Adlı Üyeyi Kayıt Ettim

$customEmoji[ztdans7]Kayıt Eden Yetkili: <@$authorID>

$customEmoji[ztsure]Toplam Kız Kayıt Sayısı: \`$getServerVar[kksayı]\`**}{footer:Kız Üye Rolü Verildi}{color:FFCCFF}]

  $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $giveRoles[$mentioned[1];$getServerVar[krol]]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kyetkili]]!=false;$customEmoji[pcross] | Üzgünüm Bunun İçin \`$roleName[$getServerVar[kyetkili]]\` Rolün Olmalı Veya Kayıt Yetkilisi Ayarlanmamış]
  $changeNickname[$mentioned[1]; $getServerVar[tag] $noMentionMessage[1] | $noMentionMessage[2]]
  $onlyIf[$message!=; $customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]kız @zerotwo Zerotwo | 16]
  $onlyIf[$hasRoles[$authorID;$getServerVar[krol]]!=false;$customEmoji[pcross] | Bu Üye Zaten Kayıt Olmuş]
  $onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross] | Kendini Kayıt Edemezsin]
  
$setServerVar[ksayı;$sum[$getServerVar[ksayı];1]]
$setServerVar[kksayı;$sum[$getServerVar[kksayı];1]]
$setUserVar[kulsayı;$sum[$getUserVar[kulsayı;$authorID];1];$authorID]

$onlyIf[$getServerVar[kayıtsız]!=;$customEmoji[pcross] | Kayıtsız Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kayıtsız\` Yazın]
  $onlyIf[$getServerVar[krol]!=; $customEmoji[pcross] | Kız Üye Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]krol\` Yazın]
  $onlyIf[$getServerVar[kyetkili]!=; $customEmoji[pcross] | Kayıt Yetkilisi Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kyetkili\` Yazın]
  $onlyIf[$getServerVar[ckanal]!=; $customEmoji[pcross] | Chat Kanalı Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]çkanal\` Yazın]
  $suppressErrors[$customEmoji[pcross] | Bir Hatayla Karşılaştım Kayıt Sistemini Tamamen Ayarlayıp Bir Daha Deneyin]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}