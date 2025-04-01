Problem:
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Initial thoughts:
1. First solution I'm thinking of is to create a map with all the letters in text
2. Then initialize an string "balloon" such that when you loop through each letter, check if the letter is in map and reduce the count accordingly
3. Have an early return for when letter is not found or count is already 0
4. At the end of each loop, increment count as "balloon" is formed
5. Problem is this will only just run once, since we are just looping over a balloon string once.

Next thoughts:
1. Step back a bit. We have map of all chars in text. What can we do with this
2. Get the number of letters "balloon" has in the map. For each word "balloon", we need
  1. 1 b
  2. 1 a
  3. 2 l
  4. 2 o
  5. 1 n
3. Get each letter of 'balloon' from the map, then divide accordingly. Math.floor the result of the division, and the lowest number is the count.
4. Modify loop to create map with only chars of 'balloon'
5. Instead of dividing, create an object instead of balloon characters and how may chars are needed to form one ballooon
6. Compare the balloon object and the map
7. Divide value of the char in the map with the char in the balloon object, then set that as the charCount.
8. Assign it to a maxBalloon with Math.min so that the next computations can be compared
9. Return max balloon