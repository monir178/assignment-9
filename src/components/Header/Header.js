import React from 'react';

const Header = () => {
    return (

        <div>
            <div className=' h-100' style={{
                backgroundImage: "url(" + "https://miro.medium.com/max/1400/0*Bz7Q4ik7cUerhvOD.jpg" + ")", backgroundPosition: 'center',
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
            }} >

                <h4 className='text-4xl font-bold text-white shadow-gray-300'>Let's know Your Knowledge</h4>


            </div>

        </div>

    );
}

export default Header; 