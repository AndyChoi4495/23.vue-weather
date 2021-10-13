// 상태(History)를 관리 함 => state의 값을 변화시킨다.
export default {
  MUT_COORDS (state, v) {
    state.coords = v
  },
  MUT_DAILY (state, v) {
    state.daily = v
  },
  MUT_DAYS (state, v) {
    state.days = v
  },
  MUT_CITY (state, v) {
    state.city = v
  }
}
