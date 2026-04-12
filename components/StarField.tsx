import { starProperties } from "@/types";
const starSrc = "/star.png"

type starFieldProps = {
  starList: starProperties[];
  reflect: boolean;
}
function StarField({starList, reflect} : starFieldProps) {
  return (
    <>
      {starList.map((star, idx) => {
        const starSize = star.size;
        const starTop = reflect ? 200 - star.top : star.top;
        const starLeft = reflect ? 100 - star.left : star.left;
        const starAnimationDuration = star.animationDuration;

        return (
          <img
            key = {idx}
            src = {starSrc}
            alt = "star"
            className = {`absolute aspect-square -translate-x-1/2 -translate-y-1/2 animate-star-twinkle z-0 ${reflect ? "rotate-180" : ""}`}
            style = {{
              height: starSize + "px",
              top: starTop + "%",
              left: starLeft + "%",
              animationDuration: starAnimationDuration
            }}
          />
        );
      })}
    </>
  );
}

export default StarField;