import React from "react";

import Base from "../../Layout";

import { WrongWidthAlert, GameBackGround } from "./GameComponent";
import { WrongWidth, RightWidth } from "../../Layout/MediaQuery";

import space from "../../Image/Card/Space/1.png";

import classes from "./index.module.css";
import "../../../style/font.css";
import { Input, Button, Card } from "antd";

const GamePage = () => {
  const textCenter = {
    textAlign: "center",
  };

  const relative = {
    position: "relative",
  };

  const absolute = {
    position: "absolute",
  };

  return (
    <>
      <WrongWidth>
        <Base>
          <WrongWidthAlert>최소 크기 850px로 맞춰주세요.</WrongWidthAlert>
        </Base>
      </WrongWidth>

      <RightWidth>
        <Base>
          <div style={textCenter}>
            <GameBackGround>
              <div className={classes.gameGround}>
                <div className={classes.LeaveRoom}>Leave</div>
                <div className={classes.BettingSetting}>
                  <div className={classes.BettingCount}>0</div>
                  <div>
                    <Button
                      type="default"
                      danger
                      style={{ marginRight: "1px" }}
                    >
                      +
                    </Button>
                    <Button type="default" danger style={{ marginLeft: "1px" }}>
                      -
                    </Button>
                  </div>
                </div>
                <div className={classes.UserName}>seonkim</div>
                <div className={classes.LeftCoin}>ˣ 5</div>
                <div className={classes.Coin}></div>
                <div className={classes.Card}>
                  <img style={{ width: "150px" }} src={space} alt="sapce_1" />
                </div>
                <div className={classes.Clock}>40</div>
                <div className={classes.ControlButton}>
                  <div>
                    <Button
                      type="default"
                      danger
                      style={{ marginBottom: "1px" }}
                    >
                      Betting
                    </Button>
                  </div>
                  <div>
                    <Button type="default" danger style={{ margintop: "1px" }}>
                      Give up
                    </Button>
                  </div>
                </div>
              </div>
            </GameBackGround>
          </div>
        </Base>
      </RightWidth>
    </>
  );
};

export default GamePage;
