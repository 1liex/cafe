import "./Box.css";
import Carde from "./Carde/Cardes";
import Button from "./Button/Button";
import s from "./Star_fill.svg";
import ss from "./Star.svg";
import photo from "./download.jpg";
import photo1 from "./gg.jpg";
export default function Box() {
  const orderss = [
    {
      id: 1,
      orderName: "Cofe",
      evaluate: "3.4",
      votes: "(6)",
      price: "10$",
      star: s,
      img: photo,
      solde: "sold out",
    },
    {
      id: 2,
      orderName: "Spanish lati",
      evaluate: "4.2",
      votes: "(20)",
      price: "13$",
      star: s,
      img: photo1,
    },
    {
      id: 3,

      evaluate: "0",
      votes: "(0)",
      price: "0$",
      star: ss,
    },
    {
      id: 4,

      evaluate: "0",
      votes: "(0)",
      price: "0$",
      star: ss,
    },
    {
      id: 5,

      evaluate: "0",
      votes: "(0)",
      price: "0$",
      star: ss,
    },
    {
      id: 6,

      evaluate: "0",
      votes: "(0)",
      price: "0$",
      star: ss,
    },
   
  ];

  const gg = orderss.map((order) => {
    return (
      <Carde
        key={order.id}
        orderName={order.orderName}
        img={order.img}
        evaluate={order.evaluate}
        votes={order.votes}
        price={order.price}
        star={order.star}
        sold={order.solde}
      />
    );
  });
  return (
    <>
      <div className="box">
        <div className="div">
          <h1>Our Collection</h1>
          <p className="p">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <Button />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {gg}
          </div>
        </div>
      </div>
    </>
  );
}
