import React from 'react'

export default function SearchBar() {
  return (
    <div>
        <div class="pt-2 relative mx-auto text-gray-600">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search"></input>
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            </button>
      </div>
    </div>
  )
}
