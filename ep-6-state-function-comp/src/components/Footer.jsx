import React from "react";

class Footer extends React.Component {
  render() {
    console.log("Footer props:", this.props);
    return (
      <footer>
        <p>© 2023 My React App. All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;
