import React from "react";
import RequiredNoAuth from "@/components/core/shared/RequiredNoAuth";

const layout = ({ children }) => {
  return <RequiredNoAuth>{children}</RequiredNoAuth>;
};

export default layout;
