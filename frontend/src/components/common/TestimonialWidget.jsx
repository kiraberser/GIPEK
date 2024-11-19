import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialWidget({ rtl }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 16000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: rtl,
    responsive: [
      {
        breakpoint: 1024, // Tablets y pantallas medianas
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640, // Teléfonos
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const items = [
    {
      avatar: "https://via.placeholder.com/50",
      title: "Excelente producto",
      channel: "Facebook",
      description: "Los kits de jardinería son increíbles, muy fáciles de usar. Mis plantas están creciendo hermosas."
    },
    {
      avatar: "https://via.placeholder.com/50",
      title: "Gran experiencia",
      channel: "Facebook",
      description: "Me encantó la experiencia, aprendí mucho y ahora tengo un mini jardín en casa."
    },
    {
      avatar: "https://via.placeholder.com/50",
      title: "Muy recomendado",
      channel: "Facebook",
      description: "Productos de calidad y un servicio al cliente excelente. Sin duda volveré a comprar."
    },
    {
      avatar: "https://via.placeholder.com/50",
      title: "Fácil y práctico",
      channel: "Facebook",
      description: "Todo el proceso fue muy sencillo. Ahora tengo más confianza para cuidar mis plantas."
    },
    {
      avatar: "https://via.placeholder.com/50",
      title: "Atención excelente",
      channel: "Facebook",
      description: "El equipo de GIPEK respondió todas mis dudas rápidamente. ¡Un gran servicio!"
    },
    {
      avatar: "https://via.placeholder.com/50",
      title: "Calidad garantizada",
      channel: "Facebook",
      description: "Los materiales del kit son de alta calidad. Todo llegó en perfectas condiciones."
    },
    {
      avatar: "https://via.placeholder.com/50",
      title: "Perfecto para aprender",
      channel: "Facebook",
      description: "Con los kits de GIPEK aprendí a cuidar mejor mis plantas. ¡Gracias por el contenido educativo!"
    },
    {
      avatar: "https://via.placeholder.com/50",
      title: "100% recomendado",
      channel: "Facebook",
      description: "Una gran iniciativa que combina educación y sustentabilidad. Estoy muy contento con mi compra."
    },
    {
      avatar: "https://via.placeholder.com/50",
      title: "Un cambio positivo",
      channel: "Facebook",
      description: "Con estos kits, logré conectar más con la naturaleza. Me encanta mi pequeño jardín."
    }
  ];


  return (
    <div >
      <div className="sm:mt-16">
        {rtl ? <div><h1 className="text-4xl sm:text-5xl  md:text-6xl text-center text-green-600 m-4 sm:m-6 md:m-10 lg-pt-10">
          Cultivando tú conexión con la naturaleza
        </h1>
        </div> : null}
      </div>
      <div className="relative isolate bg-gray overflow-hidden text-black">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="p-4">
              <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-lg p-8 border border-gray-300 sm:w-auto">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={item.avatar}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full border border-gray-300"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.channel}</p>
                  </div>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialWidget;
