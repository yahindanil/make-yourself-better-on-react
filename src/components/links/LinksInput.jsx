import React, { useState } from "react";

const LinksInput = (props) => {
  const [linkName, setLinkName] = useState("");
  const [linkHref, setLinkHref] = useState("");
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("LocalLinks"))
  );

  const addNewLink = (e) => {
    e.preventDefault();

    if (!linkName || !linkHref) {
      return;
    }

    const newLink = {
      id: Date.now(),
      linkName,
      linkHref,
    };

    setLinks([...links, newLink]);
    localStorage.setItem("LocalLinks", JSON.stringify(links));

    // setLinkName("");
    // setLinkHref("");
  };

  return (
    <div className="grid grid-rows-2 grid-cols-[1fr_45px] gap-[10px]">
      <input
        className="input mt-[10px] col-span-2"
        type="text"
        value={linkName}
        onChange={(e) => setLinkName(e.target.value)}
        placeholder="Название ссылки"
      ></input>
      <input
        className="input"
        type="text"
        value={linkHref}
        onChange={(e) => setLinkHref(e.target.value)}
        placeholder="Ссылка"
      ></input>
      <button className="square-button" onClick={addNewLink}>
        <i className="fas fa-plus-square"></i>
      </button>
    </div>
  );
};

export default LinksInput;
