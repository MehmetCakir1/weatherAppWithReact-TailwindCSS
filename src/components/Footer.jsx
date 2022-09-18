import React from "react";

const Footer = ({info}) => {
  return (
    <footer className={`${!info.length ? "fixed bottom-10 right-10" : "mt-9"} mx-9`}>
      <h4 className="text-lg font-semibold text-end  italic text-slate-700">
          Coded by Mehmet
      </h4>
    </footer>
  );
};

export default Footer;
