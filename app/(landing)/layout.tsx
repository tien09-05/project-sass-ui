import React from "react";

const LandingLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto">{props.children}</main>
    </div>
  );
};

export default LandingLayout;
