import React from "react";
import { useEffect, useState } from "react";

const Allblogs = () => {
  useEffect(() => {
  getdata();
}, []);
const [data, setdata] = useState([]);
const getdata = async () => {
  const response = await fetch("http://localhost:8001/allblogs");
  const datares = await response.json();
  setdata(datares);
  console.log(datares);
};

  return (
    <div className="blog-conataner">
 {
  data.map((items)=>(
    <div className="card" key={items._id}>
    <div className="profile">
      <div className="img">
        <img src="favicon.ico" alt="" />
      </div>
      <div className="about">
        <p>Adnan rafiq</p>
        <p>02/08/2023</p>
      </div>
    </div>
    <div className="textdiv">
    <h6>{items.title}</h6>
      <p className="text">
 
       {items.discription}
      </p>
    </div>
    <div  className="userabout" ><a href="">Want to know more about user</a></div>
    
  </div>
  ))
 }
    </div>
  );
};

export default Allblogs;
