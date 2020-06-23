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