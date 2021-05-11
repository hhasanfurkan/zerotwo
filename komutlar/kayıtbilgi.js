module.exports = {
name:"kayıt-bilgi",
code:`
$title[Ohayoo]
$description[**
$customEmoji[azerotwo]Toplam Üye Sayısı : \`$membersCount\`

$customEmoji[ztcrown_green]Toplam Kız Üye Sayısı : \`$roleMembersCount[$getServerVar[krol]]\`

 $customEmoji[ztcrown_white]Toplam Erkek Üye Sayısı : \`$roleMembersCount[$getServerVar[erol]]\`

$customEmoji[zttakla]Toplam Kayıtsız Üye Sayısı : \`$roleMembersCount[$getServerVar[kayıtsız]]\`

 $customEmoji[zthawlipika]Zero Two İle Kayıt Olan Üye Sayısı : \`$getServerVar[ksayı]\`

$customEmoji[zttick_red]Zero Two İle Kayıt Olan Kız Üye Sayısı : \`$getServerVar[kksayı]\`

 $customEmoji[zttick_green]Zero Two İle Kayıt Olan Erkek Üye Sayısı : \`$getServerVar[kesayı]\`**]
$color[FFCCFF]
$footer[Zero Two Kayıt Sistemi; $authorAvatar]
$onlyIf[$getServerVar[kayıtsız]!=; $customEmoji[pcross] | Bunun İçin Kayıt Sistemini Kurmalısınız Kurmak İçin \`$getServerVar[Prefix]kayıt-sistemi\` Yazın]

$onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/$clientID/voted/$authorid;hasvote]==true;{description:Bu komutu kullanabilmek için bota [oy vermeniz gerekiyor.](https://tandembotxyz.beratozen.repl.co/bot/$clientID/vote) Oylar her 12 saatte bir sıfırlanır.}{color:FFCCFF}]

`
}
