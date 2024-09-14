import "./TimerItem.scss";
export function TimerItem({ text, value }) {
    return (
        <div className='timer-item me-3'>
            <div className='th-responsive div-shadow d-flex flex-row align-items-center justify-content-center rounded-3 mb-1'>
                <p className='timer-font m-0 display-5'>{value}</p>
            </div>
            <p className='fs-6 '>{text}</p>
        </div>
    );
}