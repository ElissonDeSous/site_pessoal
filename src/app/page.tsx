'use client'

import Link from "next/link";
import Image from "next/image";
import ladingpage from './img/ladingpage.jpg'
import siteInstitucional from './img/siteinstituicional.jpg'
import Rodape from "./components/footer/rodape";
import Topo from "./components/topo/topo";


export default function Home() {
function Abrirmodal()
{
  const AbrirModal = document.getElementById('modal')
  const atendimento = document.getElementById('atendimento')

   atendimento?.classList.toggle('hidden') 
}

function fecharModal(){
   const atendimento = document.getElementById('atendimento')
   atendimento?.classList.toggle('hidden')
}



  return (
  
    <div className="bg-[#222831]">
      <Topo/>
      <div className="   bg-[#222831]  text-white">
        <div className="flex mb-5  flex-col justify-center">

          <div className="banner flex flex-col justify-center items-center lg:w-full h-[600px] ">
              <h1 className="text-white flex ml-5  font-bold text-3xl lg:text-5xl ">Inovação e tecnologia para impulsionar o seu negócio</h1>

              <button  onClick={Abrirmodal}  className="rounded-xl mt-9 bg-red-500 w-[300px] font-bold flex justify-center items-center h-10">Agendamento online</button>


          
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
           
           <div id="atendimento" className="  text-black mt-2 flex hidden  justify-center items-center w-full fixed top-0 left-0 bg-black/50 h-full">
              <div className="flex flex-col border-solid border-red-500 border-1 justify-betwee w-[300px] items-center bg-white lg:w-[400px] h-[500px]">
                   <div className=" flex flex-col items-center justify-center   h-[400px]">
                    <h1 className="p-2 text-2xl lg:text-3xl">Atendimento Online</h1>
                      <form action="" className="w-full h-[300px] flex flex-col justify-around items-center">
                     
                         <input placeholder="Digite seu nome " className="border-solid pl-10 border-black border-2 lg:w-[300px] h-[50px] rounded-md" type="text" name="" id="" />
                         <input placeholder="Digite seu email " className="border-solid pl-10 border-black border-2 lg:w-[300px] h-[50px] rounded-md" type="email" name="" id="" />
                       
                         <textarea name="" id="" className="border-solid pl-10 border-black border-2 w-[200px] lg:w-[300px] h-[100px] rounded-md" placeholder="Digite uma mensagem" >
                         
                          
                         </textarea>
                         <input type="button" className="bg-green-500 p-2 h-[50px] w-[200px] rounded-md relative top-16" value="Enviar" />
                      </form>
                   </div>
                   <div className="flex justify-center ">
                      <button onClick={fecharModal} className= "text-gray-500  w-[200px] relative left-32 bottom-[400px] lg:relative lg:left-[180px] lg:bottom-[400px] text-2xl  p-2 mb-5">X</button>
                   </div>
              </div>
           </div>
        </div>
     
      </div>
      <Rodape/>
    </div>
   
  );
}
