import './css/App.css';
import logoRemoveBg from './assets/logo-removebg.png';
import { useEffect, useState } from 'react';
import { Carousel } from './components/Carousel';
import Button from './components/Button';
import iconWpp from './assets/Icons/whatsapp-brands-solid.svg'
import iconInsta from './assets/Icons/instagram-brands-solid.svg'
import iconSite from './assets/Icons/browser-svgrepo-com.svg'

const redirectWpp = () => {

  const mensage: string = encodeURIComponent(`Olá! Gostaria de saber mais informações !`);

  const number: number = 5521993497432;


  const wppMenssage = `https://api.whatsapp.com/send/?phone=${number}&text=${mensage}&type=phone_number&app_absent=0`;


  try {

    window.location.href = wppMenssage;

  } catch (error) {

    console.error("Erro ao redirecionar para o WhatsApp:", error);

    const fallbackLink = document.createElement('a');
    fallbackLink.href = wppMenssage;
    fallbackLink.textContent = "Clique aqui para abrir o WhatsApp";
    fallbackLink.style.color = 'blue';
    fallbackLink.style.textDecoration = 'underline';

    document.body.appendChild(fallbackLink);
    alert("Não foi possível redirecionar automaticamente. Por favor, clique no link exibido.");
  }

}

const redirectStore = () => {

  const urlStore = 'https://felicittafashion.offstore.me/home';

  try {

    window.location.href = urlStore;

  } catch (error) {

    console.error("Erro ao redirecionar para o WhatsApp:", error);

    const fallbackLink = document.createElement('a');
    fallbackLink.href = urlStore;
    fallbackLink.textContent = "Clique aqui para abrir o WhatsApp";
    fallbackLink.style.color = 'blue';
    fallbackLink.style.textDecoration = 'underline';

    document.body.appendChild(fallbackLink);
    alert("Não foi possível redirecionar automaticamente. Por favor, clique no link exibido.");
  }

}

const redirectInstagram = () => {

  const urlInstagram = 'https://www.instagram.com/felicitta_fashion?igsh=MW9sbGN1YXoyMmc3Yg==';


  try {

    window.location.href = urlInstagram;

  } catch (error) {

    console.error("Erro ao redirecionar para o WhatsApp:", error);

    const fallbackLink = document.createElement('a');
    fallbackLink.href = urlInstagram;
    fallbackLink.textContent = "Clique aqui para abrir o WhatsApp";
    fallbackLink.style.color = 'blue';
    fallbackLink.style.textDecoration = 'underline';

    document.body.appendChild(fallbackLink);
    alert("Não foi possível redirecionar automaticamente. Por favor, clique no link exibido.");
  }

}

export default function App() {

  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
  })

  return (
    <main>

      <div id='logo-image'>
        <img src={logoRemoveBg} alt="logo" width={width} />
      </div>

      <section>

        <h1>Bem vindo!</h1>

        <Carousel />

        <div className='container-buttons'>

          <Button
            icon={iconSite}
            text='Nossa loja!'
            pulse={true}
            onClick={redirectStore}
          />

          <Button
            icon={iconWpp}
            text='Fale com a gente!'
            onClick={redirectWpp}
          />

          <Button
            icon={iconInsta}
            text='Fotos!'
            onClick={redirectInstagram}
          />


        </div>
      </section>
    </main>
  )
}