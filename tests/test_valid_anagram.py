"""Tests for the LeetCode 242 valid-anagram solution."""

import importlib.util
from pathlib import Path
import unittest


SOLUTION_PATH = (
    Path(__file__).resolve().parents[1]
    / "solutions"
    / "leetcode"
    / "242-valid-anagram.py"
)
SPEC = importlib.util.spec_from_file_location("valid_anagram_solution", SOLUTION_PATH)
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class ValidAnagramTests(unittest.TestCase):
    def setUp(self):
        self.solution = MODULE.Solution()

    def test_example_is_anagram(self):
        self.assertTrue(self.solution.isAnagram("anagram", "nagaram"))

    def test_example_is_not_anagram(self):
        self.assertFalse(self.solution.isAnagram("rat", "car"))

    def test_repeated_letters(self):
        self.assertTrue(self.solution.isAnagram("aabbcc", "cbacba"))

    def test_same_length_but_different_counts(self):
        self.assertFalse(self.solution.isAnagram("aacc", "ccac"))

    def test_different_lengths(self):
        self.assertFalse(self.solution.isAnagram("ab", "a"))

    def test_empty_strings(self):
        self.assertTrue(self.solution.isAnagram("", ""))

    def test_single_character(self):
        self.assertTrue(self.solution.isAnagram("z", "z"))


if __name__ == "__main__":
    unittest.main()
