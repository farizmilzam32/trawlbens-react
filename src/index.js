import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kemitraan from "./components/Kemitraan";
import Agen from "./components/Agen";
import Kontak from "./components/Kontak";
import Blog from "./components/blog/Blog";
import Jasa from "./components/Jasa";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.graphcms.com/v2/ckmd57ib5hkpe01z274do8o6s/master",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mitra" element={<Kemitraan />} />
          <Route path="/agen" element={<Agen />} />
          <Route path="/contact" element={<Kontak />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/jasa/:slug" element={<Jasa />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
