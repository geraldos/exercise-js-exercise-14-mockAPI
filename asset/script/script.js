let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', add);

async function add() {
    try {
        let title = document.getElementById('title').value;
        let genre = document.getElementById('genre').value;
        let releaseYear = document.getElementById('release_year').value;
        let imgLink = document.getElementById('img_link').value;
        let description = document.getElementById('description').value;

        let movieData = {
            title,
            genre,
            releaseYear,
            imgLink,
            description
        };

        let url = `https://5ef168d71faf160016b4d5c1.mockapi.io/api/todoapp/movies`;

        let response = await fetch(url);
        let allMovies = await response.json();

        let addedMovie = allMovies.filter((movie) => movie.title === title);

        // Kalau sudah terdaftar
        if (addedMovie.length > 0) {
            alert(`Movie already exists`);
        } else {
            // Kalau belum terdaftar, lakukan registrasi
            let options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(movieData),
            };
            let response = await fetch(url, options);
            let result = await response.json();

            console.log(result)
            alert(`Thankyou, Movie has been added`);
        }
    } catch (error) {
        console.error(error);
    }
}


async function display() {
    let url = `https://5ef168d71faf160016b4d5c1.mockapi.io/api/todoapp/movies`;
    let options = {
        method: 'GET',
        // headers: {
        //     'Content-type': 'application/json'
        // },
    }

    let response = await fetch(url, options);
    let results = await response.json();

    results.forEach((element) => {
        let card = document.createElement("div");
        card.setAttribute("class", "card")
        card.setAttribute("style", "width: 18rem;")

        card.innerHTML = `
            <img src="${element.imgLink}" alt="" />
                <div class="card-body">
                    <h4 class="card-title">${element.title}</h4>
                    <h5 class="card-title">${element.releaseYear}</h5>
                    <p class="card-text">${element.description}</p>
                </div>`;

        let form = document.getElementsByClassName('form')
        form[0].appendChild(card)
    });
    console.log(results)
}
display()