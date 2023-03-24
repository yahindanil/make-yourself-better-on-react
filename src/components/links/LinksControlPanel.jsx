import React from "react";

const LinksControlPanel = () => {
  function openAllLinks() {
    let links;
    if (localStorage.getItem("LocalLinks") === null) {
      return;
    } else {
      links = JSON.parse(localStorage.getItem("LocalLinks"));
    }

    for (let link of links) {
      window.open(link.linkHref);
    }
  }

  return (
    <div>
      <button
        onClick={openAllLinks}
        className={"open-all-links py-0 button text-[20px]"}
      >
        Открыть всё
      </button>
    </div>
  );
};

export default LinksControlPanel;
