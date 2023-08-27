import React from "react";
import { Container } from "./layout";
import { ArrowBack, ArrowForward, ArrowLeft } from "@mui/icons-material";

const Testimonials = () => {
  return (
    <div className="my-8 py-6">
      <Container>
        <div className="md:w-1/2 ml-auto mb-12 font-semibold text-5xl tracking-tighter">
          <p>
            Join 15+ million people <br /> who already trust us with <br />{" "}
            their money.
          </p>
        </div>
        <div>
          <div className="bg-zinc-100 rounded-3xl flex">
            <div className="basis-1/2 relative">
              <img src="/clients/mary.webp" className="absolute bottom-0 "/>
            </div>
            <div className="basis-1/2  p-8 pl-0">
              <p className="text-lg mb-6 text-neutral-500">
                Overall, the app has been a life changer for me. It has
                revolutionized the way I approach my finances, providing me with
                the tools, insights and security I need to unlock my financial
                freedom.
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-3xl">Ellena Putri</p>
                <div className="space-x-4">
                    <button type="button" className="border rounded-full p-2 ">
                        <ArrowBack/>
                    </button>
                    <button type="button" className="border rounded-full p-2 ">
                        <ArrowForward/>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
