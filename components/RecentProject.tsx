import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

function RecentProject() {
  return (
    <div className="pt-24">
      <h1 className="heading pb-14">
        A small Selection of <span className="text-purple">Recent Project</span>
      </h1>
      <div className="flex flex-wrap items-start justify-center p-4 gap-8">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] flex flex-col items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div
                className="relative flex items-center justify-center 
              sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10"
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <img src="/bg.png" alt="bg-img" />
                </div>

                <img src={img} alt={title} className="z-10 absolute bottom-2" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 w-full">
                <div className="flex items-center -space-x-4">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center ml-auto">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ml-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProject;
