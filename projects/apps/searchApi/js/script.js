let api = "https://randomuser.me/api?results=1000";
let ul = document.querySelector(".ul");
let input = document.querySelector(".input");
let array = [];

// fetchni api a daj ho do json
async function getData() {
  let fetchedApi = await fetch(api);
  let fetchedApiJSON = await fetchedApi.json();
  let results = fetchedApiJSON.results;
  ul.innerHTML = "";

  //pre kazdu jednu polozku z api vytvor li a appendni do zoznamu a pushni do array

  for (result of results) {
    let li = document.createElement("li");
    li.innerHTML = `<div class="liPhoto"><img src="${
      result.picture.medium
    }"alt=""></div>
                      <div class="liText">
                        <p>${result.name.first} ${result.name.last}</p>
                        <p>${result.dob.date.slice(0, 10)}</p>
                        <p>${result.gender}</p>
                        <p>${result.location.city}</p>
                      </div>`;
    li.classList.add("li");

    ul.appendChild(li);
    array.push(li);
  }
}

getData();

//vyhladavanie na input

input.addEventListener("input", function () {
  array.forEach(function (user) {
    if (user.innerText.toLowerCase().includes(input.value.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
});
