import React from "react";
import { Container } from "./layout";
import {
  EmailOutlined,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="my-4">
      <Container>
        <div className="bg-neutral-800 text-white rounded-3xl p-16 mb-6">
          <div className="mb-8">
            <span className="bg-yellow-300 p-3 rounded-full">
              <EmailOutlined className="text-black" />
            </span>
          </div>
          <div className="flex justify-between items-center mb-12">
            <div className=" space-y-8">
              <p className="font-semibold text-5xl tracking-tighter">
                Keep up with the <br /> latest
              </p>
              <p className="text-neutral-400 text-sm whitespace-nowrap">
                Join our newletter to stay up to date on features and releases.
              </p>
            </div>
            <div className="basis-1/3">
              <p className="mb-4">Stay up to date</p>
              <div className="mb-2">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  className="bg-neutral-700 outline-none text-sm text-zinc-300 rounded-full p-2 px-4 mr-4"
                />
                <button className="bg-yellow-300 text-sm text-black p-2 px-4 rounded-full">
                  Subscribe
                </button>
              </div>
              <p className="text-neutral-400 text-xs">
                By subscribing you agree to our{" "}
                <span className="text-white underline">Privacy Policy</span>
              </p>
            </div>
          </div>
          <hr className="border-zinc-600 mb-12" />
          <div className="grid grid-cols-9 gap-6 text-sm">
            <div className="col-span-2">
              <p className="font-bold mb-8">Finsy</p>
              <p className="text-zinc-500">
                Make your complicated finance more simple
              </p>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-4">Finsy</p>
              <ul className="text-zinc-500 text-xs space-y-4">
                <li>Payment</li>
                <li>Card</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-4">Products</p>
              <ul className="text-zinc-500 text-xs space-y-4">
                <li>Personal</li>
                <li>Business</li>
                <li>Invoice</li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-4">Company</p>
              <ul className="text-zinc-500 text-xs space-y-4">
                <li>About</li>
                <li>Careers</li>
                <li>Press Kit</li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-4">Developer</p>
              <ul className="text-zinc-500 text-xs space-y-4">
                <li>API Docs</li>
                <li>Guide</li>
                <li>Change log</li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-4">Community</p>
              <ul className="text-zinc-500 text-xs space-y-4">
                <li>Refer a Friend</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-4">Support</p>
              <ul className="text-zinc-500 text-xs space-y-4">
                <li>Help</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="font-semibold mb-4">Legal</p>
              <ul className="text-zinc-500 text-xs space-y-4">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs">
          <div>
            <p>@{new Date().getFullYear()} Finsy. All copyright reserved</p>
          </div>
          <div className="space-x-4">
            <span className="bg-yellow-300 text-sm p-2 rounded-full">
              <Instagram className="text-black text-xs" />
            </span>
            <span className="bg-yellow-300 text-sm p-2 rounded-full">
              <Facebook className="text-black text-xs" />
            </span>
            <span className="bg-yellow-300 text-sm p-2 rounded-full">
              <Twitter className="text-black text-xs" />
            </span>
            <span className="bg-yellow-300 text-sm p-2 rounded-full">
              <LinkedIn className="text-black text-xs w-1" />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
