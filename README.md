# MovieFlix

A modern, fast, and elegant movie discovery application. Search for your favorite movies, explore trending titles, and build your personal watchlist with a seamless user experience powered by cutting-edge web technologies.

## Features

- **Intelligent Search** - Real-time movie search with debounced queries for optimal performance
- **Trending Movies** - Stay updated with the latest trending films tracked and ranked by popularity
- **Search Analytics** - Track your most searched movie terms with persistent data storage
- **Responsive Design** - Beautiful, mobile-first UI that works across all devices
- **Fast Performance** - Lightning-quick load times with Vite's next-generation bundling
- **Error Handling** - Graceful error states and user-friendly messages

## Tech Stack

- **Frontend Framework** - React 19.2 with Hooks for state management
- **Build Tool** - Vite 8 for blazing-fast development and production builds
- **Styling** - Tailwind CSS 4 for utility-first, responsive design
- **API Integration** - The Movie Database (TMDB) API for comprehensive movie data
- **Backend** - Appwrite for serverless backend and analytics
- **Utilities** - React-use for custom hooks like useDebounce

## Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- VITE_TMDB_API_KEY environment variable (get one at [tmdb.org](https://www.themoviedb.org/settings/api))

### Installation

```bash
# Clone the repository
git clone https://github.com/riokishanea/movie-app-jsmastery.git
cd sample_2

# Install dependencies
npm install

# Create .env.local and add your TMDB API key
echo "VITE_TMDB_API_KEY=your_api_key_here" > .env.local

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

```bash
# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm lint
```

## Project Structure

```
src/
├── components/
│   ├── Search.jsx       # Search input component
│   ├── MovieCard.jsx    # Individual movie card display
│   └── Spinner.jsx      # Loading spinner component
├── App.jsx              # Main application component
├── App.css              # Application styles
├── main.jsx             # React DOM entry point
├── index.css            # Global styles
└── appwrite.js          # Appwrite client configuration & API calls
```

## How It Works

1. **Movie Discovery** - Browse popular movies on initial load
2. **Search Functionality** - Type to search with 500ms debounce to prevent API rate limits
3. **Trending Tracking** - The app displays trending movies pulled from your analytics database
4. **Search History** - Every search is logged via Appwrite for analytics and trending calculation

## Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

## ESLint Configuration

The project includes ESLint with React-specific rules. Run `npm run lint` to check for code quality issues.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- Watchlist/favorites functionality
- Movie details modal with ratings and reviews
- User authentication and personalized recommendations
- Dark mode toggle
- Advanced filtering and sorting options

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TMDB API Documentation](https://developer.themoviedb.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)

---

Built with passion for the perfect movie night experience.
