import Link from "next/link"
import Rodape from "../components/footer/rodape"
import Topo from "../components/topo/topo"
export default function Servicos(){
    return(
      
          <div className="bg-[#222831]">
            <Topo/>
              <div className="bg-[#222831] mb-5  flex flex-col justify-center  text-white  items-center   ">
                <h1 className="md:text-4xl text-[18px] h-[100px] md:w-[900px] w-[100%] flex justify-center items-center">Utilizando as melhores tecnologias do mercado</h1>

                <div className="md:flex flex flex-col justify-center items-center md:justify-center ">
                 <div className="bg-white rounded-md mt-5 ml-2 flex p-5 flex-col items-center text-black w-[300px] md:w-[400px]">
                    <h1 className="md:text-4xl font-bold text-2xl flex justify-center">Landing page</h1>
                    <p className="md:w-[300px] text-justify mt-9">Uma landing page é um site de página única, ideal para divulgar marcas, empresas e serviços de diversos nichos. Ela é projetada com um foco específico: converter visitantes em clientes ou lead, Diferente de um site tradicional, uma landing page elimina distrações e direciona o usuário para uma ação principal, como </p>
                    <ul className="flex flex-col justify-around  h-[200px] mt ml-5 p-2  font-bold ">
                      <li className="">✔ Capturar e-mails e gerar leads</li>
                      <li className="">✔ Promover um produto ou serviço</li>
                      <li className="">✔ Divulgar eventos ou lançamentos</li>
                      <li className="">✔ Impulsionar vendas com chamadas diretas</li>
                    </ul>
                    <div className="  h-[200px] flex items-center ">
                    <Link className="font-bold p-5 rounded-md flex justify-center lg:w-[300px] bg-red-500" href="https://wa.me/12996322883?text=Olá, quero fazer um orçamento para Site institucional" target="_blank" >Solicitar um orçamento</Link>
                    </div>
                
                 </div>
                 <div className="bg-white rounded-md  p-5 mt-5 ml-2  text-black w-[300px] md:w-[400px] ">
                    <h1 className="md:text-4xl font-bold text-2xl flex justify-center">Site Institucional</h1>
                    <p className="text-justify mt-9">No mundo digital de hoje, ter um site institucional não é apenas um diferencial, mas uma necessidade. Ele funciona como o cartão de visitas online da sua empresa, transmitindo credibilidade, profissionalismo e facilitando o contato com seus clientes.
                    Um site institucional é uma página web criada para apresentar a identidade, valores, produtos e serviços de uma empresa. Diferente de um e-commerce ou um blog, ele tem o objetivo principal de informar e fortalecer a imagem da marca no ambiente digital.
                    </p>

                    <ul className="mt-5 p-2 flex flex-col justify-around  h-[200px]  font-bold ">
                      <li className="">✔ Credibilidade e Profissionalismo</li>
                      <li className="">✔ Presença Online 24/7</li>
                      <li className="">✔ Maior Alcance e Visibilidade</li>
                      <li className="">✔ Canal Direto de Comunicação</li>
                      <li className="">✔ Controle Total da Marca</li>
                      <li className="">✔ Custo-benefício</li>
                    </ul>
                    <div className="bg-red-500 p-5  lg:w-[300px] text-center rounded-md">
                       <Link className="font-bold " href="https://wa.me/12996322883?text=Olá, quero fazer um orçamento para Site institucional" target="_blank" >Solicitar um orçamento</Link>
                    </div>
                 </div>
              </div>
              </div>

              
            <Rodape/>
          </div>
             
          

          
      
    )
}