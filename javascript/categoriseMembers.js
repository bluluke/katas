const categoriseMembers = (membersArray) => {
    let memberCategorisations = [];
    membersArray.forEach((member) => {
        if(member[0] > 54 && member[1] > 7) {
        memberCategorisations.push('senior')
        } else {
            memberCategorisations.push('open')
        }
    })
    return memberCategorisations
}


module.exports = { categoriseMembers };