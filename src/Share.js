import AppStore from "./assets/app-store.svg";
import PlayStore from "./assets/play-store.png";
import Avokiddo from "./assets/avokiddo-logo.png";
import { useState, useEffect } from "react";
export const Share = () => {
  const [inviteData, setInviteData] = useState({
    platform: "",
  });
  useEffect(() => {
    const url = new URL(window.location.href);
    const platform = url.searchParams.get("platform") ?? "all";
    console.log("platform---->", platform);
    setInviteData({
      platform: platform,
    });
  }, []);
  return (
    <div>
      <h1>Download Avokiddo</h1>
      <div>
        {(inviteData.platform === "ios" || inviteData.platform === "all") && (
          <a href="itms-apps://play.google.com/store/apps">
            <img src={AppStore} alt="apple" />
          </a>
        )}
        {(inviteData.platform === "android" ||
          inviteData.platform === "all") && (
          <a href="market://details?id=com.android.vending">
            <img src={PlayStore} alt="google" />
          </a>
        )}
      </div>
    </div>
  );
};
