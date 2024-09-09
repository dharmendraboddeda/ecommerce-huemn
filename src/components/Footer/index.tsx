import React from "react";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <div
      className={`bottom-0 p-10  md:p-16 flex flex-col gap-10 md:flex-row md:justify-between  ${className}`}
    >
      <div className="space-y-10">
        <h1 className="font-bold text-3xl">Your Site Title</h1>
        <h2 className="flex gap-2 items-center text-xl">
          Made by{" "}
          <a
            className="text-[#D4967D] underline"
            href="https://www.linkedin.com/in/dharmendraboddeda/"
            target="_blank"
          >
            Dharmendra
          </a>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-10">
          <h1 className="font-bold text-xl">Location</h1>
          <div>
            <p>Hyderabad, Telangana</p>
          </div>
        </div>
        <div className="space-y-10">
          <h1 className="font-bold text-xl">Contact</h1>
          <div className="flex flex-col">
            <a
              href="mailto:dharmendra.developer6@gmail.com"
              className="text-[#D4967D] underline"
            >
              email@gmail.com
            </a>
            <p>+91 8328612644</p>
          </div>
        </div>
      </div>
    </div>
  );
};
