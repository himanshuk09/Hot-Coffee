import { useState } from "react";
import coffeeImage1 from "../image/home-img-1.png";
import coffeeImage2 from "../image/home-img-2.png";
import coffeeImage3 from "../image/coffee-mug-1.png";
import coffeeImage4 from "../image/coffee-mug-2.png";

const Order = () => {
  const coffeeStock = 500;
  const milkStock = 1000;
  const waterStock = 1000;
  const sugarStock = 500;
  const [coffeeRemaining, setCoffeeRemaining] = useState(coffeeStock);
  const [sugarRemaining, setSugarRemaining] = useState(milkStock);
  const [milkRemaining, setMilkRemaining] = useState(waterStock);
  const [waterRemaining, setWaterRemaining] = useState(waterStock);
 

  const prepareCoffee = () => {
    const hardSelect = document.getElementById("hard").checked;
    const lightSelect = document.getElementById("light").checked;
    const sugarSelect = document.getElementById("sugar-switch").checked;
    const hardCoffeeAmount = 25;
    const lightCoffeeAmount = 15;
    const sugarAmount = 10;
    const waterAmount = 200;
    const milkAmount = 100;
    let coffeeCapacityUpdate,
      sugarCapacityUpdate,
      milkCapacityUpdate,
      waterCapacityUpdate;
    const coffeeMug1 = document.getElementById("coffee-image-2");
    const coffeeMug2 = document.getElementById("coffee-image-1");
    const coffeeMug3 = document.getElementById("coffee-image-3");
    const coffeeMug4 = document.getElementById("coffee-image-4");
    const errormsg = document.getElementById("error-msg");
    const light = document.getElementById("light-coffee-amount");
    const hard = document.getElementById("hard-coffee-amount");
    const hardWithSugar = document.getElementById(
      "hard-coffee-with-sugar-amount"
    );
    const lightWithSugar = document.getElementById(
      "light-coffee-with-sugar-amount"
    );
    const cup = document.getElementById("cup");

    light.style.display = "none";
    hard.style.display = "none";
    hardWithSugar.style.display = "none";
    lightWithSugar.style.display = "none";

    switch (true) {
      case waterRemaining == 0 ||
        sugarRemaining == 0 ||
        milkRemaining == 0 ||
        waterRemaining == 0: {
        errormsg.style.display = "block";
        coffeeMug1.style.display = "none";
        coffeeMug2.style.display = "none";
        coffeeMug3.style.display = "none";
        coffeeMug4.style.display = "none";
        break;
      }
      case hardSelect && sugarSelect: {
        coffeeMug2.style.display = "none";
        coffeeMug3.style.display = "none";
        coffeeMug4.style.display = "none";
        coffeeMug4.style.display = "none";
        setTimeout(() => {
          cup.style.display = "block";
        }, 1000);

        coffeeCapacityUpdate = coffeeRemaining - hardCoffeeAmount;
        setCoffeeRemaining(coffeeCapacityUpdate);
        sugarCapacityUpdate = sugarRemaining - sugarAmount;
        setSugarRemaining(sugarCapacityUpdate);
        milkCapacityUpdate = milkRemaining - milkAmount;
        setMilkRemaining(milkCapacityUpdate);
        waterCapacityUpdate = waterRemaining - waterAmount;
        setWaterRemaining(waterCapacityUpdate);
        break;
      }

      case hardSelect && !sugarSelect: {
        coffeeMug1.style.display = "none";
        coffeeMug3.style.display = "none";
        coffeeMug4.style.display = "none";
        coffeeMug3.style.display = "none";
        setTimeout(() => {
          cup.style.display = "block";
        }, 1000);

        coffeeCapacityUpdate = coffeeRemaining - hardCoffeeAmount;
        setCoffeeRemaining(coffeeCapacityUpdate);
        milkCapacityUpdate = milkRemaining - milkAmount;
        setMilkRemaining(milkCapacityUpdate);
        waterCapacityUpdate = waterRemaining - waterAmount;
        setWaterRemaining(waterCapacityUpdate);

        break;
      }

      case lightSelect && sugarSelect: {
        coffeeMug1.style.display = "none";
        coffeeMug2.style.display = "none";
        coffeeMug4.style.display = "none";
        coffeeMug2.style.display = "none";
        setTimeout(() => {
          cup.style.display = "block";
        }, 1000);

        coffeeCapacityUpdate = coffeeRemaining - lightCoffeeAmount;
        setCoffeeRemaining(coffeeCapacityUpdate);
        sugarCapacityUpdate = sugarRemaining - sugarAmount;
        setSugarRemaining(sugarCapacityUpdate);
        milkCapacityUpdate = milkRemaining - milkAmount;
        setMilkRemaining(milkCapacityUpdate);
        waterCapacityUpdate = waterRemaining - waterAmount;
        setWaterRemaining(waterCapacityUpdate);

        break;
      }

      case lightSelect && !sugarSelect: {
        coffeeMug1.style.display = "none";
        coffeeMug2.style.display = "none";
        coffeeMug3.style.display = "none";
        coffeeMug1.style.display = "none";
        setTimeout(() => {
          cup.style.display = "block";
        }, 1000);

        coffeeCapacityUpdate = coffeeRemaining - lightCoffeeAmount;
        setCoffeeRemaining(coffeeCapacityUpdate);
        sugarCapacityUpdate = sugarRemaining - sugarAmount;
        setSugarRemaining(sugarCapacityUpdate);
        milkCapacityUpdate = milkRemaining - milkAmount;
        setMilkRemaining(milkCapacityUpdate);
        waterCapacityUpdate = waterRemaining - waterAmount;
        setWaterRemaining(waterCapacityUpdate);

        break;
      }
      default:
        console.log("you havent choise any thing");
        break;
    }
  };

  const recipeAmount = () => {
    const hardSelect = document.getElementById("hard").checked;
    const lightSelect = document.getElementById("light").checked;
    const sugarSelect = document.getElementById("sugar-switch").checked;
    const coffeeCup = document.getElementById("coffee-image-2");
    const coffeeMug = document.getElementById("coffee-image-1");
    const light = document.getElementById("light-coffee-amount");
    const hard = document.getElementById("hard-coffee-amount");
    const hardWithSugar = document.getElementById(
      "hard-coffee-with-sugar-amount"
    );
    const lightWithSugar = document.getElementById(
      "light-coffee-with-sugar-amount"
    );
    const coffeeMug1 = document.getElementById("coffee-image-2");
    const coffeeMug2 = document.getElementById("coffee-image-1");
    const coffeeMug3 = document.getElementById("coffee-image-3");
    const coffeeMug4 = document.getElementById("coffee-image-4");
    const errormsg = document.getElementById("error-msg");
    const cup = document.getElementById("cup");
    switch (true) {
      case hardSelect && sugarSelect: {
        light.style.display = "none";
        hard.style.display = "none";
        lightWithSugar.style.display = "none";
        coffeeMug1.style.display = "none";
        coffeeMug2.style.display = "none";
        coffeeMug3.style.display = "none";
        coffeeMug4.style.display = "none";
        errormsg.style.display = "none";
        cup.style.display = "none";
        hardWithSugar.style.display = "block";
        break;
      }
      case lightSelect && sugarSelect: {
        light.style.display = "none";
        hard.style.display = "none";
        hardWithSugar.style.display = "none";
        coffeeCup.style.display = "none";
        coffeeMug.style.display = "none";
        errormsg.style.display = "none";
        coffeeMug1.style.display = "none";
        coffeeMug2.style.display = "none";
        coffeeMug3.style.display = "none";
        coffeeMug4.style.display = "none";
        cup.style.display = "none";
        lightWithSugar.style.display = "block";
        break;
      }
      case hardSelect && !sugarSelect: {
        light.style.display = "none";
        hardWithSugar.style.display = "none";
        lightWithSugar.style.display = "none";
        coffeeCup.style.display = "none";
        coffeeMug.style.display = "none";
        errormsg.style.display = "none";
        coffeeMug1.style.display = "none";
        coffeeMug2.style.display = "none";
        coffeeMug3.style.display = "none";
        coffeeMug4.style.display = "none";
        cup.style.display = "none";
        hard.style.display = "block";
        break;
      }
      case lightSelect && !sugarSelect: {
        hard.style.display = "none";
        hardWithSugar.style.display = "none";
        lightWithSugar.style.display = "none";
        coffeeCup.style.display = "none";
        coffeeMug.style.display = "none";
        errormsg.style.display = "none";
        coffeeMug1.style.display = "none";
        coffeeMug2.style.display = "none";
        coffeeMug3.style.display = "none";
        coffeeMug4.style.display = "none";
        cup.style.display = "none";
        light.style.display = "block";
        break;
      }
      default:
        console.log("error in recipeAmount");
        break;
    }
  };
  const spinnerFunction = function () {
    var button = document.getElementsByClassName("button")[0],
      spinner = '<span class="spinner"></span>';

    if (!button.classList.contains("loading")) {
      button.classList.add("loading");
      button.innerHTML = spinner;

      setTimeout(function () {
        button.classList.remove("loading");
        button.innerHTML = "Make";
        prepareCoffee();
      }, 2000);
    } else {
      button.classList.remove("loading");
      button.innerHTML = "Make";
    }
  };
  const refilledStock = () => {
    const errormsg = document.getElementById("error-msg");
    switch (true) {
      case !coffeeRemaining:
        setCoffeeRemaining(coffeeStock);
        errormsg.style.display = "none";
        break;
      case !milkRemaining:
        setMilkRemaining(milkStock);
        errormsg.style.display = "none";
        break;
      case !sugarRemaining:
        setSugarRemaining(sugarStock);
        errormsg.style.display = "none";
        break;
      case !waterRemaining:
        setWaterRemaining(waterStock);
        errormsg.style.display = "none";
        break;
      default:
        {
          console.log("error in refilledStock");
          break;
        }
    }
  };
  return (
    <section className="menu" id="menu">
      <h1 className="heading" data-aos="fade-up">
        {" "}
        ORDER NOW<span>order now</span>{" "}
      </h1>
      <div className="main-container">
        <div className="box-container">
          <a href="#hk" className="box" data-aos="fade-right">
            <img
              srcSet={require("../image/coffee-powder-icon.png")}
              alt=""
            />
            <div className="content">
              <h3>Coffee</h3>
              <span>{coffeeRemaining} gram</span>
            </div>
          </a>
          <a href="#hk" className="box" data-aos="fade-right">
            <img srcSet={require("../image/sugar-icon.png")} alt="" />
            <div className="content">
              <h3>Sugar</h3>
              <span>{sugarRemaining} gram</span>
            </div>
          </a>
          <a href="#hk" className="box" data-aos="fade-right">
            <img srcSet={require("../image/milk-icon.png")} alt="" />
            <div className="content">
              <h3>Milk</h3>
              <span>{milkRemaining} ml</span>
            </div>
          </a>
          <a href="#hk" className="box" data-aos="fade-right">
            <img srcSet={require("../image/water-icon.png")} alt="" />
            <div className="content">
              <h3>Water</h3>
              <span>{waterRemaining} ml</span>
            </div>
          </a>
        </div>
        <div className="middle-div" data-aos="fade-right">
          <h3 className="coffeeChoice">What type of Coffee do you want?</h3>
          <div className="radio-btn" id="coffee-type">
            <input
              type="radio"
              name="coffeetype"
              id="hard"
              value="hard"
              onClick={recipeAmount}
            />
            <label className="label" htmlFor="hard">
              <h3>Hard</h3>
            </label>
            <br />
            <input
              type="radio"
              name="coffeetype"
              id="light"
              value="light"
              onClick={recipeAmount}
            />
            <label className="label" htmlFor="light">
              <h3>Light</h3>
            </label>
          </div>
          <div className="sugar-btn">
            <h3>add sugar ?</h3>
            <label className="switch">
              <input type="checkbox" id="sugar-switch" onClick={recipeAmount} />
              <span className="slider round"></span>
            </label>
          </div>
          <button className="button" onClick={spinnerFunction}>
            Make
          </button>
        </div>
      
        <div className="box-container " id="hard-coffee-amount">
          <a href="#hk" className="box">
            <div className="content">
              <h3>Coffee</h3>
              <span>25 gram</span>
              <h3>Milk</h3>
              <span>100 ml</span>
              <h3>water</h3>
              <span>200 ml</span>
            </div>
          </a>
        </div>
        <div className="box-container " id="light-coffee-amount">
          <a href="#hk" className="box">
            <div className="content">
              <h3>Coffee</h3>
              <span>15 gram</span>
              <h3>Milk</h3>
              <span>100 ml</span>
              <h3>water</h3>
              <span>200 ml</span>
            </div>
          </a>
        </div>
        <div className="box-container " id="light-coffee-with-sugar-amount">
          <a href="#hk" className="box">
            <div className="content">
              <h3>Coffee</h3>
              <span>15 gram</span>
              <h3>Sugar</h3>
              <span>10 gram</span>
              <h3>Milk</h3>
              <span>100 ml</span>
              <h3>water</h3>
              <span>200 ml</span>
            </div>
          </a>
        </div>
        <div className="box-container " id="hard-coffee-with-sugar-amount">
          <a href="#hk" className="box">
            <div className="content">
              <h3>Coffee</h3>
              <span>25 gram</span>
              <h3>Sugar</h3>
              <span>10 gram</span>
              <h3>Milk</h3>
              <span>100 ml</span>
              <h3>water</h3>
              <span>200 ml</span>
            </div>
          </a>
        </div>
        <div className="box-container" id="error-msg">
          <a className="box" href="#hk">
            <div className="content">
              <h3>Our Stock is currently Empty please wait for refilled..</h3>
              <button className="btn" onClick={refilledStock}>
                refilled
              </button>
            </div>
          </a>
        </div>
        <div className="cup" id="cup">
          <div className="handle"></div>
          <img srcSet={require("../image/hot-coffee.png")} alt="hot-coffee-img"/>
        </div>
        <div className="image-container image" id="image-container">
          <img
            className="hand-image"
            id="coffee-image-1"
            srcSet={coffeeImage1}
            alt="coffeeImage"
          />
          <img
            className="hand-image"
            id="coffee-image-2"
            srcSet={coffeeImage2}
            alt="coffeeImage"
          />
          <img
            className="hand-image"
            id="coffee-image-3"
            srcSet={coffeeImage3}
            alt="coffeeImage"
          />
          <img
            className="hand-image"
            id="coffee-image-4"
            srcSet={coffeeImage4}
            alt="coffeeImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
