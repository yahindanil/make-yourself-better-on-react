import React from "react";

const LinksItem = (props) => {
  function deleteLink(element) {
    const item = element.target;

    if (item.classList[0] === "links-list-trash-button") {
      const link = item.parentElement;
      removeLocalLinks(link.innerText);
      link.remove();
    }
  }

  function removeLocalLinks(link) {
    let links;
    if (localStorage.getItem("LocalLinks") === null) {
      links = [];
    } else {
      links = JSON.parse(localStorage.getItem("LocalLinks"));
    }

    links.splice(
      links.findIndex((n) => n.linkName === link),
      1
    );

    localStorage.setItem("LocalLinks", JSON.stringify(links));
  }

  return (
    <div>
      <li className="flex">
        <a
          className="button mr-[5px] mb-[8px] text-xl h-[42px]"
          href={props.linkHref}
        >
          {props.linkName}
        </a>

        <button
          className="links-list-trash-button trash-button"
          onClick={deleteLink}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
};

export default LinksItem;
