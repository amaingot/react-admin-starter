import React from "react";
import { Amplify } from "@aws-amplify/core";
import { Admin, Resource } from "react-admin";
import {
  buildAuthProvider,
  buildDataProvider,
  CognitoGroupList,
  CognitoUserList,
  CognitoUserShow,
} from "react-admin-amplify";

import awsExports from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import SignInPage from "./pages/SignInPage";
import {
  BlogCreate,
  BlogEdit,
  BlogList,
  CommentCreate,
  CommentEdit,
  CommentList,
  PostCreate,
  PostEdit,
  PostList,
  PostShow,
} from "./resources";
import PostIcon from "@material-ui/icons/Book";
import GroupIcon from "@material-ui/icons/Group";
import BlogIcon from "@material-ui/icons/Receipt";
import CommentIcon from "@material-ui/icons/Chat";

Amplify.configure(awsExports);

const authProvider = buildAuthProvider({
  authGroups: ["superadmins", "admins", "users"],
});
const dataProvider = buildDataProvider(
  {
    queries,
    mutations,
  },
  { enableAdminQueries: true }
);

console.log(dataProvider);

function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={SignInPage}
      disableTelemetry
      title={"React Admin Starter"}
    >
      <Resource
        name="blogs"
        options={{ label: "Blogs" }}
        list={BlogList}
        icon={BlogIcon}
        edit={BlogEdit}
        create={BlogCreate}
      />
      <Resource
        name="posts"
        options={{ label: "Posts" }}
        list={PostList}
        icon={PostIcon}
        edit={PostEdit}
        create={PostCreate}
        show={PostShow}
      />
      <Resource
        name="comments"
        options={{ label: "Comments" }}
        list={CommentList}
        icon={CommentIcon}
        edit={CommentEdit}
        create={CommentCreate}
      />
      <Resource
        name="cognitoUsers"
        options={{ label: "Users" }}
        list={CognitoUserList}
        show={CognitoUserShow}
      />
      <Resource
        name="cognitoGroups"
        options={{ label: "Groups" }}
        list={CognitoGroupList}
        icon={GroupIcon}
      />
    </Admin>
  );
}

export default App;
