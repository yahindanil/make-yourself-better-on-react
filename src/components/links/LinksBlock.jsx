import React, { useState } from "react";

import LinksList from "./LinksList";
import LinksControlPanel from "./LinksControlPanel";

const LinksBlock = () => {
  let localLinks;
  if (localStorage.getItem("LocalLinks") === null) {
    localLinks = [];
  } else {
    localLinks = JSON.parse(localStorage.getItem("LocalLinks"));
  }
  localStorage.setItem("LocalLinks", JSON.stringify(localLinks));

  const [linkName, setLinkName] = useState("");
  const [linkHref, setLinkHref] = useState("");
  const [links, setLinks] = useState(localLinks);

  const addNewLink = () => {
    if (!linkName || !linkHref) {
      return;
    }

    let newLink = {
      id: Date.now(),
      linkName,
      linkHref,
    };

    setLinks([...links, newLink]);
    //Тут почему то не работает
    // localStorage.setItem("LocalLinks", JSON.stringify(links));

    // setLinkName("");
    // setLinkHref("");
  };

  return (
    <div className="border-container">
      <div className="flex place-content-between">
        <h2>Ссылки</h2>
        <button className="square-button">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

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

      <LinksList links={links} />
      <LinksControlPanel />
      <div></div>
    </div>
  );
};

export default LinksBlock;
