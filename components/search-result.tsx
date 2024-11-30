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



const SearchResult:React.FC = () => {
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
          <TableRow>
            <TableCell className="font-medium flex items-center justify-start space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className='text-base'>Heidern</p>
              </TableCell>
            <TableCell className="text-center">
              <div className="flex justify-center space-x-2">
                {/* <Button variant={"default"}>Accept</Button>
                <Button variant={"secondary"}>Decline</Button> */}
                

                <Button variant={"default"}>Add Friend</Button>
              </div>
            </TableCell>
            {/* <TableCell className="text-center">
              <Button variant={"secondary"}>Decline</Button>
            </TableCell> */}
          </TableRow>
        </TableBody>
      </Table>

    </>
  )
}

export default SearchResult