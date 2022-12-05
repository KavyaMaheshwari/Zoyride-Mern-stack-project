import React from 'react'

const Front = () => {
  return (
    <section className="bg-pink-300">
        <div className="px-6 mx-auto h-screen pt-6">
            <nav className='flex justify-between'>
                <a href='/' className='text-xl font-bold md:text-4xl text-white border-2 p-2 rounded'>Logo</a>
                {/* <a href='/login' className=' text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md py-3 px-6 text-center'>LOGIN</a> */}
            </nav>
            <div className='h-max flex justify-center mt-40'>
                <div>
                    <h1 className='text-6xl font-bold text-black-200'>Teacher-Student Database</h1>
                    <div className='flex justify-center mt-8'>
                        <a href='/login' className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-10 py-6 text-center text-lg mr-3'>LOGIN</a>
                        <a href='/register' className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-10 py-6 text-center text-lg ml-3'>REGISTER</a>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Front