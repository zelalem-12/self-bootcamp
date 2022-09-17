
var MedianFinder = function() {
    this.maxHeap = [];
    this.minHeap = [];
    
    // heapify Method
    this.heapify = function(nodeIndex, heapType="max"){
        if(nodeIndex <= 0) return;
        
        const parent = Math.floor((nodeIndex - 1) / 2);
        
        if(heapType === "min"){
            if(this.minHeap[nodeIndex] < this.minHeap[parent]){
                [this.minHeap[parent], this.minHeap[nodeIndex]] = [this.minHeap[nodeIndex], this.minHeap[parent]];
                this.heapify(parent, "min");
            }
            return;
        }
        if(this.maxHeap[nodeIndex] > this.maxHeap[parent]){
           console.log({key:nodeIndex});
            [this.maxHeap[parent], this.maxHeap[nodeIndex]] = [this.maxHeap[nodeIndex], this.maxHeap[parent]];
            this.heapify(parent);
        }
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
    
    const minHeapRoot = this.minHeap[0];    
    const maxHeapRoot = this.maxHeap[0];
    
    
    if(maxHeapSize > minHeapSize){
        
        if(num < maxHeapRoot){
            
            this.minHeap[minHeapSize] = maxHeapRoot;
           
           
            console.log(this.maxHeap)
            this.maxHeap.shift();
            console.log(this.maxHeap)
            this.maxHeap.push(num); 
            console.log({num,MaxH:this.maxHeap, maxHeapSize, sizeN:this.maxHeap.length})
            this.heapify(maxHeapSize - 1); // Maintain the heap  property of the first half;
          maxHeapSize === 3?   console.log(this.maxHeap):null
            
            
             this.heapify(minHeapSize, "min");// Maintaint the heap property of the second half
            
            
            return;
        }
        this.minHeap[minHeapSize] = num;
        this.heapify(minHeapSize, "min");
        return;
    }
    
    if(num <= minHeapRoot){
       // num === 0? console.log({MaxH: this.maxHeap, num, minH:this.minHeap}):null
        
        this.maxHeap[maxHeapSize] = num;
        
       // num === 0? console.log({MaxH: this.maxHeap,maxHeapSize}) : null;
        
        this.heapify(maxHeapSize); // Maintain the heap  property of the first half;
      
        
        // num === 0? console.log({MaxH: this.maxHeap}) : null;
        return;
    }
    
    this.maxHeap[maxHeapSize] = minHeapRoot;
    this.heapify(maxHeapSize); // Maintain the heap  property of the first half;
    
    this.minHeap.shift();
    this.minHeap.push(num);
    this.heapify(minHeapSize - 1, "min"); // Heapify the root item(updated item);
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
   // console.log(this.maxHeap, this.minHeap);
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