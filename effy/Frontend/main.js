function createUser(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const designation = document.getElementById('designation').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    let isActive = true; 
    let checkBox = document.querySelector('input[type="checkbox"]:checked');
    console.log(typeof(JSON.stringify(checkBox)))
    console.log(JSON.stringify(checkBox))
    if(JSON.stringify(checkBox) == 'null'){
        isActive = false; 
    }
    const obj = {
        firstName : firstName ,
        lastName : lastName ,
        email : email ,
        designation : designation ,
        dateOfBirth : dateOfBirth ,
        isActive : isActive
    }

    console.log(obj)

    axios.post('http://127.0.0.1:3000/create-user',obj)
    .then((Response) => {
        console.log(Response)
    }).catch((error) => {
        console.log(error)
    })
}

var x = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  localStorage.setItem('latitude', position.coords.latitude);
  localStorage.setItem('longitude',position.coords.longitude)
}


function createCompany(event){
    event.preventDefault();

    const companyName = document.getElementById('companyName').value;
    const companyAddress = document.getElementById('companyAddress').value;

    getLocation()

    const obj = {
      companyName : companyName,
      companyAddress : companyAddress,
      latitude : localStorage.getItem('latitude'),
      longitude: localStorage.getItem('longitude')
    }
    console.log(obj)
    localStorage.clear();
    
    axios.post('http://127.0.0.1:3000/create-company',obj)
    .then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
}

