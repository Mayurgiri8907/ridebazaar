const Skeletonsingle = () => {
  return (
    <div className="mt-6 p-3 sm:p-4 bg-gray-100 min-h-screen animate-pulse">
      <div className="mt-20 max-w-6xl mx-auto bg-white p-4 sm:p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT - IMAGE */}
        <div>
          <div className="w-full h-64 sm:h-80 bg-gray-300 rounded-lg"></div>

          <div className="flex gap-2 mt-4 overflow-x-auto">
            {[1,2,3,4].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded"
              ></div>
            ))}
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="h-6 w-2/3 bg-gray-300 rounded mb-3"></div>
            <div className="h-5 w-1/3 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded mb-4"></div>

            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-300 rounded"></div>
              <div className="h-3 w-full bg-gray-300 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="h-12 w-full bg-gray-300 rounded-lg mt-6"></div>
        </div>
      </div>
    </div>
  );
};


export default Skeletonsingle