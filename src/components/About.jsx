import { Users, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">

      {/* 🔥 HEADING */}
      <h1 className="mt-20 text-3xl font-bold text-center mb-10">
        About <span className="text-blue-600">Us</span>
      </h1>

      <div className="max-w-6xl mx-auto space-y-12">

        {/* 🔹 INTRO */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <img
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
            alt="about"
            className="w-full h-72 object-cover rounded-2xl shadow"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-7">
              RideBazaar is your trusted platform for renting cars and bikes at affordable prices.
              We aim to provide a seamless and reliable experience for all your travel needs.
            </p>
          </div>

        </div>

        {/* 🔹 MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <Target className="mx-auto text-blue-600 mb-3" size={30} />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make vehicle rental simple, affordable, and accessible for everyone.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <Eye className="mx-auto text-blue-600 mb-3" size={30} />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted vehicle rental platform across India.
            </p>
          </div>

        </div>

        {/* 🔹 TEAM */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

            {[1,2,3,4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-lg transition"
              >
                <img
                  src={`https://i.pravatar.cc/150?img=${item}`}
                  alt="team"
                  className="w-20 h-20 rounded-full mx-auto mb-3"
                />
                <h3 className="font-semibold">Team Member</h3>
                <p className="text-sm text-gray-500">Developer</p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;