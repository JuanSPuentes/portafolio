const About = () => {
  return (
    <div
      name="Sobre Mi"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre Mi
          </p>
        </div>

        <p className="text-xl mt-5">
        Soy un programador sin experiencia. Aunque no tengo experiencia en el campo, tengo muchas ganas de aprender y estoy dispuesto a trabajar duro para convertirme en un programador experto.
        </p>
        <br />
        <p className="text-xl">
        Tengo algunas cualidades que creo que pueden ser de gran valor para cualquier 
        equipo de programación. Soy muy dedicado y trabajo muy duro para alcanzar mis metas. 
        Además, soy muy analítico y tengo una gran capacidad de resolución de problemas. 
        También soy muy bueno en trabajar en equipo y me gusta colaborar con otros para encontrar soluciones creativas a los problemas que se presentan.
        <br />
        Espero tener la oportunidad de unirme a un equipo de programación y aprender de mis 
        compañeros mientras contribuyo con mis habilidades y cualidades. Estoy seguro de que, 
        con el tiempo y la dedicación, puedo convertirme en un valioso miembro de cualquier 
        equipo de programación.
        </p>
      </div>
    </div>
  );
};

export default About;
