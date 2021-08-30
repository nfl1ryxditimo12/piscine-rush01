import React from "react";

import Base from "../../Layout";

import { WrongWidthAlert, GameBackGround } from "./GameComponent";
import { WrongWidth, RightWidth } from "../../Layout/MediaQuery";
import BettingState from "../../Image/Battle/betting_state.jpeg";
import Character from "../../Image/Battle/character.jpeg";
import MessageBox from "../../Image/Battle/message_box.jpeg";
import OpponentState from "../../Image/Battle/opponent_state.jpeg";

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
                <div className={classes.OpponentState}>
                  <img src={OpponentState} alt="opponent_state" />
                </div>
                <div className={classes.Character}>
                  <img src={Character} alt="character" />
                </div>
                <div className={classes.BettingState}>
                  <img src={BettingState} alt="betting_count" />
                </div>
                <div className={classes.MessageBox}>
                  <img src={MessageBox} alt="message_box" />
                </div>
                <div className={classes.BettingInput}>
                  <div>dd</div>
                  <div>
                    <Button>+</Button>
                    <Button>-</Button>
                  </div>
                </div>
                <div style={absolute}>
                  <Button
                    style={{
                      fontFamily: "ZCOOL KuaiLe, cursive",
                      fontSize: "20px",
                    }}
                    type="link"
                    danger
                  >
                    Leave
                  </Button>
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
