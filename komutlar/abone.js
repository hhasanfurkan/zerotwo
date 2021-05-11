module.exports = ({
name:"abone",
code:`$channelSendMessage[835898737494327316;**$customEmoji[azerotwo] <@$mentioned[1]> abone rolün verildi <#834045267682263040> kanalına gidip istediğin rolleri al eğer herhangi bir \`hata bildirmek\` yada \`yapamadığınız kod\` için \`yardım\` kanallarını kullan**]
$reply[$messageID;**$customEmoji[azerotwo]|Abone rolü verildi**;yes]
$giveRole[$mentioned[1];829012125010886736]
$takeRole[$mentioned[1];817392727855071242]
$onlyForRoles[829019675727233057;**$customEmoji[pcross2]|Bunun için abone yetkilisi olmalısın baka**]
$onlyIf[$hasRole[$mentioned[1];829012125010886736]!=true;$customEmoji[ztcross2] **| zaten abone baka**]
$onlyIf[$mentioned[1]!=;$customEmoji[ztcross2] **| Birini Etiketle Baka**]
$onlyForServers[711249585812799489;]`
})
