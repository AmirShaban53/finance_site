import React from "react";
import { Container } from "./layout";
import { Apple, Google } from "@mui/icons-material";

const Mobile = () => {
  return (
    <div className="my-8 py-6">
      <Container>
        <div className="bg-zinc-100 rounded-3xl p-12">
          <div className="text-center mb-8 w-1/2 mx-auto">
            <p className="font-semibold text-4xl tracking-tighter mb-4">
              Get the Finsy mobile App
            </p>
            <p className="text-zinc-500 tracking-tighter text-lg mb-4">
              With this platform, you can access your account anywhere, anytime
              for balance and so much more.
            </p>
            <div className="space-x-4 my-12">
              <button
                type="button"
                className="border rounded-full p-3 px-4 border-zinc-400"
              >
                <Apple /> <span>Download Now</span>
              </button>
              <button
                type="button"
                className="border rounded-full p-3 px-4 border-zinc-400"
              >
                <Google /> <span>Download Now</span>
              </button>
            </div>
          </div>
          <div>
            <img src='/svg/app.svg' className="w-2/3 mx-auto"/>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-center font-semibold tracking-tighter text-8xl">Save smart. Achieve more.</p>
        </div>
      </Container>
    </div>
  );
};

export default Mobile;
