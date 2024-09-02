import { easeIn, motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 bg-zinc-100">
      <div
        className="w-full px-[4.5vw] border-b-[1px]
       border-zinc-700 pb-10"
      >
        <h1 className="text-[3.8vw] tracking-tighter text-black uppercase font-['Neue-Montreal'] font-bold "> Featured projects</h1>
      </div>
     
   
    
      

      <div className="cards   w-full flex gap-[4vw] pt-[6vw] px-[4.5vw] ">

        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card relative w-1/2 h-[70vh]"
        >
          <h1
            className="absolute  flex overflow-hidden left-full -translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none  
            tracking-tighter text-[6vw] font-bold"
          >
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden "
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
          ></img>
        </motion.div>

     

        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="card relative w-1/2 h-[70vh] "
        >
          <h1 className="absolute  flex overflow-hidden right-full translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[7vw] font-bold">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden "
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt="img"
          ></img>
        </motion.div>
      </div>

      <div className="cards   w-full flex gap-[4vw] pt-[6vw] px-[4.5vw] ">
        <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="card relative w-1/2 h-[70vh]"
        >
          <h1
            className="absolute flex overflow-hidden left-full -translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none  
            tracking-tighter text-[6vw] font-bold"
          >
            {"TRAWA".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[2]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden "
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
          ></img>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(3)}
          onHoverEnd={() => handleHoverEnd(3)}
          className="card relative w-1/2 h-[70vh] "
        >
          <h1 className="absolute flex overflow-hidden right-full translate-x-1/2  -translate-y-1/2  top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-[6vw] font-bold">
            {"PREMIUM BLEND".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[3]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.09 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className=" rounded-lg overflow-hidden "
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
            alt="img"
          ></img>
        </motion.div>
      </div>

      <div className="grid place-items-center pt-[10vw]">
      <button className=" text-sm flex border border-black gap-[0.5vw] items-center px-[0.75vw] py-[0.4vw] mt-[0.5vw] bg-zinc-100 text-black rounded-full hover:bg-black hover:text-white transition ease-in-out duration-300">
  VIEW ALL CASE STUDIES
  <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-black transition ease-in-out duration-300 group-hover:bg-white"></div>
</button>


      </div>
    </div>
  );
}

export default Featured;
