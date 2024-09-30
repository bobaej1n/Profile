import "../../styles/Profile.css";
import { Grid, Box } from "@mui/material";

const Profile = () => {
  return (
    <div id="profile">
      <div id="profileWrap">
        <img id="profileImg" src="../../src/assets/images/profileImg.jpg" />
        <div id="description">
          <ul>
            <li>이혜진 &#40;&#9792;&#41;&#44; HYEJIN LEE</li>
            <li>2000&#46;03&#46;31</li>
            <li>EN&#40;S&#41;TJ</li>
            <li>한성대학교 학사 졸업</li>
            <ul>
              <li>모바일소프트웨어트랙</li>
              <li>웹공학트랙</li>
            </ul>
            <li>Tech Stack &#40;Front-end&#41;</li>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
