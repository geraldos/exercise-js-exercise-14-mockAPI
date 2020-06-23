let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', add);

async function add() {
    try {
        let title = document.getElementById('title').value;
        let genre = document.getElementById('genre').value;
        let releaseYear = document.getElementById('release_year').value;
        let img_link = document.getElementById('img_link').value;

        let movieData = {
            title,
            genre,
            releaseYear,
            imglink
        };

        let url = `https://5ef168d71faf160016b4d5c1.mockapi.io/api/todoapp/movies`;

        let response = await fetch(url);
        let allMovies = await response.json();

        let addedMovie = allMovies.filter((movie) => movie.title === title);

        // Kalau sudah terdaftar
        if (addedMovie.length > 0) {
            alert(`Movie sudah terdaftar`);
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
            alert(`Terima kasih sudah mendaftar`);
        }
    } catch (error) {
        console.error(error);
    }
}