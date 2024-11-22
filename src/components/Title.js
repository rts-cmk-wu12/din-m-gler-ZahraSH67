
import cover from "@/assets/images/cover.png"
export default function Title({title}) {
  return (
    <div className=" relative h-[200px] w-full bg-cover bg-center mb-[2em]"
        style={{ backgroundImage: `url(${cover.src})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

           {/* Title text */}
        <div className="relative flex items-center justify-center h-full">
            <h1 className="text-white text-3xl md:text-6xl font-bold text-center">
           {title}
            </h1>
        </div>
      
    </div>
  )
}


{/* <div
className="absolute inset-0 bg-cover bg-center"
style={{
  backgroundImage: `url(${hero.src})`, // Replace with your image path
  filter: "brightness(50%) grayscale(80%)", // Low clarity and gray shade
}}
> */}