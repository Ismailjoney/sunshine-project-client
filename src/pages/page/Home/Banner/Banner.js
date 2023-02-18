import React from 'react';
import cover from '../../../../assets/cover.png'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 gap-3  lg:grid-cols-3 mt-10 my-10 justify-items-end'>
            <div className='lg:ml-12 sm:m-0 text-justify col-span-2  '>
                <TypeAnimation
                    sequence={[
                        `Hello,`, 1500,<br/>,
                        `Wellcome to Our Website`, 2000,
                        () => {
                            // console.log('Done typing!');  
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em', fontWeight: 'bold', marginTop: '20px' }}
                />
                <h2 className='text-3xl  font-bold mt-1 my-1'>Find A New Job And Make Your Carear</h2>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores temporibus repellat cupiditate eveniet! Consectetur provident officiis itaque laudantium quia? Et consequatur  </p>
                <button className='btn btn-outline btn-secondary mt-2'>QQ</button>
            </div>
            <div>
                <img src={cover} alt="" />
            </div>
        </div>
    );
};

export default Banner;