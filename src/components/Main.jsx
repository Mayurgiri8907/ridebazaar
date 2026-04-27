import { useState,useEffect } from "react";
import Slider from "./Slider";
import Card from "./card";
import Review from "./Review";
import Contact from "./Contact";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [vahicaldata, setVahicaldata] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const showvahicaldata = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/vahical/showvahical");
      //  store data
      setVahicaldata(res.data.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch vehicles");
    } finally {
      setLoading(false); //  stop loading
    }
  };

  //  CALL API ON LOAD
  useEffect(() => {
    showvahicaldata();
  }, []);

   const handelclick = (id) => {
    navigate(`/single/${id}`);
  };


  return (
    <>

      {/* Main Area */}
      <div className="">

        <Slider />
        <div className="bg-gray-100 p-5">

          {/*  HEADING */}
          <h1 className="mt-20 mb-10 text-3xl font-bold text-gray-800 mb-6 text-center">
            Car & Bike
          </h1>

          {/*  GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            
            {/*  Show Skeleton */}
        {loading
          ? Array(10)
              .fill(0)
              .map((_, i) => <Skeleton key={i} />)
          : vahicaldata.map((data) => (
              <Card
                key={data._id}
                vehicle={data}
                handelclick={handelclick}
              />
            ))}
            
          </div>

        </div>
        <Review />
        <Contact />

      </div>

    </>
  );
};

export default Main;
