"use client"
import React from 'react'
import { Input } from './ui/input'
import SearchResult from './search-result'
import { Button } from './ui/button'
import { Search } from "lucide-react"

const SearchContent = () => {

  const [ search, setSearch ] = React.useState<string>("");


  const searchUser = (search: string) => {
    console.log(search)
  }
  return (
    <>
      <div className="flex relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search Users"
          className="w-full mr-2 appearance-none bg-background pl-8 shadow-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex space-x-1">
          <Button onClick={() => searchUser(search)} className="relative flex justify-between text-xs" variant={"secondary"}>
            Search by name
          </Button>
          <Button className="relative flex justify-between text-xs" variant={"secondary"}>
            Search by uid
          </Button>
        </div>
      </div>
      <div>
      </div>
      <div className="mt-3 border border-solid border-muted rounded-lg ">
        <SearchResult/>
        
      </div>
    </>
  )
}

export default SearchContent