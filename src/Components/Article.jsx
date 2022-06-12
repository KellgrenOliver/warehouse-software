import React from "react";

const Article = ({ article }) => {
  return (
    <div>
      {article?.name} x {article?.stock}
    </div>
  );
};

export default Article;
