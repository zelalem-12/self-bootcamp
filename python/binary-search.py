class Solution:
    
    def searchRecursively(self,nums:List[int], left:int, right:int, target:int)-> int:
        if(left > right ):
            return -1
        mid = int((left + right ) / 2)
        print(mid)
        if(target == nums[mid]):
            return mid
        
        if(target > nums[mid]):
            left = mid + 1
        else:
            right = mid - 1
        
        return self.searchRecursively(nums, left, right, target)


    def search(self, nums: List[int], target: int) -> int:
        return self.searchRecursively(nums, 0, len(nums) - 1, target)