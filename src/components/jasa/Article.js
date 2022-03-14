import { React } from "react";
import { gql, useQuery } from "@apollo/client";
import { RichText } from "@graphcms/rich-text-react-renderer";

const Article = (props) => {
  const MyQuery = gql`
    query MyQuery($slug: String!) {
      marketing(where: { url: $slug }) {
        article {
          raw
          html
          markdown
          text
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(MyQuery, {
    variables: { slug: props.data },
  });
  if (loading) return "Loading....";
  if (error) return `Error! ${error.message}`;
  const content = data.marketing.article.raw.children;
  return (
    <div className="container mx-auto">
      <RichText
        content={content}
        renderers={{
          h1: ({ children }) => (
            <h1 className="text-center font-bold text-3xl my-12">{children}</h1>
          ),
          p: ({ children }) => <p className="my-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc">{children}</ul>,
        }}
      />
    </div>
  );
};

export default Article;
