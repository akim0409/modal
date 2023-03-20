import { useState, useRef } from "react";
// https://ik.imagekit.io/87wct6jq4ql/tr:w-1280/https://media.graphassets.com/hX7pZV4TTCzO9T32Qi7g


const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundRef = useRef(null); //type of hook


  return (
    <>
      <div className="h-screen flex justify-center items-center bg-rose-200">
        <button 
        className="rounded-md bg-rose-600 text-white px-4 py-2"
        onClick={() => {
          setIsOpen(true);
        }}
        >
          Open Modal
        </button>
      </div>
      {isOpen ? (   
        <div 
          onClick={(event) => { //event.target is the exact div of the click location
            if (backgroundRef.current === event.target) {
              setIsOpen(false);
            }
          }}
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-900/30"
          ref={backgroundRef} //pass the reference as prop
        >
          <div className="relative rounded-md bg-white flex flex-col justify-center items-center p-6">
            <i 
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-0 right-0 text-xl text-rose-300 fa-regular fa-circle-xmark"
            ></i>
            <i className="text-4xl text-rose-400 fa-solid fa-envelope"></i>
            <div className="text-xl my-2 font-semibold text-zinc-700">Contact Us Via Email</div>
            <div className="my-2 text-center text-zinc-500 max-w-xs">
              Any questions? Send us an email at cutie@structy.net. We usually answer within 24 hours.
            </div>
            <div className="flex">
              <button 
              className="w-32 m-2 border-2 border-zinc-300 text-zinc-500 rounded-md px-4 py-1"
              onClick={() => {
                setIsOpen(false);
              }}
              >Cancel</button>
              <button className="w-32 m-2 text-zinc-600 rounded-md px-4 py-1 bg-purple-500 text-white">Open Email</button>
            </div>
            
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
