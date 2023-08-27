import React from "react";
import { Container } from "./layout";

const Companies = () => {
  return (
    <div className="my-8 py-6" id="companies">
      <Container>
        <div className="text-center mb-8 pb-4 md:w-1/2 mx-auto">
          <p className="text-2xl md:text-5xl font-semibold tracking-tighter mb-4">
            200+ The fastest growing companies use Finsy.
          </p>
          <p>
            Many companies have tried using Finsy and they trust the
            safety of their money.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-6 md:col-span-3  h-16 md:h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/airbnb.png"
              alt="company logo"
            />
          </div>
          <div className="col-span-6 md:col-span-3  h-16 md:h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/slack.png"
              alt="company logo"
            />
          </div>
          <div className="col-span-6 md:col-span-3  h-16 md:h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/stripe.png"
              alt="company logo"
            />
          </div>
          <div className="col-span-6 md:col-span-3  h-16 md:h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/unity.png"
              alt="company logo"
            />
          </div>
          <div className="col-span-6 md:col-span-3  h-16 md:h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/spotify.png"
              alt="company logo"
            />
          </div>
          <div className="col-span-6 md:col-span-3  h-16 md:h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/blender.png"
              alt="company logo"
            />
          </div>
          <div className="col-span-6 md:col-span-3  h-16 md:h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/booking.png"
              alt="company logo"
            />
          </div>
          <div className="col-span-6 md:col-span-3  h-16 md:h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/coinbase.png"
              alt="company logo"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Companies;
