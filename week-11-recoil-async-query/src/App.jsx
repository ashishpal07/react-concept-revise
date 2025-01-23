import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications } from "./store/atom";

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

function Main() {
  const [notification, setNotification] = useRecoilState(notifications);

  return (
    <div>
      <button>
        Total notifications {notification.network}
      </button>
    </div>
  );
}

export default App;
