import "./Box.css";
import Carde from "./Carde/Cardes";
import Button from "./Button/Button";
import s from "./Star_fill.svg";
import ss from "./Star.svg";
import photo from "./download.jpg";
import photo1 from "./gg.jpg";
import photo2 from "./c.jpg";
// -----------------------------------
export default function Box() {
  const orderss = [
    {
      id: 1,
      orderName: "Coffe",
      evaluate: "3.4",
      votes: "(6)",
      price: "10$",
      star: s,
      img: photo,
      solde: "sold out",
    },
    {
      id: 2,
      orderName: "Spanish latte",
      evaluate: "4.2",
      votes: "(20)",
      price: "13$",
      star: s,
      img: photo1,
    },

    {
      id: 3,
      orderName: "Cappuccino",
      evaluate: "4.8",
      votes: "(70)",
      price: "6$",
      star: s,
      img: photo2,
    },
  ];

  const coffe = orderss.map((order) => {
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
            {coffe}
          </div>
        </div>
      </div>
    </>
  );
}
// ---------------------------------------------------------