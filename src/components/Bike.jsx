import {React,useState,useEffect} from 'react'
import Card from './card'
import axios from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Bike() {

    const [vahicaldata, setVahicaldata] = useState([]);
    const navigate = useNavigate();

    const showvahicaldata = async () => {
    try {
      const res = await axios.get("/api/vahical/bikeonly");
      // ✅ store data
      setVahicaldata(res.data.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch vehicles");
    } 
  };

  useEffect(() => {
      showvahicaldata();
    }, []);


    
   const handelclick = (id) => {
    navigate(`/single/${id}`);
  };

  return (
    <div>
      <div className="m-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            
            {vahicaldata.map((data) => (
              
              <Card key={data._id} 
                vehicle={data}
                handelclick={handelclick}
              />

            ))}
            
          </div>
    </div>
  )
}

export default Bike
