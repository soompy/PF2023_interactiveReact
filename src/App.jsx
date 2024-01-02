// import '@/styles/globals.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import List from "./pages/List";
import RotateCanvas from "./pages/matter";

const client = new ApolloClient({
  uri: "https://koreanjson.com/comments",
  cache: new InMemoryCache(),
});

class MyApp extends React.Component {  
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
              <div className="list-title">
                <h3 className="title">경제</h3>                
              </div>              
              <List></List>
            </section>            
          </div>
        </>
      </ApolloProvider>
    );
  }
}

export default MyApp;
