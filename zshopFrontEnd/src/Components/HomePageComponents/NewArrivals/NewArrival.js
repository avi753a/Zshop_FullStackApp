import {quickShopLinks} from "../../../Services/NavService";
import React, { useState } from 'react';
import Select from 'react-select';
import "./NewArrival.scss";
import { QuickShopItem } from "../QuickShopItem/QuickShopItem";

export function NewArrivals() {
    var buttonTexts = quickShopLinks;
    const options = buttonTexts.map((text) => ({
        label: text,
        value: text.toLowerCase().replace(/\s+/g, ''),
    }));

    const customTheme = (theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            primary25: 'black',
            primary: 'black',
        },
    });
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (option) => {
        setSelectedOption(option);
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'black',
            width: '100%',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'black',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'gray' : 'black',
            color: 'white',
            width: '100%',
            '&:hover': {
                backgroundColor: 'gray',
            },
        }),
    };
    return (
        <div className="new-arrival-container w-100 justify-content-start align-items-center flex-column d-flex">
            <div className="new-arrival-heading d-flex flex-column justify-content-start align-items-center">
                <h1 className="font-heading">New Arrivals</h1>
                <p className="w-md-50 w-100   d-flex flex-wrap new-arrival-description my-3">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 35 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                </p>
            </div>
            <div className="arrival-selection-buttons d-flex d-none d-md-flex flex-row justify-content-between my-3 align-items-center w-100 flex-wrap">
                {buttonTexts.map((text, index) => (
                    <button key={index} className="btn selection-button btn-lg col-2 me-2 mt-2">{text}</button>
                ))}
            </div>
            <Select className="d-flex d-md-none w-100"
                options={options}
                value={selectedOption}
                onChange={handleChange}
                theme={customTheme}
                styles={customStyles}

            />

            <div className="quick-shop w-100 d-flex flex-row flex-wrap align-items-center justify-content-between justify-content-xs-center mt-4">
                <QuickShopItem/>
                <QuickShopItem/>
                <QuickShopItem/>
                <QuickShopItem/>
                <QuickShopItem/>
                <QuickShopItem/>

            </div>
            <button className="btn btn-dark btn-lg w-20 mt-5">View More</button>
        </div>
    )
}
