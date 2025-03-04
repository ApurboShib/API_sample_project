console.log("hello from video");

// 1. Fetch, load, and show categories on HTML.

// Function to load categories
const loadCatagories = () => {
    console.log("load categories created");

    // Fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    // .then(data => console.log(data.categories)) // ei data ta display catagories eh pathabo.
    .then(data => displayCatagories(data.categories))
    .catch(err => console.log(err))


};

// Function to display categories
const displayCatagories = (data) => {
    console.log("display categories created");
    console.log(data);
   
};

// Call functions
loadCatagories();
displayCatagories();
