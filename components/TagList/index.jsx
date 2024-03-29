import React from "react";

const TagList = ({ tags }) => {
  return (
    <div>
      <ul style={{ display: "flex" }} data-testid="tag-list">
        {tags.map((tag, index) => (
          <li key={index} style={{ display: "flex" }} data-testid="tag-list">
            <span
              style={{ color: "blue", cursor: "pointer", marginRight: "5px" }}
            >
              {tag.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
