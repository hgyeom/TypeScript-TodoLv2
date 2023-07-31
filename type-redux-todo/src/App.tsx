import Layout from "components/layout/Layout";
import React from "react";
import Router from "shared/Router";
import GlobalStyle from "styles/GlobalStyle";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Router />
    </Layout>
  );
}

export default App;
