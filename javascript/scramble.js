function scramble(str1, str2) {
    const charCountStr1 = {};
    const charCountStr2 = {};
  
    for (let char of str1) {
      charCountStr1[char] = (charCountStr1[char] || 0) + 1;
    }
    for (let char of str2) {
      charCountStr2[char] = (charCountStr2[char] || 0) + 1;
    }
    for (let char in charCountStr2) {
      if (!charCountStr1[char] || charCountStr1[char] < charCountStr2[char]) {
        return false;
      }
    }
  
    return true;
  }