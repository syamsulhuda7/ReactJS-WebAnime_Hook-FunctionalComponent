/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicCard({ data }) {
  return (
    <div className="d-flex flex-wrap gap-5 m-5 justify-content-center">
      {data.map((item, i) => (
        <Card key={i} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.images.jpg.image_url} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.year}</Card.Text>
            <Button variant="primary">Detail...</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BasicCard;
