"""
LeetCode 1480 — Running Sum of 1D Array

Approach:
Keep a running total and append it after each number.

Time: O(n)
Space: O(n) for the returned list
"""

from typing import List


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        total = 0
        result = []

        for num in nums:
            total += num
            result.append(total)

        return result
