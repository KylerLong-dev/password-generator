# password-generator
Random Password Generator Project

This project was created to assist with the learning of vanilla JS concepts such as DOM manipulation, functions, eventListeners, for loops, and arrays. 

An array of characters was created that included the alphabet, numbers, and special characters so that this could be accessed for random character generation when clicking the "generate passwords" button. 

A slider was used to create a userInput for the length of the desired password. This sliderInput.value was used in the for loop as the end point to ensure proper length of the password. 

Each random index generated from Math.random was stored in a randomIndex variable and accessed via chars[randomIndex#]. Chars were added pwOneText, pwTwoText, etc via concatenation and rendered via texrContent within the getCharacters function. 

This function was called when the pwBtn was clicked. 

Navigator.clip.writeText() method utilized with an EventListener to copy the pw.textContent. 