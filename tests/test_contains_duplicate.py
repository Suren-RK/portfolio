"""Tests for the LeetCode 217 contains-duplicate solution."""

import importlib.util
from pathlib import Path
import unittest


SOLUTION_PATH = (
    Path(__file__).resolve().parents[1]
    / "solutions"
    / "leetcode"
    / "217-contains-duplicate.py"
)
SPEC = importlib.util.spec_from_file_location("contains_duplicate_solution", SOLUTION_PATH)
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class ContainsDuplicateTests(unittest.TestCase):
    def setUp(self):
        self.solution = MODULE.Solution()

    def test_example_with_duplicate(self):
        self.assertTrue(self.solution.containsDuplicate([1, 2, 3, 1]))

    def test_example_without_duplicate(self):
        self.assertFalse(self.solution.containsDuplicate([1, 2, 3, 4]))

    def test_empty_list(self):
        self.assertFalse(self.solution.containsDuplicate([]))

    def test_single_number(self):
        self.assertFalse(self.solution.containsDuplicate([7]))

    def test_negative_duplicate(self):
        self.assertTrue(self.solution.containsDuplicate([-1, 2, -1]))

    def test_duplicate_at_end(self):
        self.assertTrue(self.solution.containsDuplicate([5, 4, 3, 2, 5]))


if __name__ == "__main__":
    unittest.main()
