import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCard";
import { companies, testimonials } from "@/data";
import React from "react";

const Clients = () => {
  return (
    <div className="pt-24" id="testimonials">
      <h1 className="heading pb-14">
        Kind words form
        <span className="text-purple">Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
    
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
            {companies.map(({id, img, name, nameImg}) => (
                <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                    <img src={img} alt={name} 
                    className="md:w-10 w-5 "/>
                    
                    <img src={nameImg} alt={name} 
                    className="md:w-24 w-20 "/>
                </div>
            )) }
        </div>
      </div>
    </div>
  );
};

export default Clients;
