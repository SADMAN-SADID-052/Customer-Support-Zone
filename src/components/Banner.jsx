const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="px-6 lg:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* In-Progress Card */}
        <div className="relative rounded-xl p-8 text-white bg-linear-to-br from-violet-600 to-purple-400 overflow-hidden min-h-[160px] flex flex-col justify-center items-center">
          <img src="/vector1.png" alt="" className="absolute right-0 top-0 h-full opacity-40 object-contain" />
          <div className="relative z-10 text-center">
            <h2 className="text-lg font-semibold mb-3">In-Progress</h2>
            <p className="text-6xl font-bold">{inProgress}</p>
          </div>
        </div>

        {/* Resolved Card */}
        <div className="relative rounded-xl p-8 text-white bg-linear-to-br from-teal-500 to-emerald-400 overflow-hidden min-h-[160px] flex flex-col justify-center items-center">
          <img src="/vector1.png" alt="" className="absolute right-0 top-0 h-full opacity-40 object-contain" />
          <div className="relative z-10 text-center">
            <h2 className="text-lg font-semibold mb-3">Resolved</h2>
            <p className="text-6xl font-bold">{resolved}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;