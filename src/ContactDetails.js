import React from "react";

function ContactDetails({ selected, data }) {
  const detail = (
    <div>
      {console.log(data)}
      <p>{data.name}</p>
      <p>{data.phone}</p>
    </div>
  );

  return (
    <div>
      <h1>Details</h1>
      {selected ? detail : <></>}
    </div>
  );
}

ContactDetails.defaultProps = {
  data: {
    name: "",
    phone: "",
  },
};

export default ContactDetails;
