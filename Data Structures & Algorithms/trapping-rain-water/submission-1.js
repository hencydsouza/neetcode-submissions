class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const leftMax = [],
            rightMax = [],
            n = height.length;

        leftMax[0] = height[0];
        for (let i = 1; i < height.length; i++) {
            leftMax[i] = Math.max(height[i], leftMax[i - 1]);
        }

        rightMax[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(height[i], rightMax[i+1])
        }

        return leftMax.reduce((total, l, i) => {
            return total + Math.max((Math.min(l,rightMax[i]) - height[i]),0)
        }, 0)
    }
}
