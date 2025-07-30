import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center    z-[9999] ">
      <div className="flex flex-col items-center space-y-4">
        <CircularProgress size={80} style={{ color: "#fff" }} />
        <p className="text-white text-lg font-semibold">Submitting Form...</p>
      </div>
    </div>
  );
}
