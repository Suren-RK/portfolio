"""
LeetCode 217 — Contains Duplicate

Approach:
Use a set to remember values already visited. If a value appears again,
the list contains a duplicate.

Time: O(n) expected
Space: O(n)
"""

from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()

        for num in nums:
            if num in seen:
                return True
            seen.add(num)

        return False
