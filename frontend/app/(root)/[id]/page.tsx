import React from "react";

const Page = ({ params }: any) => {
  const { id } = params;
  return (
    <div>
      <h2>Social Page</h2>
      <p>{id}</p>
    </div>
  );
};

export default Page;
