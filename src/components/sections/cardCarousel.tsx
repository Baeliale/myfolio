import Assassin from "@/assets/images/assassin.jpg"
import Cleric from "@/assets/images/cleric.jpg"
import Dragoon from "@/assets/images/dragoon.jpg"
import Forest from "@/assets/images/forest.jpg"
import Mountain from "@/assets/images/mountain.jpg"
import Heaven from "@/assets/images/heaven.jpg"
import Terrasque from "@/assets/images/terrasque.jpg"
import Werezilla from "@/assets/images/wherezilla.jpg"
import Lycan from "@/assets/images/lycanthropy.jpg"
import Camera from "@/assets/images/camera.png"
import Image from "next/image"
import "@/styles/carousel.css"

export const CardCarousel = () => {
const images = [
  {
    alt: "Fantasy assasin with a dragon flying over them", 
    ...Assassin,
  },
  {
    alt: "Fantasy cleric woman in a white robe casting a spell", 
    ...Cleric,
  },
  {
    alt: "Fantasy dragon dragoon with a lance", 
    ...Dragoon,
  },
  {
    alt: "Fantasy forest scenery", 
    ...Forest,
  },
  {
    alt: "Fantasy mountain scenery", 
    ...Mountain,
  },
  {
    alt: "Fantasy heaven scenery", 
    ...Heaven,
  },
  {
    alt: "Fantasy monster that looks like a huge t-rex", 
    ...Terrasque,
  },
  {
    alt: "Fantasy monster that looks like a mix between godzilla and a werewolf", 
    ...Werezilla,
  },
  {
    alt: "Fantasy werewolf standing tall with magic swirls adorning its body", 
    ...Lycan,
  },
]

  return (
    <section>
      <div className={"flex gap-4 justify-center banner"}>
        <div className="slider">
          {
            images.map((image, index) => (
              <div 
                key={`carousel-img-${index + 1}`} 
                className="item" 
                style={{
                  transform:`rotateY(calc(${index} * (360 / ${images.length}) * 1deg)) translateZ(var(--zDistance))`,
                }}
              >
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
              </div>
            ))
          }
        </div>
      </div>
      <div className={"flex justify-center -mt-[300px]"}>
        <Image className={"w-[300px]"} src={Camera.src} alt={"steampunk style golden camera"} width={Camera.width} height={Camera.height} />
      </div>
      <div className="text-center mt-4">
        <h1 className="text-3xl text-secondary font-pacifico">{"Share Your Creativity"}</h1>
      </div>
    </section>
  )
}