'use client'
import React, { Component, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog"
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import FormTitle from '../components/form_title';
import { registerSchema } from '@/lib/zod';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

type formFields = z.infer<typeof registerSchema>

const Form_input = () => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<formFields>({
    resolver: zodResolver(registerSchema)
  })

  const [ registerMessage, setRegMessage ] = useState("");
  
  const Register: SubmitHandler<formFields> = async (data: any) => {
    console.log("Form submitted", data);
    
    try {
      const response = await fetch('/api/register', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
  
      const result = await response.json();
      console.log("Result of fetch is: ", result)

      const { data:userData , error} = result
      
      if(userData) {
        console.log(userData)
        // handleref()
      }
      else if (error) {
        // !
        console.log(error.message)
        setRegMessage(error.message);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const modalTrigger = useRef<HTMLButtonElement>(null);
  // ! call handleref function upon 
  // ! having a success register
  // ? make sure the alertdialog trigger being read
  const handleref = () => {
    console.log('handleref')
    if (modalTrigger.current) {
      modalTrigger.current.click();
      console.log(true)
    }
  }
  // const login = React.useRef(null);
  return (
    <form onSubmit={handleSubmit(Register)}>
      <FormTitle title="Register" />
      <Label>Username</Label>
      <Input className="mt-[1vh]" type='text' {...register("username", { required: true })} />
      <Label>Password</Label>
      <Input className="mt-[1vh]" type='password' {...register("password", { required: true })} />
      <Label>First name</Label>
      <Input className="mt-[1vh]" type='text' {...register("firstName", { required: true })} />
      <Label>Middle name</Label>
      <Input className="mt-[1vh]" type='text' {...register("middleName")} />
      <Label>Last name</Label>
      <Input className="mt-[1vh]" type='text' {...register("lastName", { required: true })} />
      <Label>Email</Label>
      <Input className="mt-[1vh]" type='email' {...register("email", { required: true })} />

      <div className="flex my-[0.6vh] flex-grow">
        <div className="w-[100%]">
          <Label htmlFor="">Birthdate</Label>
          <div className="w-[100%]">
            <input
              {...register("birthdate", { required: "Select Birthdate!" })}
              className="flex h-10 w-full my-[0.6vh] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                      // flex h-10 w-full my-[0.6vh] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50
                      type="date"
            />
            {/* Error message */}
          </div>
        </div>
        <div className="w-[1.5vw]"></div>
        <div className="w-[100%]">
          <Label htmlFor="">Gender</Label>
          <div className="w-[100%]">
            <Select onValueChange={(event) => setValue('gender', event)}>
              <SelectTrigger className="w-[100%] my-[0.6vh]">
                <SelectValue {...register("gender", {required: "Required"})} placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
            {/* Error message */}
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-[2vw] h-[2vw] flex justify-center items-center">
          <input
            {...register("checkbox", {
              required: "Please make sure to read and agree to the terms and conditions before proceeding.",
            })}
            className="w-[1.2vw] h-[1.2vw] mr-1 mb-1"
            type="checkbox"
            name="checkbox"
            id=""
          />
        </div>
        <p>I have read and agree to the <Link className="underline" href={''}>terms and conditions</Link> and <Link className="underline" href={''}>privacy policy</Link>.</p>
      </div>
      <Button className="w-[100%] mt-[1vh] border-[1.5px] rounded h-[6vh] hover:bg-opacity-35">Register</Button>

      <AlertDialog>

        {/* <AlertDialogTrigger ref={modalTrigger}
          className="hidden">Register</AlertDialogTrigger> */}

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">Account Successfully Created!</AlertDialogTitle>
            <AlertDialogDescription>
              <center>
                <Image src='/assets/gif/cat-nyan-cat.gif' width='10' height='10' className="flex justify-center items-center w-[20vw] h-[40vh]" alt="gif after register" />
                <p>Proceeding to Login...</p>
              </center>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {registerMessage && <div className='text-red-500'>{registerMessage}</div>}
    </form>
  )
}

export default Form_input
