import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { auth } from "./firebase";
import { useEffect } from "react";
//BASE_URIV= mongodb+srv://user:<password>@cluster0.ytkqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            uid: authUser.uid,
            photoavatar: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          },
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <div className="facebook">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
