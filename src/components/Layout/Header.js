import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div>
        <img
          src={mealsImage}
          alt="A Table of full of delicious food!"
          className={`${classes.mainimage}`}
        />
      </div>
    </Fragment>
  );
};
export default Header;
