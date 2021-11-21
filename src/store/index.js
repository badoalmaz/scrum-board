import { types } from "mobx-state-tree";
import BoardStore from "./board";
import UserStore from "./users";

const RootStore = types.model("Root", {
  users: types.optional(UserStore, {}),
  boards: types.optional(BoardStore, {}),
});

export default RootStore;
