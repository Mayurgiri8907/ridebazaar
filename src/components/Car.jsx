import { React, useState, useEffect } from "react";
import Card from "./card";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Skeleton";

function Car() {
  const [vahicaldata, setVahicaldata] = useState([]);
  const [loading, setLoading] = useState(true); //  add loading
  const navigate = useNavigate();

  const showvahicaldata = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/vahical/caronly");
      setVahicaldata(res.data.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch vehicles");
    } finally {
      setLoading(false); //  stop loading
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
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {/* ✅ Show Skeleton */}
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
  );
}

export default Car;