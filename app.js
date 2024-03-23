document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("search-form");
    const removeGifsButton = document.getElementById("remove-gifs");
    const gifsContainer = document.getElementById("gifs-container");
  
    form.addEventListener("submit", async function(e) {
      e.preventDefault(); // Prevent the form from submitting the traditional way
  
      const searchTerm = document.getElementById("search-query").value;
      const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
      const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=${apiKey}`;
  
      try {
        const response = await axios.get(url);
        if (response.data.data.length > 0) {
          const gifUrl = response.data.data[0].images.original.url; // Get the URL of the first GIF
          const img = document.createElement('img'); // Create an <img> element
          img.src = gifUrl; // Set the source of the <img> to the GIF URL
          img.alt = "Giphy GIF"; // Set a meaningful alt text
  
          gifsContainer.appendChild(img); // Append the <img> to the gifsContainer
        } else {
          console.log('No GIFs found for this search term.');
        }
      } catch (error) {
        console.error("Error fetching data from Giphy:", error);
      }
    });
  
    // Event listener for the remove GIFs button
    removeGifsButton.addEventListener("click", function() {
      gifsContainer.innerHTML = ''; // Clear the container of all GIFs
    });
  });
  