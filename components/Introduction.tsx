const starSrc = "/star.png"

type starProperties = {
  id: number;
  size: string;
  top: string;
  left: string;
  animationDuration: string;
}

let stars: starProperties[] = [];

function Introduction() {
  
  stars = [];
  for (let i = 0; i < 30; i++) {
    stars.push({
      id: i,
      size: (Math.random() * 7 + 7) + "px",
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      animationDuration: (Math.random() * 2 + 2) + "s"
    })
  }

  return(
    <div className="flex flex-col justify-center items-center bg-linear-to-b from-[midnightBlue] to-[skyBlue] h-[100vh]">

      {stars.map((star, idx) => {
        return(
          <img
          key={idx}
            src={starSrc}
            alt="star"
            className="absolute aspect-square -translate-x-1/2 -translate-y-1/2 animate-star-twinkle"
            style={{
              height: star.size,
              top: star.top,
              left: star.left,
              animationDuration: star.animationDuration
            }}
          />
        );
      })}

      <h1 className="font-caveat text-white text-[20vw] md:text-[10vw]">
        Haoshi Wu
      </h1>
      <p className="font-caveat text-white text-[5vw] md:text-[3vw]">
        Aspiring CS student at [insert univeristy here]
      </p>
      
    </div>
  );
}

export default Introduction;