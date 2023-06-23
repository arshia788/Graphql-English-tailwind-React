import { LineWave } from 'react-loader-spinner'

import React from 'react';

const Loader = () => {
    return (
        // ? you gave this so that the footer stay down
        <div className='w-full h-screen flex justify-center pt-20'>
            <LineWave
                height="300"
                width="300"
                color="#FF78C4"
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