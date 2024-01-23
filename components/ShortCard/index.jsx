import { DateFormat } from "@/utils/DateFormat";
import Image from "next/image";
import React from "react";

export const ShortCard = ({ recipe }) => {
  const date = DateFormat(recipe.display_date);
  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      <section>
        <a href>
          <picture>
            <img
              style={{ position: "absolut", display: "flex" }}
              alt={recipe.headlines?.basic}
              src={recipe?.promo_items?.basic?.url}
              width={400}
              height={200}
            />
          </picture>
        </a>
      </section>
      <figcaption>
        <h3>{recipe.headlines.basic}</h3>
        <span>{date}</span>
      </figcaption>
    </article>
  );
};
