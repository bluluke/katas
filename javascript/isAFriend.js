const isAFriend = (names) => {
    let arrayOfFriends =  [];
    names.forEach((name) => {
        const letterRegex = /^[a-zA-Z]+$/; 
        if(name && name.length === 4 && letterRegex.test(name)) {

            arrayOfFriends.push(name);
        }
    })
    return arrayOfFriends;
}


module.exports = { isAFriend };