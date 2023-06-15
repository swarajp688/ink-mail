const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 h-40" role="alert">
        <strong className="font-bold">Holy smokes! </strong>
        <span className="block sm:inline text-center">
          Something seriously bad happened.
        </span>
      </div>
    </div>
  );
};

export default Error;
