import React from 'react'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center py-12" role="status">
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
      </div>
      <span className="sr-only">Loading movies...</span>
    </div>
  )
}
export default Spinner
