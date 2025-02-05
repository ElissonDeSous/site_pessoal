
import Link from "next/link";
import Pagina from "./components/Pagina";
import Image from "next/image";
import ladingpage from './img/ladingpage.jpg'
import siteInstitucional from './img/siteinstituicional.jpg'


export default function Home() {
  return (

    <Pagina >
      <div className=" flex flex-col  bg-[#222831]  text-white">
        <div className="flex  flex-col justify-center">

          <div className="banner flex flex-col justify-center items-center lg:w-full h-[600px] ">
              <h1 className="text-white flex ml-5  font-bold text-3xl lg:text-5xl ">Inovação e tecnologia para impulsionar o seu negócio</h1>

              <Link className= " rounded-xl mt-9 bg-red-500 w-[300px] font-bold flex justify-center items-center h-10"  href=''>Agendamento Online</Link>
          </div>

          <div className="flex flex-col items-center justify-center">
             <h1 className="md:text-4xl mt-6 h-[100px] flex items-center  text-2xl ">
                Áreas de atuações 
             </h1>

             <div className="md:flex ">
              <div className="bg-white text-black p-6 flex flex-col items-center border-black border-2 mt-20 border-solid mr-4">
                   <Image className="w-[300px]" src={ladingpage} alt="imagem de landing page"></Image>

                   <h2 className="text-3xl">Landing pages </h2>
                   <p className="w-[300px]">Uma Landing Page é essencial para qualquer estratégia digital porque ela foca em conversão. Ao invés de simplesmente levar tráfego para um site cheio de informações dispersas, a landing page direciona o visitante para uma ação específica, aumentando as chances de resultado</p>
              </div>
              <div className="bg-white text-black p-6 flex flex-col items-center border-black border-2 mt-20 border-solid mr-4">
                   <Image className="w-[300px]" src={siteInstitucional} alt="imagem de landing page"></Image>

                   <h2 className="text-3xl">site institucional </h2>
                   <p className="w-[300px]">Um site institucional é a vitrine digital do seu negócio, funcionando como um cartão de visitas online que transmite credibilidade e profissionalismo. Ele é essencial para fortalecer sua presença na internet e conquistar mais clientes</p>
              </div>
             </div>
          </div>

        </div>
      </div>
    </Pagina>

  );
}
