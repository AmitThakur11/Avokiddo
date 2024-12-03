import AppStore from "./assets/app-store.svg";
import PlayStore from "./assets/play-store.png";
export const Share = () => {
  return (
    <div>
      <h1>Get Avokiddo</h1>
      <div>
        <a href="itms-apps://play.google.com/store/apps">
          <img src={AppStore} alt="apple" />
        </a>

        <a href="market://details?id=com.android.vending">
          <img src={PlayStore} alt="google" />
        </a>
      </div>
    </div>
  );
};
