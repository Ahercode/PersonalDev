
import "./Timer.css"
const Timer = ()=>{

const currDate = new Date();
  return (
    <div >
      <div className="card">
        <h1 className="main-text">Your current time is </h1>
        <h2 className="time-reader">{currDate.toLocaleTimeString()}.</h2>
        <p className="brand-text">
          Keep learning with Ahercode!
        </p>
      </div>
    </div>
  );
}

export {Timer}