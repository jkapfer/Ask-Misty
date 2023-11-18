// Function to fetch and process the JSON file
async function seekWisdom() {
  try {
    const response = await fetch('files/wisdom.json'); //Fetch the JSON file
    const data = await response.json(); // Convert the response to JSON

    // Get an array of keys from the JSON object
    const keys = Object.keys(data);

    // Get a random index
    const randomIndex = Math.floor(Math.random() * keys.length);

    // Get the random key
    const randomKey = keys[randomIndex];

    // Get the value associated with the random key
    const randomValue = data[randomKey];

    // Display the random key in the div
    document.getElementById('winspiration').innerText = randomValue;
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

async function seekInspiration() {
  try {
    const response = await fetch('files/inspiration.json'); 
	
	//Fetch the JSON file
    const data = await response.json(); // Convert the response to JSON

    // Get an array of keys from the JSON object
    const keys = Object.keys(data);

    // Get a random index
    const randomIndex = Math.floor(Math.random() * keys.length);

    // Get the random key
    const randomKey = keys[randomIndex];

    // Get the value associated with the random key
    const randomValue = data[randomKey];

    // Display the random key in the div
    document.getElementById('winspiration').innerText = randomValue;
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}