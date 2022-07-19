import React, { useState, useEffect } from "react";
import SingleCar from "./SingleCar";

function Cars() {
   const [carsData, setCarsData] = useState({
      arrayOfCars: [
         {
            make: "Kia",
            model: "Sorento",
            year: 2020,
         },
         {
            make: "Kia",
            model: "Optima",
            year: 2019,
         },
         {
            make: "Tesla",
            model: "Model 3",
            year: 2021,
         },
         {
            make: "Honda",
            model: "Civic",
            year: 2019,
         },
         {
            make: "Honda",
            model: "Accord",
            year: 2018,
         },
         {
            make: "Volkswagen",
            model: "Jetta",
            year: 2021,
         },
         {
            make: "Toyota",
            model: "Camry",
            year: 2021,
         },
         {
            make: "Ford",
            model: "Mustang",
            year: 2019,
         },
         {
            make: "Ford",
            model: "F-150",
            year: 2019,
         },
         {
            make: "Toyota",
            model: "Camry",
            year: 2020,
         },
         {
            make: "Ford",
            model: "F-150",
            year: 2021,
         },
      ],
      carsComponents: [],
   });

   const [showCars, setShowCars] = useState(false);

   console.log("onStart", carsData.arrayOfCars);

   const mapCars = (aCar) => {
      return <SingleCar car={aCar}></SingleCar>;
   };

   useEffect(() => {
      setCarsData((prevState) => {
         const pd = { ...prevState };
         pd.carsComponents = pd.arrayOfCars.map(mapCars);

         return pd;
      });
   }, []);

   const onClickToggle = () => {
      setShowCars(!showCars);
      setCarsData((prevState) => {
         const pd = { ...prevState };
         pd.carsComponents = pd.arrayOfCars.map(mapCars);
         return pd;
      });
   };

   // const onFilterClick = (event) => {
   //    console.log("onFilterClick", event.target.value);
   //    const targetYear = event.target.value;
   //    // const value = target.value;
   //    // const name = target.name;

   //    setCarsData((prevState) => {
   //       const pd = { ...prevState };
   //       const filterCarArray = pd.arrayOfCars.filter((aCar) => {
   //          let result = false;

   //          if (aCar.year === targetYear) {
   //             return true;
   //          }
   //          return result;
   //       });

   //       pd.carsComponents = filterCarArray.map(mapCars);
   //       return pd;
   //    });
   // };

   const onClick2018 = () => {
      setShowCars(true);
      setCarsData((prevState) => {
         const currentCars = { ...prevState };
         const cars2018 = currentCars.arrayOfCars.filter((car) => {
            if (car.year === 2018) {
               return true;
            }
            return false;
         });

         currentCars.carsComponents = cars2018.map(mapCars);
         return currentCars;
      });
   };

   const onClick2019 = () => {
      setShowCars(true);
      setCarsData((prevState) => {
         const currentCars = { ...prevState };
         const cars2019 = currentCars.arrayOfCars.filter((car) => {
            if (car.year === 2019) {
               return true;
            }
            return false;
         });

         currentCars.carsComponents = cars2019.map(mapCars);
         return currentCars;
      });
   };

   const onClick2020 = () => {
      setShowCars(true);
      setCarsData((prevState) => {
         const currentCars = { ...prevState };
         const cars2020 = currentCars.arrayOfCars.filter((car) => {
            if (car.year === 2020) {
               return true;
            }
            return false;
         });

         currentCars.carsComponents = cars2020.map(mapCars);
         return currentCars;
      });
   };

   const onClick2021 = () => {
      setShowCars(true);
      setCarsData((prevState) => {
         const currentCars = { ...prevState };
         const cars2021 = currentCars.arrayOfCars.filter((car) => {
            if (car.year === 2021) {
               return true;
            }
            return false;
         });

         currentCars.carsComponents = cars2021.map(mapCars);
         return currentCars;
      });
   };

   return (
      <React.Fragment>
         <div className="container">
            <h1>The Cars</h1>
            <button
               onClick={onClickToggle}
               style={{ margin: "8px" }}
               type="button"
               className="btn btn-info mt-3"
            >
               {showCars ? "Hide Cars" : "Show Cars"}
            </button>
            <button
               onClick={onClick2018}
               style={{ margin: "8px" }}
               value="2018"
               type="button"
               className="btn btn-info mt-3"
            >
               2018 Cars
            </button>
            <button
               onClick={onClick2019}
               style={{ margin: "8px" }}
               type="button"
               className="btn btn-info mt-3"
            >
               2019 Cars
            </button>
            <button
               onClick={onClick2020}
               style={{ margin: "8px" }}
               type="button"
               className="btn btn-info mt-3"
            >
               2020 Cars
            </button>
            <button
               onClick={onClick2021}
               style={{ margin: "8px" }}
               type="button"
               className="btn btn-info mt-3"
            >
               2021 Cars
            </button>
            <div className="row">{showCars && carsData.carsComponents}</div>
         </div>
      </React.Fragment>
   );
}

export default Cars;
