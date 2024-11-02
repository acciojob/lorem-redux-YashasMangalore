import React, { useEffect } from "react";
import "./../styles/App.css";
import PropTypes from "prop-types";

const APP = ({
  Begin,
  cards,
  Timer,
  WhenClick,
  WhenReset,
  Collect,
  Update,
}) => {
  useEffect(() => {
    if (Begin) {
      try {
        Time(); // Ensure Time is defined or passed as a prop
      } catch (e) {
        console.error("Error in useEffect:", e);
      }
    }
  }, [Begin]); // Runs when Begin changes

  console.log(Update, Begin, Timer);

  return (
    <div>
      <div>
        <Menu timer={Timer} WhenReset={WhenReset} />
      </div>
      <div className="main_game">
        {cards.map((value, index) => (
          <SmallBox
            key={index}
            src={value.src}
            index={index}
            id={value.name}
            displayer={value.Display}
            WhenClick={WhenClick}
            Collect={Collect}
          />
        ))}
      </div>
    </div>
  );
};

APP.propTypes = {
  Begin: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  Timer: PropTypes.number.isRequired,
  WhenClick: PropTypes.func.isRequired,
  WhenReset: PropTypes.func.isRequired,
  Collect: PropTypes.func.isRequired,
  Update: PropTypes.any.isRequired,
};

export default APP;
