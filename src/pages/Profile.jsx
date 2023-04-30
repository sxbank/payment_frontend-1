import React from "react";

export default function Profile() {
  return (
    <>
      <div className="flex-col">
        <div className="flex justify-around gap-20   items-center">
          <div className="flex-col p-4 mt-3">
            <h2 className="text-2xl font-semibold">Alen Walker</h2>
            <h2 className="text-2xl font-semibold">8093483115</h2>
            <h2 className="text-2xl font-semibold">test@gmail.com</h2>
          </div>
          <h2 className="w-2/4 bg-[#2827CC] p-4 m-4 rounded-full text-4xl text-center text-white ">P</h2>
        </div>

        <button>Edit</button>
      </div>
    </>
  );
}