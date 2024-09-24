"use client"

import React, { useEffect, useState } from "react";
import {auth,provider} from "../../app/config";
import {signInWithPopup} from "firebase/auth";

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
        })
    }

    const deleteAccount = async () => {
        if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
          try {
            await auth.currentUser.delete();
            // Redirect to a login page or display a success message
            // window.location.href = '/login';
            setValue("")
          } catch (error) {
            console.error("Error deleting account:", error);
            // Handle the error appropriately (e.g., display an error message)
          }
        }
      }

return (
    <div>
        {value? 
            <button onClick={deleteAccount}>Delete Account Permanently</button>
            : <button onClick={handleClick}>Signin With Google</button>
        }
    </div>
    );
}
export default SignIn;