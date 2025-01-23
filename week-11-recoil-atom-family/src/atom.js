import { atomFamily } from "recoil";

// todo will be something that we can make in some file or need to call from db

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (id) => (todo.find((todo) => todo.id === id)),
})

