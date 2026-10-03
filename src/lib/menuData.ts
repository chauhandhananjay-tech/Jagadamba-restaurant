export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        name: "Vegetable Samosa",
        description:
          "Crispy golden pastry filled with spiced potatoes and green peas, served with tamarind chutney.",
        price: 5.99,
        image:
          "https://images.pexels.com/photos/37153389/pexels-photo-37153389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Crispy", "Classic"],
        vegetarian: true,
      },
      {
        name: "Paneer Tikka",
        description:
          "Cubes of cottage cheese marinated in yogurt and spices, char-grilled in the tandoor with bell peppers.",
        price: 8.99,
        image:
          "https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Grilled", "Tandoor"],
        vegetarian: true,
      },
      {
        name: "Mixed Pakora Platter",
        description:
          "Assorted vegetables and onions dipped in spiced chickpea flour batter, deep-fried to perfection.",
        price: 6.49,
        image:
          "https://images.pexels.com/photos/36342036/pexels-photo-36342036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Fried", "Sharing"],
        vegetarian: true,
      },
    ],
  },
  {
    id: "mains",
    label: "Main Course",
    items: [
      {
        name: "Paneer Butter Masala",
        description:
          "Cottage cheese simmered in a velvety tomato gravy enriched with butter, cream, and aromatic spices.",
        price: 14.99,
        image:
          "https://images.pexels.com/photos/11188417/pexels-photo-11188417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Creamy", "Bestseller"],
        vegetarian: true,
      },
      {
        name: "Dal Makhani",
        description:
          "Black lentils slow-cooked overnight with butter and cream into a rich, smoky, indulgent curry.",
        price: 13.99,
        image:
          "https://images.pexels.com/photos/28674557/pexels-photo-28674557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Slow-cooked", "Signature"],
        vegetarian: true,
      },
      {
        name: "Chana Masala",
        description:
          "Chickpeas braised in a robust onion-tomato gravy with cumin, coriander, and a hint of amchur.",
        price: 12.49,
        image:
          "https://images.pexels.com/photos/9287035/pexels-photo-9287035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Spicy", "Traditional"],
        spicy: true,
        vegetarian: true,
      },
      {
        name: "Dum Aloo",
        description:
          "Baby potatoes braised in a rich, spicy yogurt-based gravy with fennel and Kashmiri red chili.",
        price: 12.99,
        image:
          "https://images.pexels.com/photos/33643313/pexels-photo-33643313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Spicy", "Traditional"],
        spicy: true,
        vegetarian: true,
      },
      {
        name: "Royal Thali",
        description:
          "A grand platter with assorted curries, dal, rice, naan, raita, papad, and dessert — a complete feast.",
        price: 19.99,
        image:
          "https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Feast", "Assorted"],
        vegetarian: true,
      },
    ],
  },
  {
    id: "tandoor",
    label: "From the Tandoor",
    items: [
      {
        name: "Tandoori Vegetable Skewers",
        description:
          "Marinated paneer, bell peppers, onions, and mushrooms char-grilled in the clay oven with a smoky glaze.",
        price: 12.99,
        image:
          "https://images.pexels.com/photos/9046471/pexels-photo-9046471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Smoky", "Classic"],
        spicy: true,
        vegetarian: true,
      },
      {
        name: "Garlic Naan",
        description:
          "Soft leavened bread baked in the tandoor, brushed with garlic butter and fresh cilantro.",
        price: 3.49,
        image:
          "https://images.pexels.com/photos/10337726/pexels-photo-10337726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Fresh", "Bread"],
        vegetarian: true,
      },
      {
        name: "Assorted Bread Basket",
        description:
          "A selection of naan, roti, and laccha paratha — perfect for scooping up your favorite curry.",
        price: 7.99,
        image:
          "https://images.pexels.com/photos/28674556/pexels-photo-28674556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Sharing", "Bread"],
        vegetarian: true,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Gulab Jamun",
        description:
          "Warm milk-solid dumplings soaked in rose- and cardamom-scented sugar syrup. Melt-in-your-mouth bliss.",
        price: 5.49,
        image:
          "https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Sweet", "Classic"],
        vegetarian: true,
      },
      {
        name: "Assorted Indian Sweets",
        description:
          "A curated platter of traditional Indian confections — barfi, jalebi, and imarti beautifully presented.",
        price: 6.99,
        image:
          "https://images.pexels.com/photos/8887011/pexels-photo-8887011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        tags: ["Assorted", "Festive"],
        vegetarian: true,
      },
    ],
  },
];
