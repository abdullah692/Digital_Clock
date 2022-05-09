import React ,{useState}from 'react'

function Clock() {
    
    // let time=new Date().toLocaleTimeString();
    const [ctime,setTime]=useState();
const [cdate,setDate]=useState();
    const updateTime=()=>{
     let  time=new Date().toLocaleTimeString();
        setTime(time);
    }
    const updateDate=()=>{
        let date=new Date().toLocaleDateString();
        setDate(date);
    }
    setInterval(updateTime,1000);
    setInterval(updateDate,1000);
    return (
        <div>
            <div className='clock'>
            <h1>DIGITAL CLOCK</h1>
            <h3 className='time'>{ctime}</h3>
            <h3 className='date'>{cdate}</h3>
{/* <button onClick={updateTime}>CLICK</button> */}
</div>
        </div>
    )
}

export default Clock
