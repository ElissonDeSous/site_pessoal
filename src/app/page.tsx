
import Link from "next/link";
import Pagina from "./components/Pagina";


export default function Home() {
  return (

    <Pagina >
      <div className=" flex flex-col h-[900px] bg-[#222831]  text-white">
        <div className="flex  flex-col justify-center">

          <div className="banner flex flex-col justify-center items-center lg:w-full h-[600px] ">
              <h1 className="text-white flex ml-5  font-bold text-3xl lg:text-5xl ">Inovação e tecnologia para impulsionar o seu negócio</h1>

              <Link className= " rounded-xl mt-9 bg-red-500 w-[300px] font-bold flex justify-center items-center h-10"  href=''>Agendamento Online</Link>
          </div>

          <div>
             <h1>fon</h1>
          </div>

        </div>
      </div>
    </Pagina>

  );
}
