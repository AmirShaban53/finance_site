import React from "react";
import { Container } from "./layout";
import { ArrowDropUp } from "@mui/icons-material";

const Hero = () => {
  return (
    <div className="mb-8 py-6">
      <Container>
        <div className="md:flex items-center gap-6">
          <div className="basis-[55%]">
            <img src="/svg/saving.svg" className="mx-auto p-8" />
          </div>
          <div className="basis-[45%] space-y-6 md:space-y-8">
            <div>
              <p className="font-semibold text-4xl md:text-[5.2rem] md:leading-[5.2rem] tracking-tighter mb-6">
                Control your financial future easily
              </p>
              <p className="text-neutral-600 md:text-lg">
                From easy money management, financial goals and investments.
                Open your account in a flash.
              </p>
            </div>

            <div className="space-x-3 md:space-x-6 text-center md:text-left">
              <button
                type="button"
                className="bg-yellow-300 font-semibold p-3 md:px-6 rounded-full"
              >
                Open Account
              </button>
              <button
                type="button"
                className="font-semibold border p-3 md:px-6 rounded-full"
              >
                Generate your Card
              </button>
            </div>

            <div className="flex">
              <div className="basis-1/2 md:basis-1/3 relative">
                <img
                  src="/clients/profile01.webp"
                  className=" w-12 rounded-full border-2 border-white absolute"
                />
                <img
                  src="/clients/profile02.webp"
                  className=" w-12 rounded-full border-2 border-white absolute left-10"
                />
                <img
                  src="/clients/profile03.webp"
                  className=" w-12 rounded-full border-2 border-white absolute left-20"
                />
              </div>
              <div className="basis-1/2 md:basis-2/3">
                <p className="text-2xl md:text-4xl font-semibold tracking-tighter">
                  <ArrowDropUp fontSize="large" className="text-green-300" /> 12
                  Million+
                </p>
                <p className="text-neutral-600 text-sm hidden md:block">
                  Trusted by millions of satisfied users, our financial services
                  have made a real impact on people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
