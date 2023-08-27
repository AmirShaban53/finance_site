import { useState } from "react";
import { Container } from "./layout";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <nav className="py-4 top-0">
      <Container>
        <div className="flex justify-between items-center">
          <div className="z-30">
            <p className="font-bold text-lg">FINSY</p>
          </div>
          <div className="z-30 md:hidden">
            <button onClick={handleToggleMenu}>
              <Menu />
            </button>
          </div>
          <div
            className={`fixed bg-white w-screen  h-screen z-10 flex items-center transition-all duration-500 top-0 ${
              mobileOpen ? "left-0" : "-left-full"
            }
            md:static md:w-auto md:h-auto`}
          >
            <ul className="md:flex gap-12 font-semibold space-y-12 md:space-y-0 text-center w-full">
              <li className="capitalize">
                <a href="#">products</a>
              </li>
              <li className="capitalize">
                <a href="#">company</a>
              </li>
              <li className="capitalize">
                <a href="#">features</a>
              </li>
              <li className="capitalize">
                <a href="#">pricing</a>
              </li>
              <li className="capitalize">
                <a href="#">support</a>
              </li>
              <li className="md:hidden">
                <div className="space-x-8 font-semibold">
                  <button type="button" className="bg-zinc-50">
                    Login
                  </button>
                  <button
                    type="button"
                    className="bg-zinc-800 text-white p-2 px-5 rounded-full"
                  >
                    Open Account
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="space-x-8 font-semibold hidden md:block">
            <button type="button" className="bg-zinc-50">
              Login
            </button>
            <button
              type="button"
              className="bg-zinc-800 text-white p-2 px-5 rounded-full"
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
