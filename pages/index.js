import { useState } from "react";
import { ShortCard } from "@/components/ShortCard";
import TagList from "@/components/TagList";
import RootLayout from "@/components/layouts/layout";
import { processTags } from "@/utils/TagProcessor";

export default function Home({ recipe }) {
  const tags = processTags(recipe);
  const [visibleRecipes, setVisibleRecipes] = useState(10);

  const handleLoadMore = () => {
    // Increase the number of visible recipes (e.g., show 5 more)
    setVisibleRecipes((prevVisibleRecipes) => prevVisibleRecipes + 5);
  };

  return (
    <RootLayout>
      <TagList tags={tags} />
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {recipe
          .slice(0, visibleRecipes)
          .map(
            (rec) =>
              rec.subtype === "7" && <ShortCard key={rec._id} recipe={rec} />
          )}
      </section>
      {visibleRecipes < recipe.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </RootLayout>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/"
  );
  const recipes = await res.json();

  return {
    props: {
      recipe: recipes.articles,
    },
  };
};
