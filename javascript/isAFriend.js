const isAFriend = (names) => {
    let arrayOfFriends =  names.map((name) => {
        if(name && name.length === 4) {
            return name;
        }
    })
    return arrayOfFriends;
}


module.exports = { isAFriend };