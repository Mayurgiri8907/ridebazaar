import { useState } from "react";

const Bookform = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        pickupDate: "",
        dropDate: "",
    });

    const [files, setFiles] = useState({
        license: null,
        aadharFront: null,
        aadharBack: null,
    });

    const [preview, setPreview] = useState({
        license: "",
        aadharFront: "",
        aadharBack: "",
    });

    // Handle text input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle file upload + preview
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        setFiles((prev) => ({ ...prev, [name]: file }));

        if (file) {
            const url = URL.createObjectURL(file);
            setPreview((prev) => ({ ...prev, [name]: url }));
        }
    };

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("phone", formData.phone);
        data.append("license", files.license);
        data.append("aadharFront", files.aadharFront);
        data.append("aadharBack", files.aadharBack);

        console.log("Form Data:", data);

        // 👉 Send to backend (axios)
        // axios.post("/api/user/upload", data)
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-5"
            >
                <h2 className="text-2xl font-bold text-center">
                    User Verification
                </h2>

                {/* Name */}
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-xl focus:outline-none focus:border-blue-500"
                    required
                />

                {/* Phone */}
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-xl focus:outline-none focus:border-blue-500"
                    required
                />

                {/* Driving License */}
                <div>
                    <label className="font-medium text-gray-700">Driving License</label>

                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-500 transition relative cursor-pointer">

                        <input
                            type="file"
                            name="license"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            required
                        />

                        {preview.license ? (
                            <img
                                src={preview.license}
                                alt="license"
                                className="mx-auto h-32 object-cover rounded-lg"
                            />
                        ) : (
                            <div className="text-gray-500">
                                <p className="text-sm font-medium">Upload License</p>
                                <p className="text-xs">Click to upload</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Aadhaar Front */}
                <div>
                    <label className="font-medium text-gray-700">Aadhaar Card</label>

                    <div className="grid grid-cols-2 gap-4 mt-2">

                        {/* FRONT */}
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-3 text-center hover:border-blue-500 transition relative cursor-pointer">

                            <input
                                type="file"
                                name="aadharFront"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                required
                            />

                            {preview.aadharFront ? (
                                <img
                                    src={preview.aadharFront}
                                    alt="aadhar front"
                                    className="mx-auto h-28 object-cover rounded-lg"
                                />
                            ) : (
                                <p className="text-xs text-gray-500">Front</p>
                            )}
                        </div>

                        {/* BACK */}
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-3 text-center hover:border-blue-500 transition relative cursor-pointer">

                            <input
                                type="file"
                                name="aadharBack"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                required
                            />

                            {preview.aadharBack ? (
                                <img
                                    src={preview.aadharBack}
                                    alt="aadhar back"
                                    className="mx-auto h-28 object-cover rounded-lg"
                                />
                            ) : (
                                <p className="text-xs text-gray-500">Back</p>
                            )}
                        </div>

                    </div>
                </div>

                {/* 📅 Pickup & Drop Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Pickup Date */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Pickup Date
                        </label>
                        <input
                            type="date"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Drop Date */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Drop Date
                        </label>
                        <input
                            type="date"
                            name="dropDate"
                            value={formData.dropDate}
                            onChange={handleChange}
                            min={
                                formData.pickupDate || new Date().toISOString().split("T")[0]
                            }
                            className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Bookform;