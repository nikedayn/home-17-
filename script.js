import axios from 'axios'

const temperatureH1 = document.querySelector('#temperatureH1');
const youCity = document.querySelector('#youCity');
const submitBtn = document.querySelector('#submitBtn');

console.log(localStorage.getItem('city'));

if(localStorage.getItem('city') != null) {
    axios.get("http://api.weatherapi.com/v1/current.json", {
            params:{
                key:'e386a6909ee04b179d7102820232101',
                q:localStorage.getItem('city'),
                qi:'no'
            }
        })
        .then((res) => {
            temperatureH1.textContent = `Temperature in the city ${localStorage.getItem('city')}: ${res.data.current.temp_c}°C`
        })
        .catch((err) => {
            console.log(err);
        })
}

submitBtn.addEventListener('click', () => {
    if(youCity.value == 0){
        temperatureH1.textContent = 'The input field is empty!';
        youCity.value = '';
    }
    else{
        let usersCity = youCity.value;
        localStorage.setItem('city', usersCity);
        console.log(localStorage.getItem('city'));
        axios.get("http://api.weatherapi.com/v1/current.json", {
            params:{
                key:'e386a6909ee04b179d7102820232101',
                q:usersCity,
                qi:'no'
            }
        })
        .then((res) => {
            temperatureH1.textContent = `Temperature in the city ${usersCity}: ${res.data.current.temp_c}°C`
        })
        .catch((err) => {
            console.log(err);
        })
        youCity.value = '';
    }
});