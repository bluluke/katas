const isAFriend = (names) => {
    let arrayOfFriends =  names.map((name) => {
        if(name) {
            return name;
        }
    })
    return arrayOfFriends;
}


module.exports = { isAFriend };