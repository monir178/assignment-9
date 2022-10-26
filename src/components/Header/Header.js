import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
const Header = () => {
    const topics = useLoaderData();
    const { data } = topics;
    console.log(data)
    return (

        <div>

            <div className=' h-100 mt-0 mb-5 py-5' style={{
                backgroundImage: "url(" + "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" + ")", backgroundPosition: 'center',
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'hue'
            }} >

                <div className='ml-4 text-center'>
                    <h4 className='text-5xl font-bold text-white pb-3'>Let's know Your Knowledge</h4>
                    <p className='text-gray-200 font-semibold text-md py-3'>
                        Web development is the building and maintenance of websites; <br /> it's the work that happens behind the scenes <br /> to make a website look great, work fast and perform well with a seamless user experience. <br /> Web developers, or 'devs', do this by using a variety of coding languages.
                    </p>
                </div>
            </div>
            <div className='grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto w-3/4'>
                {
                    data.map(topic => <Topics
                        key={topic.id}
                        topic={topic}

                    ></Topics>)
                }
            </div>
        </div>



    );
}

export default Header; 