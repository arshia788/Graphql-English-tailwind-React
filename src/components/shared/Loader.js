import { LineWave } from 'react-loader-spinner'

import React from 'react';

const Loader = () => {
    return (
        <div className='w-full h-screen flex justify-center pt-20'>
            <LineWave
                height="300"
                width="300"
                color="#4fa94d"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </div>
    );
};

export default Loader;