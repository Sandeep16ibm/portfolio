import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, live, code }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <button className=" m-3 card--button">
            <a className="" href={live} target="_blank" rel="noreferrer">
              LIVE
            </a>
          </button>
          <button class=" card--button">
            <a href={code}> CODE</a>
          </button>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
