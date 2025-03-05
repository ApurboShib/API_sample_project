// Function to load categories
const loadCategories = () => {
    // Fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories))
      .catch((error) => console.log(error));
  };
  
  // Function to load videos
  const loadVideos = (searchText = "") => {
    // Fetch the data
    fetch(
      `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => displayVideos(data.videos))
      .catch((error) => console.log(error));
  };
  
  // Function to display categories
  const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
  
    // Clear the container before adding new buttons
    categoryContainer.innerHTML = "";
  
    categories.forEach((item) => {
      // Create a button for each category
      const button = document.createElement("button");
      button.classList = "btn";
      button.innerText = item.category;
  
      // Add button to the category container
      categoryContainer.append(button);
    });
  };
  
  // Function to display video details
  const displayDetails = (video) => {
    console.log(video);
    const detailContainer = document.getElementById("modal-content");
  
    detailContainer.innerHTML = `
      <img src=${video.thumbnail} />
      <p>${video.description}</p>
    `;
  };
  
  // Function to display videos
  const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videoContainer.innerHTML = "";
  
    if (videos.length == 0) {
      videoContainer.classList.remove("grid");
      videoContainer.innerHTML = `
        <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
          <img src="assets/Icon.png" /> 
          <h2 class="text-center text-xl font-bold"> No Content Here in this Category </h2> 
        </div>`;
    } else {
      videoContainer.classList.add("grid");
    }
  
    videos.forEach((video) => {
      // Create a card for each video
      const card = document.createElement("div");
      card.classList = "card card-compact";
  
      // Safely handle optional fields
      const thumbnail = video.thumbnail || "https://via.placeholder.com/300";
      const title = video.title || "No Title Available";
      const profileName = video.authors[0]?.profile_name || "Unknown Author";
      const profilePicture = video.authors[0]?.profile_picture || "https://via.placeholder.com/50";
      const postedDate = video.others?.posted_date || "";
      const verifiedIcon = video.authors[0]?.verified
        ? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>`
        : "";
  
      card.innerHTML = `
        <figure class="h-[200px] relative">
          <img src="${thumbnail}" class="h-full w-full object-cover" alt="Video Thumbnail" />
          ${
            postedDate.length > 0
              ? `<span class="absolute text-xs right-2 bottom-2 bg-black text-white rounded p-1">${getTimeString(postedDate)}</span>`
              : ""
          }
        </figure>
        <div class="px-0 py-2 flex gap-2">
          <div>
            <img class="w-10 h-10 rounded-full object-cover" src="${profilePicture}" />
          </div>
          <div>
            <h2 class="font-bold">${title}</h2>
            <div class="flex items-center gap-2">
              <p class="text-gray-400">${profileName}</p>
              ${verifiedIcon}
            </div>
            <p><button onclick="displayDetails(${JSON.stringify(video).replace(/"/g, '&quot;')})" class="btn btn-sm btn-error">Details</button></p>
          </div>
        </div>
      `;
  
      // Add the card to the video container
      videoContainer.append(card);
    });
  };
  
  // Function to convert timestamp to a readable string
  const getTimeString = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleDateString();
  };
  
  // Call functions to load and display data
  loadCategories();
  loadVideos();