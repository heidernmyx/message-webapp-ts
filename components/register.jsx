"use client"
import Link from "next/link";
import Image from"next/image";
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, CheckIcon } from "lucide-react"
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
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import FormTitle from "@/components/form_title";
import Cat_gif from "@/assets/gif/cat-nyan-cat.gif";
import ModeToggle from "./ui/mode-toggle";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import { supabase } from "@/lib/supabase";

const Register = () => {

  const { register, setValue, handleSubmit, setError ,formState: { errors, isSubmitting}, control} = useForm();

  // const [ showMessage, setshowMessage ] = useState(false);

  const registerSubmit = async (form) =>{

    try {
      const response = await fetch(`/api/availability_check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // reque
      const result = await response.json();
      console.log(result ? result : false);
      console.log(true)

      // code below runs if there is a message from api
      // meaning the uname or email is already taken
      if (result) {
        console.log('nay sulod ang result')
        console.log(true)
        setError("root", {
          message: result.message
        })
        throw new Error();
      }
    } catch (error) {
      
      console.log('ayye')
      return;
    }

    try {
      console.log("nag register")
      const response = await fetch('/api/register_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });


      const result = await response.json();
      console.log(result ? result : false)
      handleRef();

    } catch (error) {
      
    }
  }

  const modalTrigger = React.useRef(null);
  const login = React.useRef(null);
  
  const handleRef = () =>{
    modalTrigger.current.click();
    setTimeout(() => {
      login.current.click();
    }, 2000);
  }


  return (
    <div className="flex justify-center">
      <div className="w-[32vw] border-l border-r border-black py-[5vh] px-[3vw] bg-stone-500/10">
        <form  onSubmit={handleSubmit(registerSubmit)}>

          <FormTitle title="Register"/>
          <Label htmlFor="username">Username</Label>
          <Input {...register('reg_username',{
            required: "Enter username!",
            // validate: (value) => value.length === 0 ? "empty" : true,
            minLength: {value: 4, message: "Username must have more than 4 characters"},
            maxLength: {value: 20, message: "Username must not exceed 50 characters"},
          })} className="mt-[1vh]" type="text"/>
          {errors.reg_username && (<div className="text-red-600">{errors.reg_username.message}</div>)}
        
          <Label htmlFor="">Password</Label>
          <Input {...register('reg_password', {
            required: "Enter password!",
            // validate: (value) => value.length === 0 ? "" : true,
            minLength: {value: 4, message: "Password must have more than 4 characters"},
          })} className="mt-[1vh]" type="password"/>
          {errors.reg_password && (<div className="text-red-600">{errors.reg_password.message}</div>)}

          <Label htmlFor="">First Name</Label>
          <Input {...register("fname", {
            required: "Enter Name",
          })} className="mt-[1vh]" type="text"/>
          {errors.fname && (<div className="text-red-600">{errors.fname.message}</div>)}

          <Label htmlFor="">Middle Name</Label>
          <Input {...register("mname", {
          })} className="mt-[1vh]" type="text"/>

          <Label htmlFor="">Last Name</Label>
          <Input {...register("lname", {
            required: "Enter Last Name",
          })} className="mt-[1vh]" type="text"/>
          {errors.lname && (<div className="text-red-600">{errors.lname.message}</div>)}

          <Label htmlFor="">Email</Label>
          <Input {...register("email", {
            required: "Enter an Email",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @"
              }
              return true;
            },
          })} className="mt-[1vh]" type="text"/>
          {errors.email && (<div className="text-red-600">{errors.email.message}</div>)}

          <div className="flex my-[0.6vh] flex-grow">
            <div className="w-[100%]">
              <Label htmlFor="">Birthdate</Label>
              <div className="w-[100%]">
                {/* <Input className="flex-grow w-[100%] border-black border-[1.5px] rounded p-[1vh] pr-2 my-[0.6vh]" type="date"/> */}
                {/* <input className="flex-grow w-[100%] border-black border-[1.5px] rounded p-[1vh] pr-2 my-[0.6vh]" type="date" /> */}
                <input {...register("birthdate",{
                      required: "Select Birthdate!"
                    })} 
                    className="flex h-9 w-full my-[0.6vh] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" type="date" />
                {/* <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant={"outline"}
                      className={cn(
                        // "w-[280px] justify-start text-left font-normal",
                        // !date && "text-muted-foreground"
                        "flex-grow justify-start text-left font-normal w-[100%] bg-inherit rounded p-[1vh] pr-2 my-[0.6vh]"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover> */}
              </div>
              {errors.birthdate && (<div className="mr-2 text-red-600">{errors.birthdate.message}</div>)}
            </div>

            <div className="w-[1.5vw]"></div>
            <div className="flex-grow w-[100%]">
              <Label htmlFor="">Gender</Label>
              <div className="w-[100%]">
                {/* <select className="w-full pl-2 border-black border-[1.5px] p-[1vh] rounded my-[0.6vh]" name="" id="">
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Prefer not to say</option>
                </select> */} 
                {/* <Select onValueChange={(event) => {handleGender(event)}}> */}
                <Select onValueChange={(event) => setValue("gender", event)}>
                  <SelectTrigger className="w-[100%] my-[0.6vh]" > 
                    <SelectValue value="test" {...register("gender", {required: "required"})} placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>

                {errors.gender && (<div className="mr-2 text-red-600">{errors.gender.message}</div>)}

                {/* <select {...register ('gender', {required: "Please select a gender"})} value={selectedGender}
                  className="flex pl-2 h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                  <option className={optionClass} value="test">test</option>
                  <option className={optionClass} value="male">male</option>
                </select> */}
              </div>
            </div>
          </div>
              
          <div className="flex mt-4">
            <div className="w-[2vw] h-[2vw] flex justify-center items-center">
              <input 
              {...register("checkbox", {
                required: "Please make sure to read and agree to the terms and conditions before proceeding.",
              })}
              className="w-[1.2vw] h-[1.2vw] mr-1 mb-1" type="checkbox" name="checkbox" id="" />
            </div>
            {errors.checkbox && console.log(errors.checkbox.message) }
            <p>I have read and agree to the <Link className="underline" href={''}>terms and conditions</Link> and <Link className="underline" href={''}>privacy policy</Link>.</p>
          </div>
            
          {/* <input className={`${buttonVariants()} w-[100%] mt-[1vh] border-[1.5px] rounded h-[6vh] hover:bg-opacity-35`} type="submit" value="Open" /> */}
          <Button className=" w-[100%] mt-[1vh] border-[1.5px] rounded h-[6vh] hover:bg-opacity-35`" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Register"}
          </Button>
          {/* {availabilityMessage && <div className="text-red-500">{availabilityMessage}</div>} */}
          {errors.root &&  (<div className="text-red-500">{errors.root.message}</div>)}
          <AlertDialog>
            {/* <Button className="w-[100%] mt-[1vh] border-[1.5px] rounded h-[6vh] hover:bg-opacity-35">Register</Button> */}
            {/*  */}

            <AlertDialogTrigger ref={modalTrigger} className="hidden">Register</AlertDialogTrigger>

            <AlertDialogContent className="" >
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center">Account Successfully Created!</AlertDialogTitle>
                <AlertDialogDescription>
                <center>  
                  <Image className="flex justify-center items-center w-[20vw] h-[40vh]" src={Cat_gif} alt="gif after register"/>
                  <p>Proceeding to Login...</p>
                </center>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <br /><br />
          <Link ref={login} className="mb-9 underline" href={'/'}>Already Have an Account?</Link>
        </form>
      </div>
      <div className="absolute top-1 right-1">
        <ModeToggle/>
      </div>
    </div>
    
  );
}

export default Register;


