const isAFriend = (names) => {
    let arrayOfFriends =  [];
    names.forEach((name) => {
        if(name && name.length === 4) {
            arrayOfFriends.push(name);
        }
    })
    return arrayOfFriends;
}


module.exports = { isAFriend };