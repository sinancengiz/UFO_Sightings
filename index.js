// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $searchBtn1 = document.querySelector("#search1");
var $cityInput = document.querySelector("#city");
var $searchBtn2 = document.querySelector("#search2");
var $stateInput = document.querySelector("#state");
var $searchBtn3 = document.querySelector("#search3");
var $countryInput = document.querySelector("#country");
var $searchBtn4 = document.querySelector("#search4");
var $shapeInput = document.querySelector("#shape");
var $searchBtn5 = document.querySelector("#search5");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn1.addEventListener("click", handleSearchButtonClick);
$searchBtn2.addEventListener("click", handleSearchButtonClick2);
$searchBtn3.addEventListener("click", handleSearchButtonClick3);
$searchBtn4.addEventListener("click", handleSearchButtonClick4);
$searchBtn5.addEventListener("click", handleSearchButtonClick5);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
      // Get get the current address object and its fields
      var ufo_data = filteredData[i];
      var fields = Object.keys(ufo_data);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = ufo_data[field];
      }
    }
  }

function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterState = $datetimeInput.value.trim();

      // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.datetime;
        // .toLowerCase()
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return addressState === filterState;
    });
    renderTable();
  }

  function handleSearchButtonClick2() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterState = $cityInput.value.trim();

      // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.city;
        // .toLowerCase()
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return addressState === filterState;
    });
    renderTable();
  }

  function handleSearchButtonClick3() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterState = $stateInput.value.trim();

      // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.state;
        // .toLowerCase()
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return addressState === filterState;
    });
    renderTable();
  }

  function handleSearchButtonClick4() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterState = $countryInput.value.trim();

      // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.country;
        // .toLowerCase()
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return addressState === filterState;
    });
    renderTable();
  }

  function handleSearchButtonClick5() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterState = $shapeInput.value.trim();

      // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(ufo_data) {
    var addressState = ufo_data.shape;
        // .toLowerCase()
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return addressState === filterState;
    });
    renderTable();
  }

  // Render the table for the first time on page load
renderTable();