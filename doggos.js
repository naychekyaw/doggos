//start of inserting select options
const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        

        for ( let i = 0; i < breedsArray.length ; i++) {
            const option = document.createElement ('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })
//end of select options

select.addEventListener('change', function(event){

    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`

    getDoggo(url);
});

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

function getDoggo (url) {

    img.classList.add('hide');
    spinner.classList.add('show');

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(data => {
            img.src = data.message;//we get only img link at this
            // spinner.classList.remove('show');
            // img.classList.remove('hide');
        })  
}

//we get the full image now
img.addEventListener("load", function (){
    spinner.classList.remove('show');
    img.classList.remove('hide');
})