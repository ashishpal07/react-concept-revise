import { atom, selector } from "recoil";

export const notifications = atom({
  key: "notifications",
  // here we will use async query by creating selector in default
  default: {
    network: 4,
    job: 2,
    message: 4,
    notification: 12,
  },
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.job +
      allNotifications.message +
      allNotifications.notification
    );
  },
});
