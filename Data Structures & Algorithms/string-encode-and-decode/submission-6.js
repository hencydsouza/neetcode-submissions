class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return ""

        const lengths = strs.map(s => s.length)
        const str =  `${lengths.join(',')}#${strs.join('')}`
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return []

        const index = str.indexOf('#')
        const wordCount = str.slice(0,index).split(',').map(n => parseInt(n))

        const strings = str.slice(index+1,str.length)

        let sliceIndex = 0
        const result = wordCount.map(w => {
            const res= strings.slice(sliceIndex, sliceIndex+w)
            sliceIndex +=w

            return res
        })
        return result
    }
}
