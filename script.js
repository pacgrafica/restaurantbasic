function searchRestaurants() {
    var cityInput = document.getElementById("cityInput");
    var cityName = cityInput.value;
  
    // Aquí puedes realizar una petición al servidor para obtener los resultados de los restaurantes según la ciudad ingresada
    // Por simplicidad, en este ejemplo se asume que ya se tiene una lista de restaurantes
  
    var restaurantList = document.getElementById("restaurantList");
    restaurantList.innerHTML = ""; // Limpiar la lista antes de agregar los resultados
  
    // Ejemplo de resultados de restaurantes
    var restaurants = [
      { name: "Restaurante 1", location: "Dirección 1" },
      { name: "Restaurante 2", location: "Dirección 2" },
      { name: "Restaurante 3", location: "Dirección 3" }
    ];
  
    restaurants.forEach(function(restaurant) {
      var li = document.createElement("li");
      li.innerHTML = "<strong>" + restaurant.name + "</strong> - " + restaurant.location;
      restaurantList.appendChild(li);
    });
  }
  