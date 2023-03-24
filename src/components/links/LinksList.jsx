import React from "react";
import LinksItem from "./LinksItem";

const LinksList = (links) => {
  localStorage.setItem("LocalLinks", JSON.stringify(links.links));
  let linksArr = [];
  for (let link of links.links) {
    linksArr.push(link);
  }

  return (
    <div>
      <ul>
        {linksArr.map((linkProp) => (
          <LinksItem
            linkName={linkProp.linkName}
            linkHref={linkProp.linkHref}
            key={linkProp.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default LinksList;
