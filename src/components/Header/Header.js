import React from 'react';

const Header = () => {
    return (


        <div className=' h-100 my-5 py-5' style={{
            backgroundImage: "url(" + "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" + ")", backgroundPosition: 'center',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'hue'
        }} >

            <div className='ml-4'>
                <h4 className='text-4xl font-bold text-white shadow-gray-300 pb-3'>Let's know Your Knowledge</h4>
                <p className='text-gray-200 font-semibold text-md py-3'>
                    How do you describe website development?
                    Image result for learn about web development <br /> paragraph for website heading
                    Web development is the building and maintenance of websites; <br /> it's the work that happens behind the scenes <br /> to make a website look great, work fast and perform well with a seamless user experience. <br /> Web developers, or 'devs', do this by using a variety of coding languages.
                </p>
            </div>



        </div>



    );
}

export default Header; 