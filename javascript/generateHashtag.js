function generateHashtag(str) {
    if (!str || str.trim().length === 0) {
      return false;
    }
  
    const words = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
    
    const hashtag = '#' + words.join('');
  
    if (hashtag.length > 140) {
      return false;
    }
  
    return hashtag;
  }