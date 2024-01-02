import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

async function loadData() {
  const { data } = await getClient().query({
    query: gql`
      query {
        characters(page: 1) {
          results {
            id
            name
            image
          }
        }
      }
    `,
  });

  return data;
}

async function Home() {
  const characters = await loadData();
  return <div>HomePgae</div>;
}

export default Home;
