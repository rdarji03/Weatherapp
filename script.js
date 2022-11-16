const conatiner = document.querySelector("#weather_wrapper")
const btn = document.querySelector("#searchbtn")
const search = document.querySelector("#inp-data")
condition = document.querySelector(".conditions")
const error = document.querySelector(".errormsg")



// btn.addEventListener("click", fetchicon)

btn.addEventListener("click", fetchapi)


function fetchicon() {
    console.log("first")
    const fetchdata = search.value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${fetchdata}&appid=e76b75c300c1a5b2f857fc8bcf14f353`
    fetch(url).then((res) => res.json()).then((data) => {
        let id = data.weather[0].id
        console.log(id)


        if (id < 300 && id > 200) {
            console.log("heloo")
        }

        if (id < 400 && id > 300) {
            console.log("heloo")
        }
        if (id < 500 && id > 400) {
            console.log("heloo")
        }
        if (id < 600 && id > 500) {
            console.log("heloo")
        }

        if (id == 802) {
            condition.src = "./img/sun.png"
        }

    })
}





function fetchapi() {
    console.log("second")

    const fetchdata = search.value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${fetchdata}&appid=e76b75c300c1a5b2f857fc8bcf14f353`
    fetch(url).then((res) => res.json()).then((data) => {
            let id = data.weather[0].id
            if (id == 800) {
                condition.src = "./img/clear.png";
            } else if (id >= 200 && id <= 232) {
                condition.src = "./img/storm.png";
            } else if (id >= 600 && id <= 622) {
                condition.src = "./img/snow.png";
            } else if (id >= 701 && id <= 781) {
                condition.src = "./img/haze.png";
            } else if (id >= 801 && id <= 804) {
                condition.src = "./img/cloud.png";
            } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
                condition.src = "./img/rain.png";
            }





            let tempdata = data.main.temp
            let currenttemp = tempdata - 273
            console.log(data.weather[0].id)

            let html = ""
            if (data) {
                html += `
                <div class="weatherCard">
                <div class="currentTemp">
                    <span class="temp">${currenttemp.toFixed(0)}&deg</span>
                    <span class="location">${data.name}</span>
                </div>
                <div class="currentWeather">
                    <div class="info">
                    <span class="rain">Description:${data.weather[0].description}</span>
                    <span class="rain" style="margin: 20px 0;">Pressure:${data.main.pressure}</span>
                    <span class="rain">Humidity:${data.main.humidity}</span>
                    </div>
                </div>
            </div>            
                `

            }
            conatiner.innerHTML = html

        })
        .catch((err) => {
            console.log(err)
            error.innerHTML = "Please enter valid city name"
        });

}