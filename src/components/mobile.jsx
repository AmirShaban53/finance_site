import React from "react";
import { Container } from "./layout";
import { Apple, Google } from "@mui/icons-material";

const Mobile = () => {
  return (
    <div className="my-8 py-6">
      <Container>
        <div className="bg-zinc-100 rounded-3xl">
          <div>
            <p>Get the Finsy mobile App</p>
            <p>
              With this platform, you can access your account anywhere, anytime
              for balance and so much more.
            </p>
            <div>
                <button type="button">
                    <Apple/> <span>Download Now</span>
                </button>
                <button type="button">
                    <Google/> <span>Download Now</span>
                </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mobile;
