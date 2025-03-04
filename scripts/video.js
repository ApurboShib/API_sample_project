// console.log("hello from video");

// 1. Fetch, load, and show categories on HTML.

// Function to load categories
const loadCatagories = () => {
    // console.log("load categories created");

    // Fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    // .then(data => console.log(data.categories)) // ei data ta display catagories eh pathabo.
    .then(data => displayCatagories(data.categories))
    .catch(err => console.log(err))


};
// category_id: '1001', category: 'Music'

//function to load videos.

const loadVideos = () => {
    // console.log("load videos created");

    // Fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    // .then(data => console.log(data.categories)) // ei data ta display videos eh pathabo.
    // .then(data => console.log(data.videos))
    .then(data => displayVideos(data.videos))
    // .then(data => console.log(data))
    .catch(err => console.log(err))

};



// Function to display categories
const displayCatagories = (categories) => {

    const catagoryContainer = document.getElementById('categories');

    // console.log("display categories created");
    // console.log(data);
    categories.forEach(item => {
        // console.log(item);
        // for each item, create a button.

        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;

        // add button to category container.
        catagoryContainer.append(button);

    })
   
};

// function to display videos.

const displayVideos = (videos) => {
    // console.log("display videos");
    const videoContainer = document.getElementById("videos");

    videoContainer.innerHTML = ""; 

    videos.forEach(video => {
        // console.log(video);

        const cart = document.createElement("div");
        cart.classList = "card bg-base-100 w-96 shadow-sm";

     
        cart.innerHTML = `
            <figure>
                <img
                  src="${video.thumbnail}" 
                  alt="Video Thumbnail" 
                  class="w-full h-52 object-cover rounded-lg"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                  ${video.title || "No Title Available"}
                  ${video.isNew ? '<div class="badge badge-secondary">NEW</div>' : ''}
                </h2>
                <p>${video.description || "No description available."}</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">${video.category || "Uncategorized"}</div>
                  <div class="badge badge-outline">More Info</div>
                </div>
            </div>
        `;

        videoContainer.append(cart); 
    });
};


// Call functions
loadCatagories();
loadVideos();
// displayVideos();