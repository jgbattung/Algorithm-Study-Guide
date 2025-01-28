Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Initial thoughts:
1. Loop over the string
2. Track open brackets in order
3. If a closing bracket is seen, check the last open bracket
  1. If a corresponding bracket, remove the bracket
  2. If not, return false
4. At the end of the loop, if there are no brackets left, return false
