import useMenuStore from "../../menuStore";
import "../../styles/MainSection.css";
import MenuList from "./MenuList";
import MainCarousel from "./MainCarousel";
import Profile from "../Profile/Profile";
import GalleryImageList from "../Gallery/GalleryImageList";

const MainSection = () => {
  const { menu, setMenu } = useMenuStore();

  return (
    <div id="section">
      <div id="sectionWrap">
        <MenuList />
        {menu === "HOME" ? (
          <MainCarousel />
        ) : menu === "PROFILE" ? (
          <Profile />
        ) : (
          <GalleryImageList />
        )}
      </div>
    </div>
  );
};

export default MainSection;
