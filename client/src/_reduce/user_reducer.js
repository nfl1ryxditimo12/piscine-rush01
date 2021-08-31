import { LOGIN_USER, REGIST_USER, AUTH_USER } from "../_type/user_type";

const userState = {
  userData: {
    nickname: "oohyo",
    username: "nkim",
    profileUrl: "https://api.intra.42.fr/v2/users/nkim",
    email: "nkim@student.42seoul.kr",
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = userState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    case REGIST_USER:
      return { ...state, register: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    case AUTH_USER:
      return { ...state, userData: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
}
