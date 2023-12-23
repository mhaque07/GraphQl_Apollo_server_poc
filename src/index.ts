import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// data
import db from './_db.js'

// load the schema
import { typeDefs } from './schema.js'

// resolvers for the schema 
// this is entry point for collecting data and resolving schema
const resolvers = {
  Query: {
    movies() {
      return db.movies
    },
   movie(_ :any, args: any) {
      return db.movies.find((movie: any) =>  movie.id == args.id)
    }, 
    authors() {
      return db.authors
    },
    author(_ : any, args : any) {
      return db.authors.find((author : db.author) => author.id == args.id)
    }, 
    reviews() {
      return db.reviews
    },
    review(_ : any, args : any) {
      return db.reviews.find((review : db.review) => review.id == args.id)
    } 
  },
  Movie: {
    reviews(parent : any) {
      return db.reviews.filter((r :db.review) => r.movie_id == parent.id)
    }
  },
  Review: {
    author(parent : any) {
      return db.authors.find((a: any) => a.id == parent.author_id)
    },
    movie(parent: any) {
      return db.movies.find((g: any) => g.id == parent.movie_id)
    }
  },
  Author: {
    reviews(parent: any) {
      return db.reviews.filter((r: any) => r.author_id == parent.id)
    }
  },
  Mutation: {
    addMovie(_:any, args: any) {
      let movie = {
        ...args.movie, 
        id: Math.floor(Math.random() * 50000).toString()
      }
      db.movies.push(movie)

      return movie
    },
    deleteMovie(_:any, args:any) {
      db.movies = db.movies.filter((g:any) => g.id != args.id)

      return db.movies
    },
    updateMovie(_:any, args:any) {
      db.movies = db.movies.map((g:any) => {
        if (g.id == args.id) {
          return {...g, ...args.edits}
        }

        return g
      })

      return db.movies.find((g:any) => g.id == args.id)
    }
  }
}

// server setup this will accept the typeDefs and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// start the server and listen on port 4000
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`Server ready at: ${url}`)