import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import LockupGroup from "../../components/lockup-group";
import Lockup from "../../components/lockup";

const LessonsIndexPage = ({ data }) => (
  <Layout activePath="/lessons/">
    <SEO title="Home" />
    <main className="l-main page">
      <div className="page__lockups">
        <LockupGroup groupHeading="Lesson">
          {data.lessons.edges.map(({ node }) => (
            <Lockup
              key={node.id}
              id={node.id}
              title={node.frontmatter.title}
              type={node.frontmatter.type}
              slug={node.fields.slug}
              excerpt={node.excerpt}
            />
          ))}
        </LockupGroup>
      </div>
    </main>
  </Layout>
);

export default LessonsIndexPage;

export const pageQuery = graphql`
  query {
    lessons: allMdx(filter: {frontmatter: {type: {eq: "lessons"}}}, sort: {fields: frontmatter___title}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
