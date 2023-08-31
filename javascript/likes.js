const likes = (peopleWhoLikeThis) => {
    if(peopleWhoLikeThis.length === 0) {
        return 'no one likes this'
    } else if(peopleWhoLikeThis.length === 1) {
        return `${peopleWhoLikeThis[0]} likes this`
    } else if (peopleWhoLikeThis.length === 2) {
        return `${peopleWhoLikeThis[0]} and ${peopleWhoLikeThis[1]} like this`
    } else if(peopleWhoLikeThis.length === 3) {
        return `${peopleWhoLikeThis[0]}, ${peopleWhoLikeThis[1]} and ${peopleWhoLikeThis[2]} like this`
    }
}


module.exports = { likes };