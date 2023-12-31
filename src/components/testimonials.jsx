import React from "react";
import { Container } from "./layout";
import { ArrowBack, ArrowForward, ArrowLeft } from "@mui/icons-material";

const Testimonials = () => {
  return (
    <div className="my-8 py-6">
      <Container>
        <div className="md:w-1/2 ml-auto mb-12 font-semibold text-2xl md:text-5xl tracking-tighter">
          <p>Join 15+ million people who already trust us with their money.</p>
        </div>
        <div>
          <div className="bg-zinc-100 rounded-3xl flex flex-col-reverse md:flex-row">
            <div className="basis-1/2 relative">
              <img
                src="/clients/mary.webp"
                className="md:absolute bottom-0 "
                alt="client testimonial"
              />
            </div>
            <div className="basis-1/2  p-8 md:pl-0">
              <p className="text-lg mb-6 text-neutral-500">
                Overall, the app has been a life changer for me. It has
                revolutionized the way I approach my finances, providing me with
                the tools, insights and security I need to unlock my financial
                freedom.
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-3xl">Ellena Putri</p>
                <div className="space-x-4">
                  <button
                    type="button"
                    className="border rounded-full p-2 "
                    aria-aria-label="back button"
                  >
                    <ArrowBack />
                  </button>
                  <button
                    type="button"
                    className="border rounded-full p-2 "
                    aria-aria-label="forward button"
                  >
                    <ArrowForward />
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
