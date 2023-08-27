import React from "react";
import { Container } from "./layout";
import {
  CreditCard,
  TrendingUp,
  AttachMoney,
  PaymentsOutlined,
  LocalAtmOutlined,
} from "@mui/icons-material";

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
          <div className="col-span-6 bg-zinc-100 rounded-xl py-12 px-16 pb-0">
            <div className="mb-8">
              <span className="rounded-full p-3 bg-yellow-300">
                <CreditCard />
              </span>
            </div>
            <p className="mb-4 text-3xl tracking-tighter font-semibold">
              Customize an desgin your card, make it unique.
            </p>
            <p className="text-zinc-500 tracking-tighter mb-8">
              Create a custom card that reflects your unique style and
              personality. Choose from a range of colours, patterns and designs
              to customize the look of your card.
            </p>
            <div>
              <img src="/svg/credit.svg" className="mx-auto w-2/3" />
            </div>
          </div>
          <div className="col-span-6 bg-zinc-100 rounded-xl py-12 px-16 pb-0">
            <div className="mb-8">
              <span className="rounded-full p-3 bg-yellow-300">
                <TrendingUp />
              </span>
            </div>
            <p className="mb-4 text-3xl tracking-tighter font-semibold">
              Personalize your financial insights and goals.
            </p>
            <p className="text-zinc-500 tracking-tighter mb-8">
              Track your spending patterns, analyze income and expenses easily,
              and recevie personalized recommendations to optimize your
              financial habits.
            </p>
            <div>
              <img src="/svg/credit.svg" className="mx-auto w-2/3" />
            </div>
          </div>
          <div className="col-span-12 bg-zinc-100 rounded-xl py-12 px-16 pb-0 flex items-center gap-12">
            <div className="basis-1/2">
              <div className="mb-8">
                <span className="rounded-full p-3 bg-yellow-300">
                  <AttachMoney />
                </span>
              </div>
              <p className="mb-8 text-4xl tracking-tighter font-semibold">
                Free transfer anywhere around the world.
              </p>
              <p className="text-zinc-500 tracking-tight mb-8">
                Experience the freedom of hassle-free money transfers with our
                free transfer admin app. Say goodbye to unnecessary fees and
                enjoy seamless transactions.
              </p>
            </div>
            <div>
              <img src="/images/400.png" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-4 bg-zinc-100 rounded-xl p-12 pb-0">
            <div className="mb-8">
              <span className="rounded-full p-3 bg-yellow-300">
                <PaymentsOutlined />
              </span>
            </div>
            <p className="mb-4 text-3xl tracking-tighter font-semibold">
              Hold money in 30+ currencies
            </p>

            <div>
              <img src="/images/400.png" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-4 bg-zinc-100 rounded-xl p-12 pb-0">
            <div className="mb-8">
              <span className="rounded-full p-3 bg-yellow-300">
                <LocalAtmOutlined />
              </span>
            </div>
            <p className="mb-4 text-3xl tracking-tighter font-semibold">
              Subscriptions you control in one place
            </p>

            <div>
              <img src="/images/400.png" className="mx-auto" />
            </div>
          </div>
          <div className="col-span-4 bg-zinc-900 text-white rounded-xl py-12 px-16 pb-0">
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
