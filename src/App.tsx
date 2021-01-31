import { gql, useQuery } from "@apollo/client";
import React from "react";
import { LoggedInRouter } from "./routers/logged-in-router";
import { LoggedOutRouter } from "./routers/logged-out-router";

// query안의 이름은 apollo.ts에 있는 field의 이름과 같아야한다.
// @client를 적어서 서버가 아닌 클라이언트에 요청하게된다.
const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

const App = () => {
  const {
    data: { isLoggedIn },
  } = useQuery(IS_LOGGED_IN);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
};

export default App;
