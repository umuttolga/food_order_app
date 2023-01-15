import React from "react";
import "../../index.css";
import Card from "../UI/Card";
import MealsListItems from "./MealsListItems";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  // const [meals, setMeals] = useState([]);
  // const [isLoading, setIsloading] = useState(true)

  // useEffect(() => {
  //   let loadedMeals = [];
  //   async function getMeals() {

  //     const response = await fetch(
  //       "https://fir-test-a84fb-default-rtdb.firebaseio.com/meals.json"
  //     );
  //     const fetchedMeals = await response.json();
  //     for (const key in fetchedMeals) {
  //       loadedMeals.push({
  //         id: key,
  //         name: fetchedMeals[key].name,
  //         description: fetchedMeals[key].description,
  //         price: fetchedMeals[key].price,
  //       });
  //     }
  //     setMeals(loadedMeals);
  //   }
  //   getMeals();
  //   setIsloading(false)
  // }, []);

  const mealList = DUMMY_MEALS.map((element) => {
    return (
      <MealsListItems
        id={element.id}
        key={element.id}
        name={element.name}
        description={element.description}
        price={element.price}
      />
    );
  });
  return (
    <section className=" m-auto max-w-[60rem] w-[90%]">
      <Card>
        <ul className="divide-y-4 list-none">{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
