var root = document.body;

var section = document.createElement("section");
section.classList.add("main");
root.append(section);

// OnClick this function will fire 
const getInputValue = () => {
    // input from user
  let cont = document.getElementById("submit").value;
// fetching request to API 
  fetch(
    "http://api.weatherstack.com/current?access_key=623ee2e3825c8dc245d0beec161adcc2&query=" +
      cont 
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
     // item1 function fired
      item1(data);
      // item2 function fire
      item2(data);
    });
}

// item1 function => it renders data related to location.
 const item1 =  (data)  => {
        var item = document.createElement("div");
        item.classList.add("item");
        section.append(item);

        var details = document.createElement("div");
        details.classList.add("details");
        item.append(details);

        var title = document.createElement("p");
        var content = document.createTextNode("Name : " + data.location.name);
        title.classList.add("title");
        title.appendChild(content);
        details.append(title);

        var list = document.createElement("p");
        var content = document.createTextNode(
          "Country : " + data.location.country
        );
        list.classList.add("list");
        list.appendChild(content);
        details.append(list);

        var list = document.createElement("p");
        var content = document.createTextNode(
          "Region : " + data.location.region
        );
        list.classList.add("list");
        list.appendChild(content);
        details.append(list);

        var list = document.createElement("p");
        var content = document.createTextNode(
          "Latitude : " + data.location.lat
        );
        list.classList.add("list");
        list.appendChild(content);
        details.append(list);

        var list = document.createElement("p");
        var content = document.createTextNode(
          "Longitude : " + data.location.lon
        );
        list.classList.add("list");
        list.appendChild(content);
        details.append(list);
      };

// it renders data related to weather.
const item2 =  (data) => {
        var item = document.createElement("div");
        item.classList.add("item");
        section.append(item);

        var img = document.createElement("img");
        img.setAttribute("src", data.current.weather_icons[0]);
        img.setAttribute("alt", data.current.weather_descriptions[0]);
        img.setAttribute("width", "300px");
        img.setAttribute("height", "350px");
        item.append(img);

        var details = document.createElement("div");
        details.classList.add("details");
        item.append(details);

        var title = document.createElement("p");
        var content = document.createTextNode(
          "Temperature : " + data.current.temperature
        );
        title.classList.add("title");
        title.appendChild(content);
        details.append(title);

        var list = document.createElement("p");
        var content = document.createTextNode(
          "Climate : " + data.current.weather_descriptions[0]
        );
        list.classList.add("list");
        list.appendChild(content);
        details.append(list);

        var list = document.createElement("p");
        var content = document.createTextNode(
          "Pressure : " + data.current.pressure
        );
        list.classList.add("list");
        list.appendChild(content);
        details.append(list);

        var list = document.createElement("p");
        var content = document.createTextNode(
          "Humidity : " + data.current.humidity
        );
        list.classList.add("list");
        list.appendChild(content);
        details.append(list);
      };