import "../../styles/Menu.css";
import useMenuStore from "../../menuStore";

const Menu = (props) => {
  const { menu, setMenu } = useMenuStore();

  const handleClickButton = () => {
    setMenu(props.text);
    // console.log(menu);
  };

  return (
    <li id="mainMenu" onClick={handleClickButton}>
      {props.text}
    </li>
  );
};

export default Menu;
