import React from "react";
import "./../styles/App.css";

class APP extends React.Component {
  componentWillUpdate() {
    try {
      if (this.props.Begin === true) this.Time();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { Begin, cards, Timer, WhenClick, WhenReset, Collect, Update } =
      this.props;
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
  }
}

export default APP;
