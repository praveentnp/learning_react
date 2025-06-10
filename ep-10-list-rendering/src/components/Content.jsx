import React, { useState } from "react";
import styled from "styled-components";
import Shop from "./Shop";
import { MdDelete } from "react-icons/md";

export const Content = () => {
  let [items, setItems] = useState([
    {
      id: 1,
      label: "Html & CSS",
      checked: true,
    },
    {
      id: 2,
      label: "JavaScript",
      checked: false,
    },
    {
      id: 3,
      label: "React",
      checked: false,
    },
  ]);

  return (
    <main>
      {/* <h1>Props Example</h1>
      <hr />
      <Shop /> */}
      <div>
        <input type="text" placeholder="Add items..." />
        <button>Add</button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="list-item">
              <input type="checkbox" checked={item.checked} />
              <label>{item.label}</label>
              <MdDelete role="button" tabIndex={0} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};
