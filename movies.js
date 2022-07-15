const movies = [
    {
    "id": 3,
    "title": "Drive",
    "genre": "Thriller",
    "release_date": "2011-07-04T22:00:00.000Z",
    "description": "An action drama about a mysterious Hollywood stuntman and mechanic who moonlights as a getaway driver, and finds himself in trouble when he helps out his neighbor.",
    "image_url": "https://fwcdn.pl/fpo/97/46/399746/7392537.3.jpg",
    "director_id": 2
    },
    {
    "id": 2,
    "title": "Avengers: Endgame",
    "genre": "Action",
    "release_date": "2019-06-28T22:00:00.000Z",
    "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
    "image_url": "https://cat5.pl/wp-content/uploads/2019/05/avengers1.jpg",
    "director_id": 1
    },
    {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "release_date": "1994-09-21T22:00:00.000Z",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    "director_id": 2
    },
    {
    "id": 7,
    "title": "Blade Runner 2049",
    "genre": "Mystery",
    "release_date": "2017-07-14T22:00:00.000Z",
    "description": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    "image_url": "https://fwcdn.pl/fpo/07/98/630798/7801880.3.jpg",
    "director_id": null
    },
    {
    "id": 8,
    "title": "Forrest Gump",
    "genre": "Drama",
    "release_date": "1994-02-10T23:00:00.000Z",
    "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    "image_url": "https://a.allegroimg.com/original/110b0f/463965e541c6bba8ae160afb21f0/FILM-DVD-FORREST-GUMP-POLSKI-JEZYK",
    "director_id": null
    },
    {
    "id": 9,
    "title": "Fight Club",
    "genre": "Drama",
    "release_date": "1999-03-16T23:00:00.000Z",
    "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    "image_url": "https://m.media-amazon.com/images/I/81JWVTlPQ2L.jpg",
    "director_id": null
    },
    {
    "id": 10,
    "title": "Inception",
    "genre": "Action",
    "release_date": "2010-08-16T22:00:00.000Z",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "image_url": "https://repertuary.pl/images/dbimages/film_6994_large_1.jpg",
    "director_id": null
    },
    {
    "id": 11,
    "title": "The Matrix",
    "genre": "Sci-Fi",
    "release_date": "1999-12-07T23:00:00.000Z",
    "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "director_id": null
    },
    {
    "id": 12,
    "title": "The Green Mile",
    "genre": "Drama",
    "release_date": "1999-08-12T22:00:00.000Z",
    "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    "image_url": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5378ac641baa3bdd7f4d382c354180228b32fa3bfe7f7cc4adeedddedb3341ed._RI_V_TTW_.jpg",
    "director_id": null
    },
    {
    "id": 13,
    "title": "Interstellar",
    "genre": "Sci-Fi",
    "release_date": "2015-07-04T22:00:00.000Z",
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "image_url": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "director_id": null
    },
    {
    "id": 14,
    "title": "Back to the Future",
    "genre": "Comedy",
    "release_date": "1985-03-09T23:00:00.000Z",
    "description": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    "image_url": "https://static.posters.cz/image/750/plakaty/back-to-the-future-i2795.jpg",
    "director_id": null
    },
    {
    "id": 15,
    "title": "American Beauty",
    "genre": "Drama",
    "release_date": "1999-05-12T22:00:00.000Z",
    "description": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    "image_url": "https://ae01.alicdn.com/kf/HTB1XrUNLVzqK1RjSZFCq6zbxVXaF/AMERICAN-BEAUTY-MOVIE-jedwabny-plakat-malarstwo-cienne-24x36-cali.jpg_Q90.jpg_.webp",
    "director_id": null
    },
    {
    "id": 18,
    "title": "The Truman Show",
    "genre": "Comedy",
    "release_date": "1998-04-13T22:00:00.000Z",
    "description": "An insurance salesman discovers his whole life is actually a reality TV show.",
    "image_url": "https://mr.comingsoon.it/imgdb/locandine/big/33756.jpg",
    "director_id": null
    },
    {
    "id": 20,
    "title": "Parasite",
    "genre": "Drama",
    "release_date": "2019-04-13T22:00:00.000Z",
    "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "image_url": "https://images.justwatch.com/poster/130011621/s718/parasite-2019.%7Bformat%7D",
    "director_id": null
    },
    {
    "id": 16,
    "title": "Inglourious Basterds",
    "genre": "War",
    "release_date": "2009-10-13T22:00:00.000Z",
    "description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    "image_url": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
    "director_id": null
    },
    {
    "id": 17,
    "title": "Taxi Driver",
    "genre": "Crime",
    "release_date": "1976-08-13T23:00:00.000Z",
    "description": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
    "image_url": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "director_id": null
    },
    {
    "id": 21,
    "title": "Avatar",
    "genre": "Fantasy",
    "release_date": "2009-11-18T23:00:00.000Z",
    "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "image_url": "https://static.toiimg.com/photo/msid-5348868/5348868.jpg?26276",
    "director_id": null
    },
    {
    "id": 22,
    "title": "Pulp Fiction",
    "genre": "Crime",
    "release_date": "1994-05-13T22:00:00.000Z",
    "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "image_url": "https://cdn.chili.com/images/public/cms/02/14/00/c4/021400c4-363d-4dac-adb7-0485c5627283.jpg?width=800",
    "director_id": null
    },
    {
    "id": 23,
    "title": "The Godfather",
    "genre": "Crime",
    "release_date": "1972-07-12T23:00:00.000Z",
    "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    "image_url": "https://www.weekendowo.pl/upload/images/be7324fe2e062e44dc2cfaea67d5a1f1.jpg",
    "director_id": null
    },
    {
    "id": 19,
    "title": "Jurassic Park",
    "genre": "Adventure",
    "release_date": "1993-01-13T23:00:00.000Z",
    "description": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    "image_url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f00bf346385235.58520f9022451.jpg",
    "director_id": null
    }
    ]
