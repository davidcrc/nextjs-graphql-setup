"use client";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`
  query {
    characters(page: 1, filter: { name: "rick" }) {
      results {
        id
        name
        image
      }
    }
  }
`;

function ClientPage() {
  const { data } = useSuspenseQuery(query);
  console.log("DD", data);

  return <div>ClientPgae</div>;
}

export default ClientPage;
