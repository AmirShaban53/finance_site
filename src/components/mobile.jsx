import React from "react";
import { Container } from "./layout";
import { Apple, Google } from "@mui/icons-material";

const Mobile = () => {
  return (
    <div className="my-8 py-6">
      <Container>
        <div className="bg-zinc-100 rounded-3xl p-4 md:p-12">
          <div className="text-center mb-8  md:w-1/2 mx-auto">
            <p className="font-semibold text-2xl md:text-4xl tracking-tighter mb-4">
              Get the Finsy mobile App
            </p>
            <p className="text-zinc-500 tracking-tighter md:text-lg mb-4">
              With this platform, you can access your account anywhere, anytime
              for balance and so much more.
            </p>
            <div className="space-x-2 md:space-x-4 my-12">
              <button
                type="button"
                className="border rounded-full text-sm md:text-base p-2 md:p-3 md:px-4 border-zinc-400"
              >
                <Apple /> <span>Download Now</span>
              </button>
              <button
                type="button"
                className="border rounded-full text-sm md:text-base p-2 md:p-3 md:px-4 border-zinc-400"
              >
                <Google /> <span>Download Now</span>
              </button>
            </div>
          </div>
          <div>
            <img src='/svg/app.svg' className="md:w-2/3 mx-auto" alt="mobile app"/>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-center font-semibold tracking-tighter text-5xl md:text-8xl">Save smart. Achieve more.</p>
        </div>
      </Container>
    </div>
  );
};

export default Mobile;
