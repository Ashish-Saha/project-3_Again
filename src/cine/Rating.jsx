import star from "../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(star);

  return (
    <>
      {stars.map((item, index) => {
        return <img key={index} src={item} alt="starIcon" />;
      })}
    </>
  );
}
