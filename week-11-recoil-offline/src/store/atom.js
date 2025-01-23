import { atom, selector } from "recoil";

export const networkAtom = atom({
  default: 10,
  key: "networkAtom",
});

export const messageAtom = atom({
  default: 12,
  key: "messageAtom",
});

export const jobAtom = atom({
  default: 0,
  key: "jobAtom",
});

export const notificationAtom = atom({
  default: 102,
  key: "notificationAtom",
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const notificationAtomCount = get(notificationAtom);
    const messageAtomCount = get(messageAtom);
    const jobAtomCount = get(jobAtom);
    const networkAtomCount = get(networkAtom);

    return (
      notificationAtomCount + messageAtomCount + jobAtomCount + networkAtomCount
    );
  },
});
