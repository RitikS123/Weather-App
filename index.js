console.log('Hello jee');
const API_KEY = "d34a8e8927f2513f298baa9ce1b5dfb2";

function renderWeatherInfo(data){
        let newpara = document.createElement('p');
        newpara.textContent = `${data?.main?.temp.toFixed(2)} °C`
        document.body.appendChild(newpara);
}

async function showWeather(){
    try{
        let city = "Bhopal"
        // await bcoz api call hojaye or complete ho jaye tbhi result aayega na next line me:
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
        // await bcoz pehle result toh aajaye tbhi toh print krenge:
        const data = await response.json();

        console.log("Weather data:-> " , data);
        // let newpara = document.createElement('p');
        // newpara.textContent = `${data?.main?.temp.toFixed(2)} °C`
        // document.body.appendChild(newpara);

        // ye function keval UI pe result ko display krane ke liye h: bcoz accha function woh hota h jo ek he type ka kaam kre:
        renderWeatherInfo(data);
    }
    catch(err){
        // handle the error here:
        console.warn(err);
    }
}

async function getCustomWeather(){
    try{
        let latitude = 24.0667;
        let longitude = 75.0667;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        let data = await result.json();
    
        console.log("Weather", data);
        renderWeatherInfo(data);
    }
    catch(err){
        console.log("error" , err);
    }

}
// this is the function for finding the user location:
function getLocation() {
    // nav.geo means if geolocation feature is present or not:
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("No geolocation Support available");
    }
  }
//   this is showposition function:
  function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;
  
    console.log(lat);
    console.log(longi);
  }