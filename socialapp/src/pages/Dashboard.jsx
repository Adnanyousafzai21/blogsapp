import React, { useState, useEffect } from "react";
import Blog from "../components/blog";

const Dashboard = () => {
  const user = localStorage.getItem("user");
const fristname =JSON.parse(user).fristname
  console.log(fristname)
  
  console.log(JSON.parse(user).fristname)
  const [formdata, setFormdata] = useState({
    title: "",
    discription: "",
  });
  const [blogData, setBlogData] = useState([]);
  const update = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
 let data=1;
  const postdata = async () => {
    try {
      data++
      const response = await fetch("http://localhost:8001/allblogs", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formdata.title,
          discription: formdata.discription,
          firstname: fristname
        }),
      });
     
      setFormdata({
        title: "",
        discription: "",
       
      });

      const responseData = await response.json();
      setBlogData(responseData);
    } catch (error) {
      console.log("Mongoose error:", error); 
      res.status(500).send("An error occurred while saving the product.");
    }
  };
  return (
    <div>
      <div>
        <div className="dash-form">
          <h2 className="dashtitle">Dashboard</h2>
          <input
            type="text"
            value={formdata.title}
            placeholder="Title"
            name="title"
            onChange={update}
          />
          <textarea
            id=""
            value={formdata.discription}
            cols="30"
            rows="5"
            name="discription"
            placeholder="Discription"
            onChange={update}
          />
          <div className="dashbtn">
            <input type="button" value="Post" onClick={postdata} />
          </div>
        </div>
      </div>
<Blog formdata={blogData}/>
    </div>
  );
};

export default Dashboard;
