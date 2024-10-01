import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <>
      <div className="h-screen grid grid-rows-2 ml-20">
        <div className="flex flex-col justify-end items-center">
          <h1
            className="text-white text-7xl font-bold transition-transform duration-300 hover:scale-105"
            style={{
              textShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            Alejo-Develop
          </h1>
          <h3
            className="text-primary text-3xl mt-4 transition-transform duration-300 hover:scale-105"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            }}
          >
            Full stack Developer
          </h3>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="flex flex-col justify-center bg-black bg-opacity-70 text-center w-96 h-32 text-2xl backdrop-blur-lg border-"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              boxShadow:
                "0 0 30px rgba(0, 0, 0, 0.7), 0 0 60px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h5 className="text-white">
              If you can think it... <br />
              <TypeAnimation
                sequence={["you can work it", 2000, "you can program it", 2000]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="text-primary font-bold"
              />
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
