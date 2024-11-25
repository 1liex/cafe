import "./Box.css";
import Carde from "./Carde/Cardes";
import Button from "./Button/Button";
import s from "./Star_fill.svg";
import ss from "./Star.svg";
import photo from "./download.jpg";
import photo3 from "./g.jpg";
import photo1 from "./gg.jpg";
import photo2 from "./c.jpg";
import photo4 from "./m.jpg";
import photo5 from "./iced-caramel-latte.jpg";
import photo6 from "./s.jpg";
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

    {
      id: 4,
      orderName: "Espresso",
      evaluate: "",
      votes: "(7)",
      price: "13$",
      star: s,
      img: photo6,
    },
    {
      id: 5,
      orderName: "Iced caramel latte",
      evaluate: "4.3",
      votes: "(42)",
      price: "8$",
      star: s,
      img: photo5,
    },
    {
      id: 6,
      orderName: "Macha",
      evaluate: "1.2",
      votes: "(7)",
      price: "13$",
      star: s,
      img: photo4,
      solde: "sold out"
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
