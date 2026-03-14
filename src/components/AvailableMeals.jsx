import React, { useEffect, useState } from "react";
import Card from "./Card";
import MealItem from "./MealItem";
import "../styles/meals/AvailableMeals.css";

export default function AvailableMeals({ children }) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoding(true);
      const response = await fetch(
        "https://food-order-bb658-default-rtdb.firebaseio.com/meals.json",
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      console.log(responseData);

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoding(false);
    };

    fetchMeals().catch((error) => {
      setIsLoding(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="MealsLoading">
        <p>Loading..</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="MealsError">
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className="meals">
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              title={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
