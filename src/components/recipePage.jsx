import imgOmelette from "./images/image-omelette.jpeg"
export default function RecipePage() {
  return (
    <section>
      <figure>
          <img src={imgOmelette} alt="image omelette" />
      </figure>
      <h1>Simple Omelette Recipe</h1>
      <p>An easy and quick dish, perfect for ony meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
    </section>
  )
}
