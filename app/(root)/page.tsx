import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";


export default async function Home({searchParams}: { searchParams: Promise<{query ?: string} > }) {

  const query = (await searchParams).query;
  const params = {search: query || null};

  // const posts = await client.fetch(STARTUPS_QUERY);  // this is basic version with where santiy caches data for 60sec
  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params});  // this is the live version with sanity cache disabled
  
  console.log('checking the post ', posts);
  console.log('params is ', params);
  return (
    <>
      <section className="pink_container ">
        <h1 className="heading">
          Pitch Your Startup,
          <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
       
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold " >{query ? `Search results for "${query}" ` : "All Startups"}</p>
        

        <ul className="card_grid mt-2" >
          {
            posts &&  posts.length>0 && posts.map((post:StartupCardType) => 
              <StartupCard key={post._id} post={post} />
            )
          }
        </ul>
      </section>
    </>
  );
}
