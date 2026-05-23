const Search = ({searchTerm , setSearchTerm}) => {
  return (
    <div className="search group">
      <div>
        <svg 
          className="absolute left-4 h-5 w-5 text-gray-400 transition-all duration-300 group-focus-within:text-blue-500 group-focus-within:scale-110" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
        <input 
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent py-3 sm:pr-4 pl-12 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 rounded-lg"
        />
      </div>
    </div>
  )
}

export default Search
