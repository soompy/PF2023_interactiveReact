// import '@/styles/globals.css'
import React from "react"; // Import React, no need to import Component
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import List from "./pages/List";
import RotateCanvas from "./pages/matter";

const client = new ApolloClient({
  uri: "https://koreanjson.com/comments",
  cache: new InMemoryCache(),
});

class MyApp extends React.Component {
  // Extend React.Component
  render() {
    return (
      <ApolloProvider client={client}>
        <>
          <div>
            <header id="header">
              <div className="inner">
                <h1>Hot clip</h1>
                <ul>
                  <li>경제</li>
                  <li>문화</li>
                  <li>엔터</li>
                  <li>스포츠</li>
                </ul>
              </div>
            </header>

            <section className="area area-matter">
              <RotateCanvas></RotateCanvas>
            </section>

            <section className="area area-list">
              <List></List>
            </section>            
          </div>
        </>
      </ApolloProvider>
    );
  }
}

export default MyApp;
