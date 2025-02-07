import Link from "next/link";
import Image from "next/image";
import ladingpage from './img/ladingpage.jpg'
import siteInstitucional from './img/siteinstituicional.jpg'
import Rodape from "./components/footer/rodape";
import Topo from "./components/topo/topo";


export default function Home() {
  return (
  
    <div className="bg-[#222831]">
      <Topo/>
      <div className="   bg-[#222831]  text-white">
        <div className="flex mb-5  flex-col justify-center">

          <div className="banner flex flex-col justify-center items-center lg:w-full h-[600px] ">
              <h1 className="text-white flex ml-5  font-bold text-3xl lg:text-5xl ">Inovação e tecnologia para impulsionar o seu negócio</h1>

              <Link className= " rounded-xl mt-9 bg-red-500 w-[300px] font-bold flex justify-center items-center h-10"  href='https://wa.me/12996322883?text=Olá, quero saber mais sobre os serviços da ESsoftware. Como funciona o processo de criação de um site?' target="_blank">Agendamento Online</Link>
          </div>

          <div className="flex flex-col items-center justify-center">
             <h1 className="md:text-4xl mt-6 h-[100px] flex items-center  text-2xl ">
                Áreas de atuações 
             </h1>

             <div className="md:flex ">
              <div className="bg-white text-black p-6 flex flex-col items-center border-black border-2 mt-20 border-solid mr-4">
                   <Image className="w-[300px]" src={ladingpage} alt="imagem de landing page"></Image>

                   <h2 className="text-2xl p-5 font-bold">Landing Page </h2>
                   <p className="w-[300px] text-justify">A <span className="font-bold">ESsoftware</span> oferecerá um design robusto, de alta performance e qualidade, utilizando as melhores tecnologias do mercado para a sua landing page. Criamos um design minimalista e atrativo, totalmente personalizado de acordo com as preferências do cliente.</p>
              </div>
              <div className="bg-white text-black p-6 flex flex-col items-center border-black border-2 mt-20 border-solid mr-4">
                   <Image className="w-[300px]" src={siteInstitucional} alt="imagem de landing page"></Image>

                   <h2 className="text-2xl font-bold p-5">Site Institucional </h2>
                   <p className="w-[300px] text-justify">A <span className="font-bold">ESsoftware</span> desenvolve sites institucionais modernos, responsivos e de alto desempenho, utilizando as melhores tecnologias do mercado. Criamos interfaces minimalistas, elegantes e funcionais, garantindo que sua empresa tenha uma presença digital forte e profissiona</p>
              </div>
             </div>
          </div>

        </div>
     
      </div>
      <Rodape/>
    </div>
   
  );
}
