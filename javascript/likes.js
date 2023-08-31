const likes = (peopleWhoLikeThis) => {
    if(peopleWhoLikeThis.length === 0) {
        return 'no one likes this'
    } else if(peopleWhoLikeThis.length === 1) {
        return `${peopleWhoLikeThis[0]} likes this`
    }
}


module.exports = { likes };