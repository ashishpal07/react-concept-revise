import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  notificationAtom,
  networkAtom,
  messageAtom,
  jobAtom,
  totalNotificationSelector,
} from "./store/atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const notifications = useRecoilValue(notificationAtom);
  const networks = useRecoilValue(networkAtom);
  const [messages, setMessages] = useRecoilState(messageAtom);
  const jobs = useRecoilValue(jobAtom);
  const totalNotifictions = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button> Home </button>

      <button>
        Notifications {notifications >= 100 ? "99+" : notifications}
      </button>
      <button onClick={() => setMessages((message) => message + 1)}>
        Messages {messages >= 100 ? "99+" : messages}
      </button>
      <button> Jobs {jobs >= 100 ? "99+" : jobs} </button>
      <button> My Network {networks >= 100 ? "99+" : networks} </button>

      <button> Me {totalNotifictions} </button>
    </div>
  );
}

export default App;
