import cancion from '../assets/song.mp3'
import Countdown from "./Countdown";
import InstagramWall from "./InstagramWall";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresLineal from "./LugaresLineal";
import DressCodeElegante from "./DressCodeElegante";
import GalleryElegante from "./GalleryElegante";
import MusicScreen from "./MusicScreen";

const Invitacion = () => {

  const colorPrincipal =  "white"
  const colorSecundario =  "black"


  return (
    <div className="w-full font-body relative overflow-hidden bg-[#f8f5f0]">
        <div className="absolute z-40">
          <MusicScreen cancion={cancion}/>
        </div>
      <div
        className="flex flex-col justify-center items-center h-screen w-full text-center bg-center bg-cover font-body relative"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1740756038/dom_3024_x_1960_px_4_dtinwr_nabgfh.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center space-y-5">
          <p className="text-white text-2xl">¡Nos casamos!</p>
          <h1 className="text-6xl md:text-8xl font-eleganteTitle text-white z-10 italic">
            Agustina & Guillermo
          </h1>
          <div className="flex items-center justify-center py-6 px-4 border-y-2 border-dashed border-gold">
            <p className="text-gold italic text-2xl">Viernes, 31 de Octubre de 2025</p>
          </div>
        </div>
      </div>
      <div className="font-body">
          <TextoFinal textoFinal={<>
              <p className='text-xl'>De común acuerdo y en plena posesión de nuestras facultades mentales<br /> (sean las que sean) <br /> Hemos decidido que ¡Nos casamos!</p>
            </>}/>  
        </div>

      <div>

          <div className="bg-[#171717] border-y-3 border-gold">
            <div data-aos="fade-up">
              <LugaresLineal  borderColor="border-gold" buttonStyle="border-gold text-lg" iglesia="[Nombre Iglesia]" hora_iglesia="10:00hs" salon="[Nombre Salón]" hora_civil="13:00hs" hora_fiesta="15:00hs" link_ceremonia="https://maps.app.goo.gl/khmDzfB1Wp6YTNFz8" link_fiesta="https://maps.app.goo.gl/qAhvgwbmEgVZ8mLq6"/>
            </div>
          </div>

          <div className="bg-[#171717] text-center relative text-white">
            <GoogleCalendarButton buttonClass="border-gold" titleCalendar="Casamiento de Anto y Nico"
              fechaComienzo="20251031T213000"
              fechaFin="20251101T043000"
              salon="Nos Sobran Los Motivos, Ruta 52, M5545 Uspallata, Mendoza"/>
          </div>
          <div className="">
            <DressCodeElegante dressCodeText="Disfraces Halloween"/>
          </div>
          <DatosBancarios
            texto="Aceptamos con mucho gusto cualquier detalle o regalo"
            claseIcon="text-gold"
            claseContenedor="bg-[#F8F5F0] text-[#1E1E1E]"
            claseBoton="hover:bg-[#D4AF37] transform transition-transform duration-300 ease-in-out font-semibold border-gold"
            textSize="text-xl"
            background={{backgroundColor: colorPrincipal}}
              styleBotonModal={{ backgroundColor: 'white',  borderColor: '#d4af37'}}
              claseBotonModal={{backgroundColor: "#d4af37", borderColor: "#d4af37"}}
              styleModal={{ backgroundColor: colorSecundario }}
              styleBorderModal={{ borderColor: colorPrincipal }}
              styleTextColor={{ color: colorPrincipal }}
            cbu=""
            alias="AntoyNico0612"
            banco="Nombre Banco"
            nombre="Nadia Antonella Casalone"
            claseModal="bg-black"
            borderModal="border-gold"
            textColor="text-gold"
          />
          <Asistencia
            clase="py-10 bg-[#171717] bg-fixed border-y-3 border-gold"
            claseTitle="text-gold"
            claseButton="border-2 border-[#D4AF37] font-semibold hover:bg-[#D4AF37] text-white"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSde-T3fOr056EJVkQFmy_7bfp0cQPdXygOVK0pDaU8lGk_ivw/viewform?usp=dialog"
          />
        {/* Texto Final */}
        <div className="font-eleganteTitle">
          <TextoFinal textoFinal={<>
              <p className='text-4xl'>¡Los queremos!</p><br /><p className='text-3xl'>Guillermo y Agustina</p>
            </>}/>  
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
