const categoriseMembers = (membersArray) => {
    let memberCategorisations = [];
    membersArray.forEach((memeber) => {
        memberCategorisations.push('open')
    })
    return memberCategorisations
}


module.exports = { categoriseMembers };