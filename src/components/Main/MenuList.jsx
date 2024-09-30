import "../../styles/MenuList.css";
import Menu from "./Menu";

const MenuList = () => {
  const content = [
    {
      id: 1,
      text: "HOME",
    },
    {
      id: 2,
      text: "PROFILE",
    },
    {
      id: 3,
      text: "GALLERY",
    },
  ];

  return (
    <div id="menuList">
      {content.map((data) => {
        return <Menu text={data.text} key={data.id}></Menu>;
      })}
    </div>
  );
};

export default MenuList;
