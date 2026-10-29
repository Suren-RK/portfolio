"""Tests for the LeetCode 1480 running-sum solution."""

import importlib.util
from pathlib import Path
import unittest


SOLUTION_PATH = (
    Path(__file__).resolve().parents[1]
    / "solutions"
    / "leetcode"
    / "1480-running-sum.py"
)
SPEC = importlib.util.spec_from_file_location("running_sum_solution", SOLUTION_PATH)
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class RunningSumTests(unittest.TestCase):
    def setUp(self):
        self.solution = MODULE.Solution()

    def test_example(self):
        self.assertEqual(
            self.solution.runningSum([1, 2, 3, 4]),
            [1, 3, 6, 10],
        )

    def test_negative_numbers(self):
        self.assertEqual(
            self.solution.runningSum([-1, 2, -3, 4]),
            [-1, 1, -2, 2],
        )

    def test_empty_list(self):
        self.assertEqual(self.solution.runningSum([]), [])

    def test_single_number(self):
        self.assertEqual(self.solution.runningSum([7]), [7])


if __name__ == "__main__":
    unittest.main()
