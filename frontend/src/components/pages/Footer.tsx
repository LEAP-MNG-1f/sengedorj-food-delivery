import * as React from "react";
import { WhitePineconeIcon } from "../icons/White";
import { FacebookIcon } from "../icons/Facebook";
import { IgIcon } from "../icons/Ig";
import { TwitterIcon } from "../icons/Twitter";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[40vh] bg-green-500 relative">
      <div>
        <img
          className="h-full w-full absolute object-cover"
          src="Zurag.png"
          alt="Background"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[67%] h-auto flex flex-col items-center justify-center">
          <div className="flex items-center gap-[10px]">
            <WhitePineconeIcon />
            <Link href={`/`}>
              <h1 className="font-semibold text-2xl text-white">
                Food Delivery
              </h1>
            </Link>
          </div>

          <div className="w-full pt-10 flex justify-between">
            {[
              { text: "Нүүр", href: "/" },
              { text: "Холбоо барих", href: "/contact" },
              { text: "Хоолны цэс", href: "/food-menu" },
              { text: "Үйлчилгээний нөхцөл", href: "/terms" },
              { text: "Хүргэлтийн бүс", href: "/delivery" },
              { text: "Нууцлалын бодлого", href: "/privacy" },
            ].map(({ text, href }) => (
              <div key={text} className="relative group">
                <Link href={href}>
                  <h1 className="text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer">
                    {text}
                  </h1>
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center gap-4 pt-10 items-center">
            <a
              href="https://www.facebook.com/sengeenee.sengee"
              className="transform transition-transform duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/sengdrj___u/"
              className="transform transition-transform duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IgIcon />
            </a>
            <a
              href="https://www.youtube.com/watch?v=CV4fsmwHUuE"
              className="transform transition-transform duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>

          <div className="w-full pt-10">
            <div className="w-full border border-white"></div>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-white pt-10">© 2024 Pinecone Foods LLC</h1>
            <h1 className="text-white">
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};
