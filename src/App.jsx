import React from "react";
import "./App.css";

function App() {
  return (
  <div className="h-screen flex items-center justify-center">
    {/**main grid */}
     <div className="grid grid-cols-2 gap-1">
     {/**card 1 */}
       <div className="p-8 border border-teal-500 bg-white rounded-3xl shadow-lg flex flex-col space-y-4">
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold text-sm">Team</p>
          <p className="font-bold pr-4 text-gray-300">...</p>
        </div>
        <div className="grid grid-cols-5 gap-1 h-[200px]">
          {[...Array(15)].map((_,i) => (
            <div key={i} className="flex items-center justify-center bg-gray-100 rounded-xl p-2">
             <p className="text-xs"> image {i + 1}</p>
            </div>
          ))}
        </div>
       </div>
       {/**card 2 */}
       <div className="p-8 bg-teal-500 rounded-3xl shadow-lg flex flex-col space-y-4">
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold text-sm text-white">Product Analytics</p>
         <div className="flex flex-row items-center space-x-4">
            <p className="font-semibold text-[10px] text-white">🟢Income</p>
            <p className="font-semibold text-[10px] text-white">🔴Loss</p>
            <p className="font-semibold text-sm text-gray-300">...</p>
         </div>
        </div>
        <div className="border border-white h-[200px] flex items-center justify-center">
          <p className="text-sm text-white">Radar Image</p>
        </div>
       </div>
       <div className="p-8 bg-black/80 rounded-3xl shadow-lg flex flex-col space-y-4">
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-sm text-white">Total Views</p>
              <p className="text-2xl text-white">$263,293<span className="text-gray-300">.00</span></p>
            </div>
            <p className="text-gray-300">...</p>
          </div>
          <div className="flex flex-row items-end gap-1 h-[200px]">
            {[...Array(6)].map((_,i) => (
              <div key={i} className="w-full bg-yellow-400 rounded-lg text-center"
              style={{height: `${Math.random() * 100 + 100}px`}}>
                {i + 1}
              </div>
            ))}
          </div>
       </div>
       <div className="p-8 border border-teal-500 rounded-3xl shadow-lg flex flex-col space-y-4">
            <div className="flex flex-row justify-between">
             <div>
                <p className="text-sm">Weakly Clicks</p>
                <p className="text-2xl font-semibold">$73,142<span className="text-gray-300">.00</span></p>
             </div>
             <p className="">...</p>
            </div>

            <div className="grid grid-cols-5 h-[200px]">
              {[...Array(25)].map((_, i) => (
                <div key={i} 
                className="rounded-xl"
                style={{backgroundColor: `hsl(170, 70%, ${Math.floor(Math.random() * 61) + 30}%)`}}>

                </div>
              ))}
            </div>
       </div>
     </div>
  </div>
  );
}

export default App;
