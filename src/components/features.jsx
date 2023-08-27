import React from "react";
import { Container } from "./layout";
import {
  CreditCard,
  TrendingUp,
  AttachMoney,
  PaymentsOutlined,
  LocalAtmOutlined,
  ArrowForward,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { btnVart } from "../animations";

const Features = () => {
  return (
    <div className="my-8 py-6" id="features">
      <Container>
        <div className="text-center md:w-1/2 mx-auto mb-8 pb-4">
          <p className="font-semibold text-2xl md:text-5xl tracking-tighter ">
            Feel the best experience with our features.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 bg-zinc-100 rounded-xl p-4 pt-8 md:py-12 md:px-16">
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
              <img
                src="/svg/credit.svg"
                alt="feature image"
                className="mx-auto w-2/3"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 bg-zinc-100 rounded-xl p-4 pt-8 md:py-12 md:px-16">
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
              <img
                src="/svg/stats.svg"
                alt="feature image"
                className="mx-auto "
              />
            </div>
          </div>
          <div className="col-span-12 bg-zinc-100 rounded-xl p-4 pt-8 md:py-12 md:px-16 md:flex items-center gap-12">
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
            <div className="basis-1/2">
              <img
                src="/svg/world.svg"
                alt="feature image"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-zinc-100 rounded-xl p-8 md:p-12 pb-0">
            <div className="mb-8">
              <span className="rounded-full p-3 bg-yellow-300">
                <PaymentsOutlined />
              </span>
            </div>
            <p className="mb-4 text-3xl tracking-tighter font-semibold">
              Hold money in 30+ currencies
            </p>

            <div>
              <img
                src="/svg/coins.svg"
                alt="feature image"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-zinc-100 rounded-xl p-8 md:p-12 pb-0">
            <div className="mb-8">
              <span className="rounded-full p-3 bg-yellow-300">
                <LocalAtmOutlined />
              </span>
            </div>
            <p className="mb-4 text-3xl tracking-tighter font-semibold">
              Subscriptions you control in one place
            </p>

            <div>
              <img
                src="/svg/control.svg"
                alt="feature image"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 grad bg-neutral-800 text-white rounded-xl p-8 md:p-12  md:pb-0 flex flex-col justify-center gap-16">
            <p className="text-4xl tracking-tighter">
              check our other product features
            </p>

            <motion.button
            variants={btnVart}
            whileHover={"hover"}
            whileTap={"tap"}
              type="button"
              className="bg-yellow-300 font-semibold p-3 px-6 rounded-full w-fit tracking-tighter text-neutral-900 relative group overflow-hidden "
            >
              <span className="inline-block group-hover:w-full h-full absolute top-0 left-0 bg-white w-0 origin-left duration-500 transition-all z-0 rounded-full"></span>
              <span className=" relative">
                View More <ArrowForward />
              </span>
            </motion.button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
