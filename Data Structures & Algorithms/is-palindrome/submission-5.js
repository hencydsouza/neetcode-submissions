class Solution {
    isAlphaNeumeric(char) {
        return (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9")
        );
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr = ''

        for(const char of s) {
            if(this.isAlphaNeumeric(char)) {
                newStr+= char.toLowerCase()
            }
        }

        return newStr === newStr.split('').reverse().join('')
    }
}
