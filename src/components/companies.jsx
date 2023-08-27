import React from "react";
import { Container } from "./layout";

const Companies = () => {
  return (
    <div className="my-8 py-6">
      <Container>
        <div className="text-center">
          <p className="text-5xl font-semibold tracking-tighter mb-4">
            200+ The fastest growing <br /> companies use Finsy.
          </p>
          <p>
            Many companies have tried using Finsy and they trust <br /> the
            safety of their money.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/airbnb.png"
            />
          </div>
          <div className="col-span-3 h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/slack.png"
            />
          </div>
          <div className="col-span-3 h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/stripe.png"
            />
          </div>
          <div className="col-span-3 h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/unity.png"
            />
          </div>
          <div className="col-span-3 h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/spotify.png"
            />
          </div>
          <div className="col-span-3 h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/blender.png"
            />
          </div>
          <div className="col-span-3 h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/booking.png"
            />
          </div>
          <div className="col-span-3 h-32 object-center flex justify-center items-center bg-neutral-100 rounded-3xl">
            <img
              className="object-contain object-center p-6 w-52"
              src="/logos/coinbase.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Companies;
