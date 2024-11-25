import "./Carde.css";
import cafe from "./cafe.jpg";
export default function Carde({
  img = cafe,
  orderName = "nothing",
  evaluate = "nothing",
  votes = "(nothing)",
  price = "nothing",
  star,
  sold,
}) {
  return (
    <>
      <div className="card">
        <div className="content">
          <img src={img} alt="f" />
        </div>
        <div className="price_ordername">
          <p className="ordername">{orderName}</p>
          <p className="price">{price}</p>
        </div>

        <div className="stars_evaluate">
          <div style={{ display: "flex" }}>
            <img src={star} alt="star" className="star" />
            <p className="evaluate">{evaluate}</p>
            <p className="votes">{votes}</p>
          </div>
          <div>
            <p className="sold" style={{ color: "#ED735D" }}>
              {sold}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
