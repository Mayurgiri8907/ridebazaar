import { useLocation, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  useEffect(() => {
    if (!data?.price || !data?.vehicleId) {
      toast.error("Invalid payment request");
      navigate("/");
    }
  }, [data, navigate]);

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      const res = await axios.post(
        "/api/order/create-order",
        { amount: data.price },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const order = res.data;

      const options = {
        key: "rzp_test_Se9Me71mSq03XU",
        amount: order.amount,
        currency: "INR",
        name: "Vehicle Booking",
        description: "Secure Payment",
        order_id: order.id,

        handler: async function (response) {
          try {
            await axios.post(
              "/api/order/payment-verify",
              {
                vehicleId: data.vehicleId,
                price: data.price,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            toast.success("Payment Successfully... ");
            navigate("/");

          } catch (err) {
            toast.error("Verification failed");
          }
        },

        prefill: {
          name: data.name,
          contact: data.phone,
        },

        theme: {
          color: "#22c55e",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      toast.error("Payment failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE - ORDER DETAILS */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Vehicle</span>
              <span className="font-medium">{data?.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">City</span>
              <span>{data?.city}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Address</span>
              <span className="text-right w-40 truncate">
                {data?.address}
              </span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-green-600">₹{data?.price}</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PAYMENT */}
        <div className="p-6 flex flex-col justify-between">

          <div>
            <h2 className="text-xl font-semibold mb-4">
              Payment Method
            </h2>

            <div className="border rounded-lg p-4 flex items-center justify-between">
              <span>Razorpay (UPI / Card / NetBanking)</span>
              <span className="text-green-600 font-semibold">✔</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            Pay ₹{data?.price}
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            🔒 100% Secure Payment powered by Razorpay
          </p>

        </div>

      </div>

    </div>
  );
};

export default Payment;