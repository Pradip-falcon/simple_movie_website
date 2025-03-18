const API_KEY = "7a92a58cdb0202e2eb42dbbc84b1f93f"; // Move this to an environment variable in production
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch popular movies");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error; // Re-throw the error to handle it in the component
    }
};

export const searchMovies = async (query) => {
    if (!query.trim()) {
        throw new Error("Search query cannot be empty");
    }

    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch search results");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        throw error; // Re-throw the error to handle it in the component
    }
};