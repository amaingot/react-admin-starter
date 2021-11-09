import React from "react";
import { Amplify } from "@aws-amplify/core";
import { Resource } from "react-admin";
import { AmplifyAdmin } from "react-admin-amplify";
import awsExports from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

Amplify.configure(awsExports);

function App() {
  return (
    <AmplifyAdmin operations={{ queries, mutations }}>
      <Resource name="blogs" />
      <Resource name="posts" />
      <Resource name="comments" />
    </AmplifyAdmin>
  );
}

export default App;
