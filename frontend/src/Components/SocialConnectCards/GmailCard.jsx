import React from "react";

const GmailCard = () => {
  return (
    <a
      href="mailto:harsh.ju.sharma@gmail.com"
      
      className="contact-card gmail"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="3em"
        width="3em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </a>
  );
};

export default GmailCard;
