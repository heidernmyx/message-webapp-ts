"use client"
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Input } from "../components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
// import { Label } from "../components/ui/"
import FriendList from "../components/friedlist"
// import { UserContext } from "./api/usercontext"
import { useContext, useEffect, useState, useRef } from "react"
import Name from "../components/name"
import { FC } from "react"
import Username from "./username"
// import { cookies } from "next/headers"

// interface DashboardProps {
//   username: string
// }

const DashboardContent: FC = ( ) => {


  // const { data: session } = useSession();
  // console.log(session)
  // const cookiesStored = cookies();
  // const usersessionName = cookiesStored.get("email");

  // const ref = useRef();
  // const { userSession } = useContext(UserContext);
  // const [ isLoading, setLoading ] = useState(true);

  // useEffect(() => {
  //   if (!userSession) {
  //     router.back();
  //   }
  //   else {
  //     setLoading(false)
  //   }
  // },[userSession])
  // const modalTrigger = useRef();

  // const fetchSession = async () => {
  //   try {
  //     console.log('inside try block')
  //     const response = await fetch(`api/action`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       // body: JSON.stringify(form)
  //     }); // Correct endpoint
  //     console.log(response)
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const session = await response.json();
  //     console.log(session);
  //   } catch (error) {
  //     console.error('Error fetching session:', error);
  //   }
  // };
  // fetchSession();

  // if (isLoading) {
  //   return null
  // }
  // useEffect(() => {
    
  // }, []);

  return (
    <SessionProvider>
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">

            <div className="grid items-start px-2 text-base lg:px-4">
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search Friends..."
                      className="w-full appearance-none bg-background pl-8 shadow-none"
                    />
                  </div>
                </form>
              </div>
              {/* <Input> asd</Input> */}
              {/* <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6 
                </Badge>
              </Link> */}
              
              <div className="flex flex-1 w-full justify-center items-center mx-[10px]">
                {/* <Label className="text-[18px] font-normal" htmlFor="select">Filter</Label> */}
              </div>
              <Select
                // onValueChange={(event) => setValue("gender", event)}
              >
                <SelectTrigger id="select" className="flex-auto w-full my-[0.6vh] appearance-none bg-background shadow-none" > 
                  {/* <SelectValue value="Active" placeholder="Active"/> */}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active Friends</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Recent">Recent Messages</SelectItem>
                </SelectContent>
              </Select>
              <ScrollArea className="mt-[0.6vh]whitespace-nowrap pt-1 pb-1 rounded-xl border shadow-inner">
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <FriendList/>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
          <div className="mt-auto p-4">
            {/* <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Friends</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Test</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                {/* <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card> */}
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <AlertDialog>
                  {/* <Button> */}
                    <AlertDialogTrigger>Find Users</AlertDialogTrigger>
                  {/* </Button> */}
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>


                {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
                {/* <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                /> */}
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="flex my-[0.2vw] p-[0.6vw] w-auto h-[7vh] rounded-2xl">
                  <Avatar className="mr-1">
                    {/* Placeholder image */}
                    <AvatarImage src="https://qehuvczvazgtcxjwlkdq.supabase.co/storage/v1/object/public/avatars/profile/ae86.gif"/>
                    <AvatarFallback>
                      <CircleUser className="h-5 w-5" />  
                      zxc
                      <span className="sr-only">Toggle user menu</span>
                    </AvatarFallback>
                  </Avatar>
                  <Username/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex">
            <Avatar>
              <AvatarImage src="/assets/gif/cat-nyan-cat.gif"/>
              <AvatarFallback>img</AvatarFallback>
            </Avatar>
            <div className="flex items-center">
              <h1 className="text-lg font- md:text-base">Imong friend</h1>
            </div>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
    </SessionProvider>
  )
}


export default DashboardContent;