import React from "react";
import { Container } from "./layout";

const Features = () => {
  return (
    <div className="my-8 py-6">
      <Container>
        <div className="text-center">
          <p className="font-semibold text-5xl tracking-tighter mb-8">
            Feel the best experience <br /> with our features.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 bg-zinc-100 rounded-lg">
            <p>Customize an desgin your card, make it unique.</p>
            <p>
              Create a custom card that reflects your unique style and
              personality. Choose from a range of colours, patterns and designs
              to customize the look of your card.
            </p>
            <div>
              <img src="/images/400.png" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-6 bg-zinc-100 rounded-lg">
            <p>Personalize your financial insights and goals.</p>
            <p>
              Track your spending patterns, analyze income and expenses easily,
              and recevie personalized recommendations to optimize your
              financial habits.
            </p>
            <div>
              <img src="/images/400.png" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-12 bg-zinc-100 rounded-lg flex">
            <div>
              <p>Free transfer anywhere around the world.</p>
              <p>
                Experience the freedom of hassle-free money transfers with our
                free transfer admin app. Say goodbye to unnecessary fees and
                enjoy seamless transactions.
              </p>
            </div>
            <div>
              <img src="/images/400.png" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-4 bg-zinc-100 rounded-lg">
            <p>Hold money in 30+ currencies</p>

            <div>
              <img src="/images/400.png" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-4 bg-zinc-100 rounded-lg">
            <p>Subscriptions you control in one place</p>

            <div>
              <img src="/images/400.png" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-4 bg-zinc-900 text-white rounded-lg">
            <p>check our other product features</p>

            <button
              type="button"
              className="bg-yellow-500 font-semibold p-3 px-6 rounded-full"
            >
              Open Account
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
