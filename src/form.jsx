import React, { useEffect, useState } from "react";

function Form() {
    const data={name:"",email:"",password:""};
    const [inputData,setinputData] = useState(data);
    const [flag,setflag]= useState(false);
    useEffect(()=> {
        console.log("registered");
    },[flag])
    function handleData(e){
        setinputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData);
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password)
        {
            alert("all feilds are mandotory dumbass")
        }
        else{
            setflag(true);
        }
    }
    return (
        <>
        <pre>{(flag)?<h2>hello {inputData.name}, you are registered</h2>:""}</pre>
        <form onSubmit={handleSubmit}>
            <div>
                <h1>registration</h1>
            </div>
            <div>
                <input type='text' placeholder="Enter your name" name="name" value={inputData.name} 
                onChange={handleData}></input>
            </div>
            <div>
                <input type='text' placeholder="Enter your email" name="email" value={inputData.email} 
                onChange={handleData}></input>
            </div>
            <div>
                <input type='text' placeholder="Enter your password" name="password" value={inputData.password} 
                onChange={handleData}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Form;