import React, { useEffect } from "react";
import { useState } from "react";

const Blog = ({formdata}) => {
  const user = localStorage.getItem("user");
  const firstname = JSON.parse(user).fristname
  // console.log(JSON.parse(user).fristname)
  
  useEffect(() => {
    getdata();
  }, [formdata]);
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const response = await fetch(`http://localhost:8001/blogs/${firstname}`);
      
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const datares = await response.json();
      setdata(datares);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., set an error state or display an error message to the user.
    }
  };

  return (
    <div className="blog-conataner">
      {data && data?.map((itmes ) => (
        <div className="card" key={itmes._id}>
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
            <h6>{itmes.title}</h6>
            <p className="text">
             {itmes.discription}
            </p>
          </div>
          <div className="userabout">
            <a href="">Want to know more about user</a>
          </div>
        </div>
  ))} 
    </div>
  );
};

export default Blog;
