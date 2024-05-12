export default function Content(props) {
  return (
    <div className="content">
      <img src={props.img} alt="props.image" className="content-img" />
      <h3 className="content-title">{props.text}</h3>
      <h4 className="content-subtitle">{props.subText}</h4>
    </div>
  );
}
