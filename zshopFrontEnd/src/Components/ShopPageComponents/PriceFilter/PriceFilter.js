import React from 'react';
import Slider from '@mui/material/Slider';


export function PriceFilter() {
    const minDistance = 50;
    const [value, setValue] = React.useState([50, 200]);

const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
        return;
    }

    if (activeThumb === 0) {
        setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
        setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
};

    return (
        <>
            <div className='price-filter d-flex flex-column align-items-start justify-content-start w-100'>
                <p className='m-0 mb-2'>Price</p>
                <Slider 
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={400}
                    disableSwap
                    color="dark"
                />
            </div>
        </>
    );
}