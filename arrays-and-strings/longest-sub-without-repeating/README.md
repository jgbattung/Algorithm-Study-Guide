Problem: 
Given a string s, find the length of the longest substring without duplicate characters.

Initial thoughts:
1. Substring is are consecutive letters that can be found within the string
2. Loop and store each char as long as the char isn't equal to any of the previous chars. Use indexOf
3. When a duplicate is found, store the stored chars into a longest variable
4. Repeat and update when a longer chars is found
5. Return length of the longest variable

Next:
1. What do you do if a duplicate is found?

Different approach:
1. Use the approach called sloding window.
2. Since we only care about duplicate letters if it happens within a current substring, a window should be tracked to check this
3. Have an object that tracks each character and its index
4. Loop through the string
5. If there is a duplicate is found and it is wihtin the current window, update the window to one character after the occurence of the duplicate, effectively removing the first instance of the duplicate from the window
6. Compare the current length the maxLength and return which is longer.