import React from "react";
import { isLoggedInVar } from "../apollo";

export const LoggedOutRouter = () => {
  const onClick = () => {
    isLoggedInVar(true);
  };
  return (
    <div>
      logout
      <button onClick={onClick}>버튼</button>
    </div>
  );
};
