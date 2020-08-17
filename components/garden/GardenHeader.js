import "./GardenHeader.module.css";
import styles from "../../styles/Home.module.css";

function GardenHeader(props) {
  const area = props.area;
  const title = area.replace("-", " ");
  const titleUpperCase = title.toUpperCase();
  return <h1 className={styles.heading}> {titleUpperCase} GARDENS</h1>;
}

export default GardenHeader;
