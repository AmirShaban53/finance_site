import React from "react";
import { Container } from "./layout";

const Navbar = () => {
  return (
    <nav className="py-4 top-0">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-lg">FINSY</p>
          </div>
          <div>
            <ul className="flex gap-10 font-semibold">
              <li className="capitalize">
                {" "}
                <a href="#">products</a>
              </li>
              <li className="capitalize">
                {" "}
                <a href="#">company</a>
              </li>
              <li className="capitalize">
                {" "}
                <a href="#">features</a>
              </li>
              <li className="capitalize">
                {" "}
                <a href="#">pricing</a>
              </li>
              <li className="capitalize">
                {" "}
                <a href="#">support</a>
              </li>
            </ul>
          </div>
          <div className="space-x-8 font-semibold">
            <button type="button" className="bg-zinc-50">
              Login
            </button>
            <button
              type="button"
              className="bg-zinc-800 text-white p-3 px-6 rounded-full"
            >
              Open Account
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
