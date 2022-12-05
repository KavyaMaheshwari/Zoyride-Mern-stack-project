import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [userdetails, setUserdetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserdetails({
            ...userdetails,
            [name]: value,
        })
    }

    const registerHandle = async (e)=> {
        e.preventDefault();
        const {name, email, password, confirmPassword} = userdetails;
        if(password !== confirmPassword) {
            alert('passwords do not match');
            setUserdetails({...userdetails, password: "", confirmPassword: ""});
        }
        else {
            if(name && email && password && (password === confirmPassword)) {
                axios.post('http://localhost:8080/register', userdetails)
                .then(res => {
                    alert(res.data.status);  
                    navigate('/login');
                })
            }
        }
    }
  return (
    <section className="bg-gray-700">
        <div className="flex flex-col items-center justify-center px-6 py-8 h-screen">
            <div className="w-full  shadow border max-w-md bg-pink-200 border-pink-200">
                <div className="p-6 space-y-6">
                    <h1 className="font-bold text-center text-4xl text-Black">
                        SIGN UP
                    </h1>
                    <form className="space-y-6" action="post">
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-black">Name</label>
                            <input type="text" name="name" id="name" value={userdetails.name} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-grey-900 focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-black">Email</label>
                            <input type="email" name="email" id="email" value={userdetails.email} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-grey-900 focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                            <input type="password" name="password" id="password" value={userdetails.password} onChange={changeHandler}  className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-grey-900 focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <label for="confirm-password" className="block mb-2 text-sm font-medium text-black">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirm-password" value={userdetails.confirmPassword} onChange={changeHandler}  className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-grey-900 focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" className="mr-2 w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" />
                            </div>
                            <div classNameName="ml-3 text-sm">
                                <label for="terms" className="font-light text-black">I accept the <a className="font-medium hover:underline text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" onClick={registerHandle} className="w-full text-black bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">CREATE ACCOUNT</button>
                        <p className="text-black text-sm">
                             Already having an account? <a href="/login" className="font-medium hover:underline dark:text-primary-500">LOGIN HERE</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignUpPage