
  let movies = [
    {
      id: 1,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      release_year: 1999,
      genre: ["Action", "Sci-Fi"]
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      release_year: 1972,
      genre: ["Crime", "Drama"]
    },
    {
      id: 49,
      title: "The Silence of the Lambs",
      director: "Jonathan Demme",
      release_year: 1991,
      genre: ["Crime", "Drama", "Thriller"]
    },
    {
      id: 50,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      release_year: 1994,
      genre: ["Drama"]
    }
  ]
  let  authors = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com"
    },
    {
      id: 49,
      name: "Michael Brown",
      email: "michael@example.com"
    },
    {
      id: 50,
      name: "Emily Johnson",
      email: "emily@example.com"
    }
  ]

  let reviews = [
    {
      id: 1,
      movie_id: 1,
      author_id: 1,
      rating: 9,
      comment: "Amazing movie with groundbreaking special effects."
    },
    {
      id: 2,
      movie_id: 1,
      author_id: 2,
      rating: 8,
      comment: "The story was captivating."
    },
    {
      id: 99,
      movie_id: 49,
      author_id: 49,
      rating: 9,
      comment: "Hannibal Lecter's character is iconic!"
    },
    {
      id: 100,
      movie_id: 50,
      author_id: 50,
      rating: 10,
      comment: "A timeless classic."
    }
  ]  

  export default { movies, authors, reviews }