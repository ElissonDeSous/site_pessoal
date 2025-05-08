'use client'
import Image from 'next/image';
import Logo from './img/Logo.png'
import Link from 'next/link';
export default function Topo(){


    function menu(){
        let MenuAberto = document.getElementById('OpenMenu')
        MenuAberto?.classList.toggle('hidden')
    }

    return(
     <header className="h-[70px] fixed w-full flex  bg-black text-white items-center justify-around ">
            <div>
                <Link href="/">
                   <Image className='md:w-[70px] w-[70px]' src = {Logo} width={100} alt='Logo da empresa' />
                </Link>
                
            </div>
            <nav>
                    <div className='md:flex justify-around hidden  w-[600px]'>
                        <Link className='font-bold hover:text-red-500 ' href='/'>Página inicial</Link>
                        <Link className='font-bold hover:text-red-500' href='/servico'>Serviços</Link>
                        <Link className='font-bold hover:text-red-500' href='/servico'>Quem Somos</Link>
                        <Link className='font-bold hover:text-red-500' href='/servico'>Contato</Link>
                    </div>
                </nav>


              

                <div onClick={menu} className='md:hidden flex '>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="128" viewBox="0 0 128 128">
                <path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path><path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path><path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"></path><g><path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3,1.3 3,3S88.2,82,86.5,82z"></path></g>
             </svg>

                </div>
               
                <div id='OpenMenu' className='flex   flex-col md:hidden hidden  border-solid border-gray-500 border-t-2  absolute top-[70px]  bg-black w-full  h-[500px]   justify-around items-center'>
                        <Link className='font-bold hover:text-red-500 ' href='/'>Página inicial</Link>
                        <Link className='font-bold hover:text-red-500' href='/servico'>Serviços</Link>
                        <Link className='font-bold hover:text-red-500' href='/servico'>Quem Somos</Link>
                        <Link className='font-bold hover:text-red-500' href='/servico'>Contato</Link>
                    </div>
     </header>
    )
}
