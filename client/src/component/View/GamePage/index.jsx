import React from "react";

import Base from "../../Layout";

import { WrongWidthAlert, GameBackGround } from "./GameComponent";
import { WrongWidth, RightWidth } from "../../Layout/MediaQuery";

import space from "../../Image/Card/Space/1.png";

import classes from "./index.module.css";
import "../../../style/font.css";
import { Button } from "antd";

const GamePage = () => {
  return (
    <>
      <WrongWidth>
        <Base>
          <WrongWidthAlert>최소 크기 850px로 맞춰주세요.</WrongWidthAlert>
        </Base>
      </WrongWidth>

      <RightWidth>
        <Base>
          <div style={{ textAlign: "center" }}>
            <GameBackGround>
              <div className={classes.gameGround}>
                {/* Leave 버튼 누를 시 서버에 게임 종료 요청을 보낸다 */}
                <div className={classes.LeaveRoom}>Leave</div>

                {/* 배팅 금액 설정 최소 1 이상 */}
                <div className={classes.BettingSetting}>
                  <div className={classes.BettingCount}>1</div>
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

                {/* 게임 시작 시 서버에서 Opponent 닉네임을 받아온다. */}
                <div className={classes.UserName}>seonkim</div>

                {/* 남은 코인을 socket을 통해 받아와 useState로 저장 후 출력 */}
                <div className={classes.LeftCoin}>ˣ 5</div>

                {/* 서버로 부터 현재 상대방이 뽑은 카드 정보를 얻어와 화면에 출력한다 */}
                <div className={classes.Card}>
                  <img style={{ width: "150px" }} src={space} alt="sapce_1" />
                </div>

                {/* socket을 통해 시간 카운트 다운을 한다. */}
                <div className={classes.Clock}>40</div>

                <div className={classes.ControlButton}>
                  <div>
                    {/* Betting 시 socket.emit으로 서버에 얼마의 코인이 베팅되었는지 보낸다 */}
                    <Button
                      type="default"
                      danger
                      style={{ marginBottom: "1px" }}
                    >
                      Betting
                    </Button>
                  </div>
                  <div>
                    {/* 누르면 현재 턴을 포기한다고 간주하여 1코인을 차감하고 서버에 포기 요청을 보낸다. */}
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
