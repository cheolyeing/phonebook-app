import React from "react";

function ContactInfo({ name, onClick }) {
  return (
    <div onClick={onClick}>
      <div>{name}</div>
    </div>
  );
}

export default ContactInfo;
