# [JSL09] Submission: Personal Dashboard Chrome Extension
# Project overview
The aim of this project was to create a promise rejection dashboard which is a chrome dashboard extension which contain the weather, information of crypto currency data and the current time and author of the background image.

![image](https://github.com/Tumelo-Mogono-SE/TUMMOG375_BCL2401_GroupF_Tumelo-Mogono_JSL09/assets/156678534/ef4a3ebf-6461-4c24-924f-12cdaefbaf82)


# Project Process
* For the project after accessing the starter code from the scrimba challenge provided, I first added the required html elements with the attributes.
* I then provided the styling inside the CSS file and then linked my created javasript file and CSS file with my HTML file.
* Inside Javascirpt I used the try catch method, for the first API i needed to fetch the API response, I utilites the await operator for fetching the respone of the API and assigned it to a variable. The variable is then used with the JSON function to convert the response into a JSON format and assign it to another variable. This variable is then used in DOM manipulation to add the author name of the image being displayed and set the background image in the CSS style backgroundImage. The catch method then had the a default image URL and preset name of the author.
* For the second API i need, utilising the try method I fetched the API response with the await operator and assigned the result to a variable, then used the variable to check if the response is ok and if it is not I threw an error message. I then used the same variable to convert the response into a JSON format and assigned it to a new variable, this new variable is then used for DOM manipulation to add new elements inside the fetched elements from the DOM using element ID's, the new elements are added to the DOM using innerHTML. The catch method is used console log the error message created.
* I then added a function to get the current time which inside the function I assigned the Date function which gets the date and time and assigned the result to a variable which is then used for DOM manipulation to add content into the element div with the Id of time, the content being the date function results being converted into time only and having the style being short to only have the hour and minutes. I then added a setInterval function which refreshes the call back function after the set time interval.
* For the last API, I first had to get the current location of the device using the geolocation property which has the method getCurrentPosition which gets the current location and passes it to the parameter of the call back function.
* Inside the callback function I used the try catch methods, Inside the try method I fetched the response of the API and assigned it to a variable. This variable is then used to first check if the response is ok if not it throws a error message, secondly the variable is used with the json function to convert the response into a JSON format and then assigned to a new variable. The new variable is used for first getting the icon of the current weather from the objects inside the URL and lastly for DOM manipulation by getting information such as temperature and name of the city which the information is used inside the new elements created inside the string literal which is being assigned to the innerHTML of the fetch element. The catch method is used to console log the error message.
* I then created the manifest.json file which is used for the chrome extension to get information of the extension.

# Challenges
For this project, I first had challenges with knowing which method to use for getting the time configuration that was required for the project, Second challenge was when I was working on getting the current location of the device I tried different methods which were not right until I saw how they did it in scrimba. I also had a problem with my getCurrentPosition method as my google chrome or microsoft edge were not allowing me unchange the  setting which blocked access to my location, I had to do some changes to how my chrome  views unsecure sites.

# Feedback
This was a great introduction to working with different types of APIs, the experience and knowledge gained is just huge, I would have liked to add more APIs and function to the project, but due to the time constraint I was limited. In overall I look forward to project that implement APIs and those that require features such as Async and await and the try catch method, just so that I can get more practice.

