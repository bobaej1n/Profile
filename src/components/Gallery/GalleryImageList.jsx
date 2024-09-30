import "../../styles/GalleryImageList.css";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";

const GalleryImageList = () => {
  return (
    <div id="galleryImageList">
      <div id="galleryImageListWrap">
        <ImageList sx={{ width: 1000, height: 600 }} cols={3}>
          <ImageListItem key="Subheader" cols={3}>
            <ListSubheader
              component="div"
              style={{
                fontSize: "18px",
                fontFamily: "NanumSquare",
                fontWeight: 600,
              }}
            >
              7월에 먹은 음식 !
            </ListSubheader>
          </ImageListItem>
          {imgList.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
              <ImageListItemBar
                style={{ fontWeight: "bold", fontFamily: "NanumSquare" }}
                title={item.title}
                subtitle={item.date}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

const imgList = [
  {
    img: "../../src/assets/images/열무비빔면.jpg",
    title: "열무비빔면",
    date: "2024-07-05",
  },
  {
    img: "../../src/assets/images/차도리탕.jpg",
    title: "차도리탕",
    date: "2024-07-07",
  },
  {
    img: "../../src/assets/images/명랑핫도그.jpg",
    title: "명랑핫도그",
    date: "2024-07-08",
  },
  {
    img: "../../src/assets/images/우니초밥.jpg",
    title: "(회전초밥) 우니 감태 초밥",
    date: "2024-07-09",
  },
  {
    img: "../../src/assets/images/명란오차즈케.jpg",
    title: "명란 오차즈케",
    date: "2024-07-11",
  },
  {
    img: "../../src/assets/images/골뱅이소면.jpg",
    title: "골뱅이 소면",
    date: "2024-07-11",
  },
  {
    img: "../../src/assets/images/엽떡.jpg",
    title: "동대문엽기떡볶이",
    date: "2024-07-13",
  },
  {
    img: "../../src/assets/images/닭한마리.jpg",
    title: "(초복기념) 닭한마리",
    date: "2024-07-15",
  },
  {
    img: "../../src/assets/images/마라탕.jpg",
    title: "마라탕",
    date: "2024-07-16",
  },
];

export default GalleryImageList;
