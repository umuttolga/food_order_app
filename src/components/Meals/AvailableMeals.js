import React from "react";
import { useEffect, useState } from "react";
import "../../index.css";
import Card from "../UI/Card";
import MealsListItems from "./MealsListItems";



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    let loadedMeals = [];
    async function getMeals() {
      
      const response = await fetch(
        "https://fir-test-a84fb-default-rtdb.firebaseio.com/meals.json"
      );
      const fetchedMeals = await response.json();
      for (const key in fetchedMeals) {
        loadedMeals.push({
          id: key,
          name: fetchedMeals[key].name,
          description: fetchedMeals[key].description,
          price: fetchedMeals[key].price,
        });
      }
      setMeals(loadedMeals);
    }
    getMeals();
    setIsloading(false)
  }, []);

  const mealList = meals.map((element) => {
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
        {!isLoading && <ul className="divide-y-4 list-none">{mealList}</ul>}
        {isLoading && <h3>Loading...</h3>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
