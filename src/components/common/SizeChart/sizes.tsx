import {useState} from "react";

export default function Sizebox() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <div>
      <div>
        <div className="flex gap-2 items-center">
          <div className="text-xl font-semibold'">Size: </div>
          <button
            className={`w-12 h-12 rounded-full text-sm ${
              selectedSize === "M"
                ? "bg-[#FFFF6D] text-gray-800 text-xl font-medium"
                : "bg-white border border-[#FFFF6D] text-gray-600 text-xl font-medium"
            }`}
            onClick={() => handleSizeChange("M")}
          >
            M
          </button>
          <button
            className={`w-12 h-12 rounded-full ${
              selectedSize === "S"
                ? "bg-[#FFFF6D] text-gray-800 text-xl font-medium"
                : "bg-white border border-[#FFFF6D] text-gray-600 text-xl font-medium"
            }`}
            onClick={() => handleSizeChange("S")}
          >
            S
          </button>
          <button
            className={`w-12 h-12 rounded-full ${
              selectedSize === "L"
                ? "bg-[#FFFF6D] text-gray-800 text-xl font-medium"
                : "bg-white border border-[#FFFF6D] text-gray-600 text-xl font-medium"
            }`}
            onClick={() => handleSizeChange("L")}
          >
            L
          </button>
          <button
            className={`w-12 h-12 rounded-full ${
              selectedSize === "XL"
                ? "bg-[#FFFF6D] text-gray-800 text-xl font-medium"
                : "bg-white border border-[#FFFF6D] text-gray-600 text-xl font-medium"
            }`}
            onClick={() => handleSizeChange("XL")}
          >
            XL
          </button>
        </div>
      </div>
    </div>
  );
}