"""
LeetCode 704 — Binary Search

Approach:
The input array is sorted. Keep a search interval from left to right.
Check its middle element and discard the half that cannot contain the target.

Time: O(log n)
Space: O(1) — iterative search
"""

from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            middle = left + (right - left) // 2

            if nums[middle] == target:
                return middle
            if nums[middle] < target:
                left = middle + 1
            else:
                right = middle - 1

        return -1
