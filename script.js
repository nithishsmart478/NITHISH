import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://ujhuczhpaktojzylpsvz.supabase.co",
  "sb_publishable_ONmQJ8ppznxW39SmUjmkUg_IIAQoXro"
);

const products = [
  {name:"Nike Air", price: 3999, img:"https://via.placeholder.com/150"},
  {name:"Adidas Run", price: 2999, img:"https://via.placeholder.com/150"},
  {name:"Puma Sport", price: 2499, img:"https://via.placeholder.com/150"}
];

const container = document.getElementById("products");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.img}" width="150">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    </div>
  `;
});
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// 🔹 replace with your keys
const supabase = createClient(
  "YOUR_SUPABASE_URL",
  "YOUR_PUBLIC_ANON_KEY"
);

async function loadShoes() {

  const { data, error } = await supabase
    .from("shoes")
    .select("*");

  if (error) {
    console.log(error);
    return;
  }

  const container = document.getElementById("products");
  container.innerHTML = "";

  data.forEach(shoe => {
    container.innerHTML += `
      <div class="card">
        <img src="${shoe.image}" width="150">
        <h3>${shoe.name}</h3>
        <p>₹${shoe.price}</p>
      </div>
    `;
  });
}

loadShoes();

