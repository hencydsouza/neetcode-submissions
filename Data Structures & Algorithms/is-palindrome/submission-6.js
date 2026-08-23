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
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (!this.isAlphaNeumeric(s[l])) {
                l += 1;
                continue;
            }
            if (!this.isAlphaNeumeric(s[r])) {
                r -= 1;
                continue;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
