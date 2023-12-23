export const typeDefs = `#graphql
  type Movie {
    id: ID!
    title: String!
    director: String!
    release_year: Int!
    genre: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    comment: String!
    author: Author!
    movie: Movie!
  }
  type Author {
    id: ID!
    name: String!
    email: String!
    reviews: [Review!]
  }
  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
 type Mutation {
    addMovie(movie: AddMovieInput!): Movie
    deleteMovie(id: ID!): [Movie]
    updateMovie(id: ID!, edits: EditMovieInput): Movie
  }
  input AddMovieInput {
    title: String!,
    director: String!,
    release_year: Int!,
    genre: [String!]!
  }
  input EditMovieInput {
    title: String,
    genre: [String!],
    release_year: Int
  } 
`