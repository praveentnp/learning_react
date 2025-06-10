import React from "react";
import { UserContext } from "../App";

class Footer extends React.Component {
  render() {
    console.log("Footer props:", this.props);
    return (
      <footer>
        <p>© 2023 My React App. All rights reserved.</p>
        <UserContext.Consumer>
          {({ user }) => {
            return <p>{user.name}</p>;
          }}
        </UserContext.Consumer>
      </footer>
    );
  }
}

export default Footer;
