let movies = [
    {
        id: "1",
        name: "Inception",
        director_name: "Christopher Nolan",
        production_house: "Warner Bros",
        release_date: "2010",
        rating: 8.8
    },
];

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (parent, args) => movies.find(movie => movie.id === args.id)
    },
    Mutation: {
        addMovie: (parent, args) => {
            const newMovie = { id: String(movies.length + 1), ...args };
            movies.push(newMovie);
            return newMovie;
        },
        updateMovie: (parent, args) => {
            const index = movies.findIndex(movie => movie.id === args.id);
            if (index === -1) return null;
            movies[index] = { ...movies[index], ...args };
            return movies[index];
        },
        deleteMovie: (parent, args) => {
            const index = movies.findIndex(movie => movie.id === args.id);
            if (index === -1) return null;
            const deletedMovie = movies[index];
            movies = movies.filter(movie => movie.id !== args.id);
            return deletedMovie;
        }
    }
};

module.exports = resolvers;
