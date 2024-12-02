"use client"
import React, { useEffect } from 'react'
import { Input } from './ui/input'
import SearchResult from './search-result'
import { Button } from './ui/button'
import { Search } from "lucide-react"
import { searchByUsername, searchByUuid, initialSearch } from '@/app/actions'
import type { User } from '@/lib/types'

const SearchContent = () => {

  const [ searchText, setSearchText ] = React.useState<string>("");
  const [ result, setResult ] = React.useState<User[]>([]);


  useEffect(() => {
    initialSearch().then((result) => {
      setResult(result ?? []);
    })
  }, [])

  const searchResult = async (result: User[] | null) => {
    setResult(result ?? []);
    console.log("yate nga reuslts",result)
  }
  return (
    <>
      <div className="flex relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search Users"
          className="w-full mr-2 appearance-none bg-background pl-8 shadow-none"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="flex space-x-1">
          <Button onClick={async () => {
            const result: User[] | null = await searchByUsername(searchText);
            result && searchResult(result);
          }} className="relative flex justify-between text-xs" variant={"secondary"}>
            Search by name
          </Button>
          <Button onClick={async () => {
            const result: User[] | null = await searchByUuid(searchText);
            result && searchResult(result);
          } } className="relative flex justify-between text-xs" variant={"secondary"}>
            Search by uid
          </Button>
        </div>
      </div>
      <div>
      </div>
      { result.length > 0 ? (<pre className="mt-3 font-medium text-lg">Users Found: { result.length   } </pre>) : null }
      <div className="border border-solid border-muted rounded-lg ">
        <SearchResult searchResult = {result} />
      </div>
    </>
  )
}

export default SearchContent