function handelSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(
    "#search-form-input-id"
  ); /* دریافت مقدار ورودی کاربر*/
  let cityElement =
    document.querySelector(
      "#city"
    ); /*المنت سیتی برابر باشه با مقادری که برای ای دی ستی میدیم*/
  cityElement.innerHTML =
    searchInput.value; /*  - و innerHTML برای خواندن یا نوشتن محتوای HTML یک عنصر استفاده می‌شود.
ورودی که از کاربر گرفتیم توی المنت سرچ اینپوت بیاد بشینه توی این*/
}

let searchFormElement =
  document.querySelector(
    "#search-form-id"
  ); /*انتخاب یک عنصر با آی دی مشخص شده (که در اینجا بخش فرم هست) و متغیر سرچ فور المنت رو توی اون عنصر ذخیره میکنه*/
searchFormElement.addEventListener(
  "submit",
  handelSearchSubmit
); /*المنت سرچ فرم اینپونت بیاد هر وقت سابمیتش بکنیم، تابع هندل سرچ فلان رو برامون بخونه*/
