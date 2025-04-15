const About = () => {
    return (
      <section id="about" className="bg-[#2c3e50] text-white py-20 flex flex-col md:flex-row items-center justify-center px-6">
        {/* Foto de perfil */}
        <div className="w-36 h-36 mb-6 md:mb-0 md:mr-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="IMG_2889.jpeg" // verifique se a imagem está em public/IMG_2889.jpeg.
            alt="Foto de Sarah"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto descritivo */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>
          <p className="text-lg leading-relaxed">
            Olá! Me chamo <strong>Sarah Guterres</strong>, Profissional de Tecnologia da Informação, com sólida experiência e paixão por sistemas, infraestrutura e automação de processos. Desde o início da minha jornada, busquei entender como as tecnologias funcionam nos bastidores, o que me levou a desenvolver habilidades em análise de sistemas, suporte técnico, gerenciamento de redes e implementação de soluções eficientes. Tenho perfil analítico, foco em resultados e gosto de transformar desafios em oportunidades de melhoria contínua. Acredito na T.I. como um pilar estratégico para inovação e crescimento das organizações. 💻🛠️📈


          </p>
        </div>
      </section>
    );
  };

  export default About;