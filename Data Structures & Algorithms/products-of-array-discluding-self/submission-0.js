class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pref = new Array(nums.length).fill(0)
        const suff = new Array(nums.length).fill(0)

        pref[0] = 1
        suff[nums.length - 1] = 1

        for(let i=1;i<=nums.length -1;i++) {
            pref[i] = nums[i-1] * pref[i-1]
        }

        for(let i=nums.length-2;i>=0;i--) {
            suff[i] = nums[i+1] * suff[i+1]
        }

        const res = new Array(nums.length)

        for(let i=0;i<res.length;i++) {
            res[i] = pref[i] * suff[i]
        }

        return res
    }
}
