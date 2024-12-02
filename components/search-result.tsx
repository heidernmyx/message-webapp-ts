import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { User } from '@/lib/types'
import { addFriend } from '@/app/actions'

interface SearchResultProps {
  searchResult: User[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResult }) => {

  console.log("searchResult", searchResult)
  return (
    <>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] pr-[10vw]">Name</TableHead>
            <TableHead className="text-center">Actions</TableHead>
            {/* <TableHead className="text-center"></TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          { searchResult.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium flex items-center justify-start space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className='text-base'>{user.display_name}</p>
                </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center space-x-2">
                  {/* <Button variant={"default"}>Accept</Button>
                  <Button variant={"secondary"}>Decline</Button> */}
                  <Button onClick={() => addFriend(user.id)} variant={"default"}>Add Friend</Button>
                </div>
              </TableCell>
              {/* <TableCell className="text-center">
                <Button variant={"secondary"}>Decline</Button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  )
}

export default SearchResult