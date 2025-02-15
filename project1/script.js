const button = document.getElementById("search")
const inputvalue =  document.getElementById("cityInput")


async function getdata(city) {
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=3381148c54ae4adab8d184919253001&q=${city}&aqi=yes`);
   return await promise.json()
}

button.addEventListener('click',async()=>
{
   if(inputvalue.value==="")
      {
         alert("please enter city name")
      }
   const city = inputvalue.value;
   const result  = await getdata(city)
   const timeanddate = result.location.localtime;
   const [date, time] = timeanddate.split(" ");
   document.getElementById('inputCityname').textContent=` ${result.location.name}`;
    document.getElementById('country').textContent=`country : ${result.location.country}`;
    document.getElementById('temp_c').textContent= `Temprature : ${result.current.temp_c} C`;
    document.getElementById('Time').textContent=`Date : ${date} `;
    document.getElementById('region').textContent= `Region : ${result.location.region}`;
    document.getElementById('wind_mph').textContent= `Wind in Mph : ${result.current.wind_mph}`;

    document.getElementById('content').style.display = "block";
});



