import { useState, useEffect } from 'react';
import {TimerItem} from "../TimerItem/TimerItem";
import './MonthlyDeal.scss';

export function MonthlyDeal() {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        const targetDate = new Date('2024-08-31T23:59:59');
    
        // Declare interval variable at the top
        let interval;
    
        const updateCountdown = () => {
            const now = new Date();
            
            const timeDifference = targetDate - now;
    
            if (timeDifference <= 0) {
                clearInterval(interval);
                return;
            }
    
            setDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'));
            setHours(Math.floor((timeDifference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'));
            setMinutes(Math.floor((timeDifference / (1000 * 60)) % 60).toString().padStart(2, '0'));
            setSeconds(Math.floor((timeDifference / 1000) % 60).toString().padStart(2, '0'));
        };
    
        updateCountdown();
        interval = setInterval(updateCountdown, 1000); // Initialize interval
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);
    

    return (
        <div className="montly-deal-container d-flex justify-content-end row p-0 m-0 mt-5">
            <div className="monthly-deal-main col-11 row p-0 mt-5 mx-0">
                <div className="deal-info d-flex flex-column col-lg-5 col-md-6 col-12 p-0 ">
                    <div className="col-9 p-0 d-flex flex-column justify-content-start align-items-start">
                        <h1 className="font-heading mb-3">Deals of the Month</h1>
                        <p align="left" className="deal-description">In the React example, the isAuthenticated state determines whether the w-60 class is applied. In the vanilla JavaScript example, the isAuthenticated variable controls the addition of the w-60 class to the element with the id of nav-content. Adjust the isAuthenticated logic to fit your actual authentication mechanism.</p>
                        <button className='btn btn-dark b-shadow btn-lg w-50 my-3 fs-6'>Buy Now</button>
                    </div>
                    <div className='deal-timer mt-5 col-9 p-0 d-flex flex-column align-items-start'>
                        <p className='fs-4 fw-700'>Hurry, Before It's Too Late!</p>
                        <div className='timer-counter w-100 d-flex flex-row justify-content-start align-items-center'>
                            <TimerItem text={"Days"} value={days} />
                            <TimerItem text={"Hours"} value={hours} />
                            <TimerItem text={"Mins"} value={minutes} />
                            <TimerItem text={"Secs"} value={seconds} />
                        </div>
                    </div>
                    <div className='arrow-container d-flex flex-row align-items-center justify-content-between me-4 mb-md-0 mb-3'>
                        <div className='icon-arrow-left fw-700 arrow d-flex align-items-center justify-content-center'></div>
                        <div className='icon-arrow-right fw-700 arrow d-flex align-items-center justify-content-center'></div>

                    </div>
                </div>
                <div className="deal-banner col-lg-7 col-md-6 col-12 row p-0 mx-0">
                    {/* Banner content */}
                    <div className='col-5 p-0 d-flex flex-column justify-content-end align-items-center h-100  primary-image-container'>
                        <img src='/images/image5.png' className='w-100  h-100' />
                        {/* <div className='bg-light w-50 h-15 offer d-flex flex-column'>
                            <p>01 ---- Spring Sale</p>
                            <h1>30% OFF</h1>
                        </div> */}
                    </div>
                    <div className='col-7 p-0 d-flex flex-column deal-secondary-image-container h-100'>
                        <div className='h-90 d-flex flex-row align-items-center justify-content-start'>
                            <div className='col-7 h-100 mx-3'>
                                <img src='/images/image6.png' className='w-100 h-100' />

                            </div>
                            <div className='col-7 h-100'>
                                <img src='/images/image7.png' className='w-100 h-100' />

                            </div>
                        </div>
                        <div className='h-10 d-flex flex-row align-items-center justify-content-around'>
                            <div class="dot-container d-flex flex-row justify-content-between w-40">
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot active"></div>
                                <div class="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
