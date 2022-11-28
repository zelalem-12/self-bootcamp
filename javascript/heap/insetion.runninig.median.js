
/** 
 * @param {number} num
 * @return {void}
 */
 MedianFinder.prototype.addNum = function(num) {
    const size = this.nums.length;
    let j = size - 1;
    while(j >= 0 && this.nums[j] > num){
        this.nums[j + 1] = this.nums[j];
        j--;
    }
    this.nums[j + 1] = num;
 }
/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const size = this.nums.length;
    if(size % 2 !== 1){
        const middle = math.floor(size/2);
        return this.nums[middle - 1];
    } 
    const half = size/2;
    return  (this.nums[half -1] + this.nums[half]) / 2;
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */



function MedianFinder() {
    this.nums = [];
};



