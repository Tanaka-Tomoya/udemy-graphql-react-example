import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ME } from "./graphql";
import client from "./client";

import { Query } from "react-apollo";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>hello</div>
        <Query query={ME}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error, ${error.message}`;
            return <div>{data.user.name}</div>;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
