//Fetching a random image from Unsplash and setting it as the background
//Have a variable that fetches the api data and a variable which has the assigned  to it a variable with a method to convert the data from the response into a json presentation
//Have an error handling event which has default background image and author name
try {
    const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature');
    const data = await res.json()
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById('author').textContent = `By: ${data.user.name}`;
} catch (err) {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1484766280341-87861644c80d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI4NDAzMTJ8&ixlib=rb-4.0.3&q=85)`
    document.getElementById('author').textContent = `By: JOHN TOWNER`;
}
    


//Fetch cyrpto currency data for bitcoin to access the image, name andd price
//Inside the try method I fetch the response from the api assigned to a variable, I then check if the response is not okay which if it is not, it throws an error message.
//I then assigned the reponse converted into a json to a variable which is used to add image, name and prices in the innerHTML using DOM manipulation.
//Also have an error catching to provide an error
try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/dogecoin');
    if(!res.ok) {
        throw Error('Something went wrong');
    };
    const data = await res.json();
    document.getElementById('crypto-top').innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
    `;
    document.getElementById("crypto").innerHTML += `
        <p>🎯: R${data.market_data.current_price.zar}</p>
        <p>👆: R${data.market_data.high_24h.zar}</p>
        <p>👇: R${data.market_data.low_24h.zar}</p>
    `;
}catch (err) {
    console.error(err);
};

//Created a function to get the current time for my location and convert it to a short style to not show the seconds using a variable which has assigned to it the current date and time.
//Also have code which set's interval of when to call the function which will allow the time to be updated.
function getCurrentTime() {
    const date = new Date();
    document.getElementById('time').textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"});
};
setInterval(getCurrentTime, 1000);

//The code below uses the navigator object which inside it we get the geolocation object and get the method for getting the current location of a device from the browser and inside the callback function utilise an api to get weather conditions response which is assigned to a variable. 
//Inside the try method, I check if the response is ok if not I throw an error message. I then convert the reponse into a json and assign it to a variable.
//I fetched the url of the weather icon on the first array element of the weather object, This is then used inside the innerHTML of the element fetched using it's id for creating an image element, then created two paragraph elements to display the name and temperature of the current location.
//I then have a catch method in order to to catch any error's from the promise chain and logs it in the console.
navigator.geolocation.getCurrentPosition( async position => {
    try {
        const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`);
        if (!res.ok) {
            throw Error("Weather data not available")
        };    
        const data = await res.json();
        console.log(data);
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather").innerHTML = `
            <img src="${iconUrl}" />
            <p class="weather-temp">${Math.round(data.main.temp)}°</p>
            <p class="weather-city">${data.name}</p>
        `;
    } catch (error) {
        console.error(err);
    }
});
    