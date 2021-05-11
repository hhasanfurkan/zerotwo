module.exports = {
  name:"erkek",
  aliases: ['e'],
  code:`
  $useChannel[$getServerVar[ckanal]]
  $color[$getRoleColor[$highestRole[$mentioned[1]]]]
  <@$mentioned[1]>
  $title[Ohayoo]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
**$customEmoji[azerotwo]Hoşgeldin \`$userTag[$mentioned[1]]\` Yetkililer Seni Erkek Olarak Kayıt Etti

$customEmoji[zttick_green]Toplam Erkek Üye Sayısı: $roleMembersCount[$getServerVar[erol]]

$customEmoji[ztdans7]Kayıt Eden Yetkili: <@$authorID>
  
$customEmoji[zttakla]Kuralları Okumayı Unutma**]


  $channelSendMessage[$channelID;{title:Başarılı}{description:**$customEmoji[zttakla]\`$userTag[$mentioned[1]]\` Adlı Üyeyi Kayıt Ettim
   
 $customEmoji[ztdans7]Kayıt Eden Yetkili: <@$authorID>
   
 $customEmoji[ztsure]Toplam Erkek Kayıt Sayısı: \`$getServerVar[kesayı]\`**}{footer:Erkek Üye Rolü Verildi}{color:FFFFF}]
   
   
  $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $changeNickname[$mentioned[1];$getServerVar[tag] $noMentionMessage[1] | $noMentionMessage[2]]
  $giveRoles[$mentioned[1];$getServerVar[erol]]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kyetkili]]!=false;$customEmoji[pcross] | Bunun İçin \`$toleName[$getServerVar[kyetkili]]\` Rolün Olmalı Veya Kayıt Yetkilisi Ayatlanmamış]
  $onlyIf[$message!=;$customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]erkek @ParzivaL Parzi | 16]
  
  $setServerVar[ksayı; $sum[$getServerVar[ksayı];1]]
  $setServerVar[kesayı;$sum[$getServerVar[kesayı];1]]
  $setUserVar[kulsayı;$sum[$getUserVar[kulsayı;$authorID];1];$authorID]
  
  $onlyIf[$hasRoles[$authorID;$getServerVar[erol]]!=false; $customEmoji[pcross] | Bu Üye Zaten Kayıt Olmuş]
  $onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross] | Kendini Kayıt Edemezsin ]
 $onlyIf[$getServerVar[kayıtsız]!=;$customEmoji[pcross] | Kayıtsız Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kayıtsız\` Yazın]
  $onlyIf[$getServerVar[erol]!=; $customEmoji[pcross] | Erkek Üye Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]erol\` Yazın]
  $onlyIf[$getServerVar[kyetkili]!=; $customEmoji[pcross] | Kayıt Yetkilisi Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kyetkili\` Yazın]
  $onlyIf[$getServerVar[ckanal]!=; $customEmoji[pcross] | Chat Kanalı Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]çkanal\` Yazın]
  $suppressErrors[$customEmoji[pcross] | Bir Hatayla Karşılaştım Kayıt Sistemini Tamamen Ayarlayıp Birdaha Deneyin]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
} 