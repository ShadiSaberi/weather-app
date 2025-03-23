function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temerature");
  let temperature = response.data.temperature.current;

  let cityElement =
    document.querySelector(
      "#city"
    ); /*المنت سیتی برابر باشه با مقادری که برای ای دی ستی میدیم*/
  cityElement.innerHTML =
    response.data.city; /*  - و innerHTML برای خواندن یا نوشتن محتوای HTML یک عنصر استفاده می‌شود.
ورودی که از کاربر گرفتیم توی المنت سرچ اینپوت بیاد بشینه توی این*/
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "f05a484ed430ce4d21tad607a48ebo0f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handelSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(
    "#search-form-input-id"
  ); /* دریافت مقدار ورودی کاربر*/
  searchCity(searchInput.value);
}

let searchFormElement =
  document.querySelector(
    "#search-form-id"
  ); /*انتخاب یک عنصر با آی دی مشخص شده (که در اینجا بخش فرم هست) و متغیر سرچ فور المنت رو توی اون عنصر ذخیره میکنه*/
searchFormElement.addEventListener(
  "submit",
  handelSearchSubmit
); /*المنت سرچ فرم اینپونت بیاد هر وقت سابمیتش بکنیم، تابع هندل سرچ فلان رو برامون بخونه*/
searchCity("Mashhad");
