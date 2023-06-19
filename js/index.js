const root = document.body;

const section = document.createElement("section");
section.classList.add("main");
root.append(section);

// OnClick this function will fire 
const getInputValue = async () => {
    // input from user
  const cont = document.getElementById("submit").value;
// fetching request to API 
try {
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=623ee2e3825c8dc245d0beec161adcc2&query=${cont}`
  );
  const data = await response.json();
    
     // item1 function fired
      item1(data);
      // item2 function fire
      item2(data);
    }catch (error) {
      console.log(error);
    }
};

// Helper functions createParagraph and createDiv are created to simplify the creation of paragraph and div elements with classes and content

const createParagraph = (className, content) => {
  const p = document.createElement("p");
  p.classList.add(className);
  p.textContent = content;
  return p;
};

const createDiv = (className, children) => {
  const div = document.createElement("div");
  div.classList.add(className);
  children.forEach(child => div.appendChild(child));
  return div;
};

// item1 function => it renders data related to location.
 const item1 =  (data)  => {
  const item = createDiv("item", [
    createDiv("details", [
      createParagraph("title", `Name : ${data.location.name}`),
      createParagraph("list", `Country : ${data.location.country}`),
      createParagraph("list", `Region : ${data.location.region}`),
      createParagraph("list", `Latitude : ${data.location.lat}`),
      createParagraph("list", `Longitude : ${data.location.lon}`)
    ])
  ]);
  section.appendChild(item);
      };

// it renders data related to weather.
const item2 =  (data) => {
  const item = createDiv("item", [
    createImg(data.current.weather_icons[0], data.current.weather_descriptions[0]),
    createDiv("details", [
      createParagraph("title", `Temperature : ${data.current.temperature}`),
      createParagraph("list", `Climate : ${data.current.weather_descriptions[0]}`),
      createParagraph("list", `Pressure : ${data.current.pressure}`),
      createParagraph("list", `Humidity : ${data.current.humidity}`)
    ])
  ]);
  section.appendChild(item);
};

// The createImg function is introduced to create the img element with attributes.
const createImg = (src, alt) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.width = "300px";
  img.height = "350px";
  return img;
};