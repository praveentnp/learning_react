import { useContext } from "react";
import { UserContext } from "../App";

function Header(props) {
  let { user } = useContext(UserContext);

  console.log(props);
  return (
    <header>
      <h1>TO-DO List</h1>
      <p
        style={{
          backgroundColor: "red",
          width: "30px",
          height: "30px",
          textAlign: "center",
          lineHeight: "30px",
          borderRadius: "50%",
        }}
      >
        {user.name ? user.name.slice(0, 1).toUpperCase() : "G"}
      </p>
    </header>
  );
}

export default Header;
