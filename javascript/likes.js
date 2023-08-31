const likes = (peopleWhoLikeThis) => {

    switch(peopleWhoLikeThis.length) {
        case 0:
            return 'no one likes this';
            break;
        case 1:
            return `${peopleWhoLikeThis[0]} likes this`;
            break;
        case 2:
            return `${peopleWhoLikeThis[0]} and ${peopleWhoLikeThis[1]} like this`;
            break;
        case 3:
            return `${peopleWhoLikeThis[0]}, ${peopleWhoLikeThis[1]} and ${peopleWhoLikeThis[2]} like this`
            break;
        default:
            return `${peopleWhoLikeThis[0]}, ${peopleWhoLikeThis[1]} and ${peopleWhoLikeThis.length - 2} others like this`;
    }
}


module.exports = { likes };