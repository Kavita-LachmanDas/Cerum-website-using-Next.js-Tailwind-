const Spinner = () => (
    <div
      id="spinner-container"
      className="hidden fixed inset-0 flex justify-center items-center bg-white/80 z-[999] w-full h-full"
    >
      <div className="spinner w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
  
  export default Spinner;
  