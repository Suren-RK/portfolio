"""Tests for the LeetCode 704 binary-search solution."""

import importlib.util
from pathlib import Path
import unittest


SOLUTION_PATH = (
    Path(__file__).resolve().parents[1]
    / "solutions"
    / "leetcode"
    / "704-binary-search.py"
)
SPEC = importlib.util.spec_from_file_location("binary_search_solution", SOLUTION_PATH)
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class BinarySearchTests(unittest.TestCase):
    def setUp(self):
        self.solution = MODULE.Solution()

    def test_target_in_middle(self):
        self.assertEqual(self.solution.search([-1, 0, 3, 5, 9, 12], 9), 4)

    def test_target_at_first_index(self):
        self.assertEqual(self.solution.search([-1, 0, 3, 5, 9, 12], -1), 0)

    def test_target_at_last_index(self):
        self.assertEqual(self.solution.search([-1, 0, 3, 5, 9, 12], 12), 5)

    def test_target_missing_between_values(self):
        self.assertEqual(self.solution.search([-1, 0, 3, 5, 9, 12], 2), -1)

    def test_target_below_smallest_value(self):
        self.assertEqual(self.solution.search([2, 4, 6], -3), -1)

    def test_target_above_largest_value(self):
        self.assertEqual(self.solution.search([2, 4, 6], 10), -1)

    def test_single_element_present(self):
        self.assertEqual(self.solution.search([7], 7), 0)

    def test_single_element_missing(self):
        self.assertEqual(self.solution.search([7], 3), -1)

    def test_empty_array(self):
        self.assertEqual(self.solution.search([], 5), -1)


if __name__ == "__main__":
    unittest.main()
