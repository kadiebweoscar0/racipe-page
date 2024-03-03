import imgOmelette from "./images/image-omelette.jpeg"
import Ingredients from "./ingredients"
import Instructions from "./instructions"
import Nutritions from "./nutritions"
import PreparationTime from "./preparationTime"
export default function RecipePage() {
  return (
    <section>
      <figure>
          <img src={imgOmelette} alt="image omelette" />
      </figure>
      <h1>Simple Omelette Recipe</h1>
      <p>An easy and quick dish, perfect for ony meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      <PreparationTime />
      <Ingredients />
      <Instructions />
      <Nutritions />
    </section>
  )
}
