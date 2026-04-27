import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../utils/axios";
import { toast } from "react-toastify";

const Delivery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //  safe localStorage parse
  const getStoredBooking = () => {
    try {
      return JSON.parse(localStorage.getItem("booking")) || {};
    } catch {
      return {};
    }
  };

  const [booking, setBooking] = useState({
    price: null,
    vehicleId: null,
    name: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = getStoredBooking();

    const finalData = {
      price: location.state?.price || stored.price || null,
      vehicleId: location.state?.vehicleId || stored.vehicleId || null,
      name: location.state?.name || stored.name || "",
    };

    setBooking(finalData);

    localStorage.setItem("booking", JSON.stringify(finalData));

    if (!finalData.price || !finalData.vehicleId) {
      toast.error("Invalid booking. Please select vehicle again.");
      navigate("/");
    }
  }, [location.state, navigate]);

  const { price, vehicleId, name } = booking;

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  VALIDATION FUNCTION
  const validateForm = () => {
    if (!form.name.trim() || form.name.length < 3) {
      toast.error("Enter valid name (min 3 characters)");
      return false;
    }

    if (!form.address.trim() || form.address.length < 10) {
      toast.error("Enter full address (min 10 characters)");
      return false;
    }

    if (!form.city.trim()) {
      toast.error("City is required");
      return false;
    }

    if (!/^[0-9]{6}$/.test(form.pincode)) {
      toast.error("Enter valid 6-digit pincode");
      return false;
    }

    if (!/^[6-9][0-9]{9}$/.test(form.phone)) {
      toast.error("Enter valid 10-digit mobile number");
      return false;
    }

    return true;
  };

  //  SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    if (!validateForm()) return;

    try {
      setLoading(true);

      await axios.post(
        "/api/order/save",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Address saved successfully ✅");

      navigate("/payment", {
        state: {
          price,
          vehicleId,
          name,
          ...form,
        },
      });

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 md:p-8">

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Delivery Address
        </h2>

        {/* PRODUCT INFO */}
        <div className="mb-4 bg-gray-50 p-3 rounded">
          <p className="text-green-600 font-semibold">
            Price: ₹{price}
          </p>
          <p className="text-sm text-gray-600">
            Vehicle ID: {vehicleId}
          </p>
          {name && (
            <p className="text-sm text-gray-800 font-medium">
              {name}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            />

            <input
              name="pincode"
              placeholder="Pincode"
              maxLength={6}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) handleChange(e);
              }}
              className="border rounded-lg px-3 py-2"
            />
          </div>

          <input
            name="phone"
            placeholder="Phone"
            maxLength={10}
            onChange={(e) => {
              if (/^\d*$/.test(e.target.value)) handleChange(e);
            }}
            className="w-full border rounded-lg px-3 py-2"
          />

          <button
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 disabled:bg-gray-400"
          >
            {loading ? "Saving..." : "Continue to Payment"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Delivery;