/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }
  
  const freqencymap1 = {};
  const freqencymap2 = {};

  for (let char of str1) {
    
      freqencymap1[char] = (freqencymap1[char] || 0)+1;
  }
  
  for (let char of str2) {
    
    freqencymap2[char] = (freqencymap1[char] || 0) + 1;
    
    }
  
  for (let char in freqencymap1) {
    if (freqencymap1[char] != freqencymap2[char])
      return false;
  }
  

  return true

}

module.exports = isAnagram;
