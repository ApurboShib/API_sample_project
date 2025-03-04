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
// category_id: '1001', category: 'Music'

// Function to display categories
const displayCatagories = (categories) => {

    const catagoryContainer = document.getElementById('categories');

    // console.log("display categories created");
    // console.log(data);
    categories.forEach(item => {
        console.log(item);
        // for each item, create a button.

        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;

        // add button to category container.
        catagoryContainer.append(button);
        
    })
   
};

// Call functions
loadCatagories();
displayCatagories();
