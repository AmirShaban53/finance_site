import React from "react";
import { Container } from "./layout";

const Hero = () => {
  return (
    <div className="mb-8 py-6">
      <Container>
        <div className="flex items-center gap-6">
          <div className="basis-3/5">
            <img src="/svg/saving.svg" className="mx-auto p-8" />
          </div>
          <div className="basis-2/5 space-y-10">
            <div>
              <p className="font-semibold text-7xl tracking-tight mb-4">
                Control your <br /> financial <br /> future easily.
              </p>
              <p>
                From easy money management, financial goals and investments.
                Open your account in a flash.
              </p>
            </div>

            <div className="space-x-6">
              <button
                type="button"
                className="bg-blue-400 font-semibold p-3 px-6 rounded-full"
              >
                Open Account
              </button>
              <button type="button" className="border p-3 px-6 rounded-full">
                Generate your Card
              </button>
            </div>

            <div className="flex">
              <div className="basis-1/3 relative">
                <img
                  src="/images/400.png"
                  className=" w-12 rounded-full border-2 border-white absolute"
                />
                <img
                  src="/images/400.png"
                  className=" w-12 rounded-full border-2 border-white absolute left-10"
                />
                <img
                  src="/images/400.png"
                  className=" w-12 rounded-full border-2 border-white absolute left-20"
                />
              </div>
              <div className="basis-2/3">
                <p className="text-5xl font-semibold tracking-tighter">12 Million+</p>
                <p>
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
