"use client"
import Link from "next/link";
import FormTitle from "./form_title";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
// import { supabase } from "@/lib/supabase"
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
// import { UserContext } from "../pages/api/usercontext";
const Login = () => {


  // const { set_userSession } = useContext(UserContext);

  // const { register, handleSubmit , formState: { errors, isLoading, isSubmitting }} = useForm();
  // const router = useRouter();
  // const [ message, setMessage] = useState("");
  // const onSubmitForm = async (data) => {
    
    // try {
    //   const { data: userData, error, status } = await supabase
    //     .from("tbl_account")
    //     .select("account_id, account_username, account_password")
    //     .eq("account_username", data.username) // ? data.username === input from user
    //     .eq("account_password", data.password) // ? samething goes for password
    //     .single()
      
    //   if (error) {
    //     throw error;
    //   }
      
      // if (userData) {
      // Logging the retrieved data from supabase
      // console.log(userData);
      // * there are 2 ways of accessing an objects data, depending on the query that has ben made
      // * if a query has more than one result then it will automatically return an array
      // * so accessing a value is as follows 
      // console.log(userData[0].account_username);

      // else if a query only returns a single value or the query has ".single()" included
      // then the query will return an object instead of an array, and its values can
      // be accessed like sample shown below
      // console.log(userData.account_username); // Accessing the username from user data
      // console.log("input by user", data.username);
      //   console.log(userData)
      //   set_userSession({
      //   id: userData.account_id,
      //   username: userData.account_username
      // })
  //     console.log(true)
  
  //       console.log("Login successful");
  //       router.push('/dashboard')

  //     } else {
  //       console.log("User data not found");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //     displayError("Wrong username or password")
  //   }
  // }
  const displayError = (error) => {
    return setMessage(error);
  }

  // const addcss_loadingBg = isSubmitting ? "cursor-wait": "hover:bg-opacity-35"
  const loginButtoncss = `w-[100%] border-[1.5px] rounded h-[6vh] ${addcss_loadingBg}`;

  return (
    <div className="">
      <div className="flex justify-center mt-[14vh] ">
        <div className="w-[30vw] h-[68vh] border-black border rounded-[10px] p-[6vh] bg-stone-500/10">
          <FormTitle className="text-center" title="Login"/>
          <br /><br />  
          <form 
          // onSubmit={handleSubmit(onSubmitForm)}
          >
            <Label htmlFor="username">Username</Label>
            <Input {...register("username", {
              required: "Enter username!",
              validate: (value) => value.length === 0 ? "Empty" : true,

              // ! future references
              // minLength: {value: 4, message: "Username must have more than 4 characters"}
            })} className="mt-[1vh]" type="text"/>
            {errors.username && (<div className="text-red-600">{errors.username.message}</div>)}

            {/* spacer div  */}
            <div className="mt-[1vh]"></div>

            <Label htmlFor="password">Password</Label>
            <Input {...register("password", {
              required: "Enter password!",
              validate: (value) => value.length ===0 ? "Empty" : true,
            })} className="mt-[1vh]" type="password"/>
            {errors.password && (<div className="text-red-600">{errors.password.message}</div>)}
            <br /><br />
            <Button className={loginButtoncss}>Login</Button>
            {/* {isLoading &&} */}
            
            <div className="text-red-600">{ message && [message]}</div>
          </form>
          <br />
          <div>
            <p>Dont have an Account yet? <Link className="underline cursor-" href="./register_page">Register here!</Link></p>
          </div>
      </div>
    </div>
    </div>
    
  );
}

export default Login;
