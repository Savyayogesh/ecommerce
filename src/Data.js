const products = [
  {
    "category": "Dairy & Beverages",
    "name": "Amul Milk",
    "price": 50,
    "rating": 85,
    "image":  "https://www.bbassets.com/media/uploads/p/xl/40090894_7-amul-taaza.jpg ",
    "description": "Fresh Amul milk, rich in nutrients.",
    "discount": 0,
    "discountedPrice": 50,
    "id": "1"
  },
  {
    "category": "Dairy & Beverages",
    "name": "Tropicana Orange Juice",
    "price": 120,
    "rating": 90,
    "image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3yiLfMLx22hRxlI5dfi1bJlLAAF0ioBNNAngYIO7KUm9QQOtarOk8P-X6xVXTLMN-x0jKD-kXjMuisECx20C2ZkFQPPg32O-C2Mk8F9n1Fmm5Mj2Mb5q-vw",
    "description": "Refreshing orange juice with no added sugar.",
    "discount": 0,
    "discountedPrice": 120,
    "id": "2"
  },
  {
    "category": "Snacks",
    "name": "Lays Chips Classic Salted",
    "price": 30,
    "rating": 80,
    "image": "https://images-cdn.ubuy.co.in/66342929719eaa54d548ad15-lay-s-potato-chip-variety-pack-snack.jpg",
    "description": "Crispy potato chips with a classic salted flavor.",
    "discount": 0,
    "discountedPrice": 30,
    "id": "3"
  },
  {
    "category": "Bakery & Cookies",
    "name": "Britannia Good Day Biscuits",
    "price": 40,
    "rating": 75,
    "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/cookie-biscuit/2/v/f/-original-imagwyf3kahjyppw.jpeg?q=90",
    "description": "Crunchy and delicious cookies loaded with cashews.",
    "discount": 0,
    "discountedPrice": 40,
    "id": "4"
  },
  {
    "category": "Frozen Food",
    "name": "Frozen Peas",
    "price": 90,
    "rating": 85,
    "image": "https://www.bbassets.com/media/uploads/p/xl/40097935_2-total-frozen-green-peas.jpg",
    "description": "Freshly frozen green peas for all your recipes.",
    "discount": 5,
    "discountedPrice": 85.5,
    "id": "5"
  },
  {
    "category": "Frozen Food",
    "name": "Chicken Nuggets",
    "price": 180,
    "rating": 92,
    "image": "https://5.imimg.com/data5/ZP/CR/JD/SELLER-10347843/venky-s-chicken-nuggets-500x500.jpg",
    "discount": 10,
    "discountedPrice": 162,
    "id": "6"
  },
  {
    "category": "Packaged Food",
    "name": "Instant Noodles",
    "price": 40,
    "rating": 88,
    "image": "https://veeba.in/cdn/shop/files/Woktok_AmazonCombo_Listing_Bannerfinal-11_e5365ef6-4d83-4827-94b6-cf9ac6720157.jpg?v=1742453109&width=1946",
    "description": "Quick and easy-to-cook instant noodles.",
    "discount": 0,
    "discountedPrice": 40,
    "id": "7"
  },
  {
    "category": "Masala & Dry Fruits",
    "name": "Almonds 500g",
    "price": 450,
    "rating": 95,
    "image":"https://ministryofnuts.in/cdn/shop/files/1_f528f91e-da9c-4814-9ecd-b2c758d8eccd_1200x1200.jpg?v=1739352995",
    "description": "Premium quality almonds, rich in nutrients.",
    "discount": 5,
    "discountedPrice": 427.5,
    "id": "8"
  },
  {
    "category": "Meat, Fish & Eggs",
    "name": "Fresh Chicken Breast",
    "price": 250,
    "rating": 93,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKh2oqeBxZpw7zIPiw4_ey8Ijf2KqZ3WF7g&s",
    "description": "Tender and fresh chicken breast, perfect for grilling.",
    "discount": 0,
    "discountedPrice": 250,
    "id": "9"
  },
  {
    "category": "Zepto Cafe",
    "name": "Iced Latte",
    "price": 150,
    "rating": 90,
    "image": "https://cdn11.bigcommerce.com/s-m2isrqnxtu/images/stencil/1280x1280/products/472/816/icedlattle_6pack_web_1_1__97087.1751858956.png?c=1",
    "description": "Smooth and refreshing iced latte.",
    "discount": 0,
    "discountedPrice": 150,
    "id": "10"
  },
  {
    "category": "Frozen Food",
    "name": "Fish Fillets",
    "price": 200,
    "rating": 88,
    "image": "https://www.gortons.com/wp-content/uploads/2024/11/crispybatteredfishfillets32ct-1.jpeg",
    "description": "Fresh frozen fish fillets, ready to cook.",
    "discount": 5,
    "discountedPrice": 190,
    "id": "11"
  },
  {
    "category": "Packaged Food",
    "name": "Peanut Butter",
    "price": 180,
    "rating": 87,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXuHFSyHN63DhnVwrvdF-vvoBQBvKvaTXzw&s",
    "description": "Smooth and creamy peanut butter.",
    "discount": 0,
    "discountedPrice": 180,
    "id": "12"
  },
  {
    "category": "Masala & Dry Fruits",
    "name": "Cashews 500g",
    "price": 500,
    "rating": 94,
    "image": "https://m.media-amazon.com/images/I/81WlYWPLshL.jpg",
    "description": "High-quality cashews, perfect for snacking.",
    "discount": 5,
    "discountedPrice": 475,
    "id": "13"
  },
  {
    "category": "Meat, Fish & Eggs",
    "name": "Brown Eggs (6 pcs)",
    "price": 90,
    "rating": 92,
    "image": "https://www.bbassets.com/media/uploads/p/xl/40187133_1-eggee-brown-eggs.jpg",
    "description": "Farm fresh brown eggs, rich in protein.",
    "discount": 0,
    "discountedPrice": 90,
    "id": "14"
  },
  {
    "category": "Zepto Cafe",
    "name": "Espresso Shot",
    "price": 100,
    "rating": 89,
    "image": "https://media.licdn.com/dms/image/v2/D5622AQFVl_wjN9le6A/feedshare-shrink_800/feedshare-shrink_800/0/1732995270677?e=2147483647&v=beta&t=5-IvOHC7kfWLZjBNouTmnLH8raRdS-UjnHbziFaO_ss",
    "description": "Strong and bold espresso shot.",
    "discount": 0,
    "discountedPrice": 100,
    "id": "15"
  }
]

export default products;