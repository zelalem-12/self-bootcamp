from ast import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        complementMap = dict()

        for i in range(len(nums)):
            if nums[i] in complementMap:
                return [complementMap[nums[i]], i]
            else:
                complementMap[target - nums[i]] = i
    
    def bruteForceTwoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if  target == nums[i] + nums[j]:
                    return [i, j]