import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { SEARCH_REPOSITORIES } from "./graphql";
import client from "./client";

import { Query } from "react-apollo";

const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = VARIABLES;
  }
  render() {
    const { query, first, last, before, after } = this.state;
    return (
      <ApolloProvider client={client}>
        <Query
          query={SEARCH_REPOSITORIES}
          variables={{ query, first, last, before, after }}
        >
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error, ${error.message}`;

            console.log({ data });
            return <div>hoge</div>;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
