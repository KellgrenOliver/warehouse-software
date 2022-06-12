import React from "react";

const Article = ({ article }) => {
  return (
    <div>
      <span>
        {article?.name} x {article?.stock}
      </span>
    </div>
  );
};

export default Article;
