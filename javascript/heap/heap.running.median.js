
var MedianFinder = function() {
    this.maxHeap = [];
    this.minHeap = [];
    
    // heapify Method
    this.heapify = function(nodeIndex, heapType="max"){
        if(nodeIndex <= 0) return;
        
        let otherChild  = nodeIndex + 1;
        if(nodeIndex % 2 === 0) otherChild = nodeIndex - 1;
        const parent = Math.floor((nodeIndex - 1) / 2);
        
        if(heapType === "min") {
            let smallerChildKey = nodeIndex;
            if(this.minHeap[otherChild] !== undefined  &&  this.minHeap[otherChild] < this.minHeap[smallerChildKey]){
                smallerChildKey = otherChild;
            }
            if(this.minHeap[smallerChildKey] < this.minHeap[parent]){
                [this.minHeap[parent], this.minHeap[smallerChildKey]] = [this.minHeap[smallerChildKey], this.minHeap[parent]];
            }
            this.heapify(parent, "min");
            return;
        
        }

        let largerChildKey = nodeIndex;
        if(this.maxHeap[otherChild] !== undefined  &&  this.maxHeap[otherChild] > this.maxHeap[largerChildKey]){
            largerChildKey = otherChild;
        }
        
        if(this.maxHeap[largerChildKey] > this.maxHeap[parent]){
            [this.maxHeap[parent], this.maxHeap[largerChildKey]] = [this.maxHeap[largerChildKey], this.maxHeap[parent]];
        }
        this.heapify(parent);
        return;
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const maxHeapSize = this.maxHeap.length;
    const minHeapSize = this.minHeap.length;
    
    if(maxHeapSize === 0) {
        this.maxHeap.push(num);
        return;
    };
    
    if(minHeapSize === 0 ){
        if(num >= this.maxHeap[0]) {
            this.minHeap.push(num);
            return;
        }
        this.minHeap.push(this.maxHeap.shift());
        this.maxHeap.push(num);
        return;
    }
    
    if(maxHeapSize > minHeapSize){
        
        if(num < this.maxHeap[0]){
            
            this.minHeap[minHeapSize] = this.maxHeap[0];
            this.heapify(minHeapSize, "min");      // Maintaint the heap property of the second half

            this.maxHeap.shift();
            this.maxHeap.push(num); 
            this.heapify(maxHeapSize - 1);         // Maintain the heap  property of the first half; 
            return;
        }
        this.minHeap[minHeapSize] = num;
        this.heapify(minHeapSize, "min");
        return;
    }
    
    if(num <= this.minHeap[0]){
        this.maxHeap[maxHeapSize] = num;
        this.heapify(maxHeapSize);            // Maintain the heap  property of the first half;
        return;
    }
    
    this.maxHeap[maxHeapSize] = this.minHeap[0];
    this.heapify(maxHeapSize);                // Maintain the heap  property of the first half;
    
    this.minHeap.shift();
    this.minHeap.push(num);
    this.heapify(minHeapSize - 1, "min");    // Heapify the root item(updated item);
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
   
    const maxHeapSize = this.maxHeap.length;
    const minHeapSize = this.minHeap.length;
    
    if(maxHeapSize !== minHeapSize)   return this.maxHeap[0];
    
    return (this.maxHeap[0] + this.minHeap[0]) / 2;
};

/**
* @param {number } n
* @param {number } i
* @param {boolean } isMinHeap
* return {void}
*/

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */