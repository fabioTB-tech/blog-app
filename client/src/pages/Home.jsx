import { Link } from "react-router-dom";

// Component
import Window from "../components/Window";

function Home() {

  return (
    <section className="h-full flex flex-col justify-center items-center gap-16">
      <div className="bg-white w-2/4 p-5 rounded-lg border-container-border border-2">
        <div className="flex justify-center p-11">
          <div className="h-full w-fit"></div>
          <div className="h-full w-full text-center">
            <h1 className="text-5xl font-itim mb-6">Blog da Ahri</h1>
            <p className="font-poppins text-lg">Assuntos variados!</p>
            <p className="font-poppins text-lg">Combinando criatividade com programação.</p>
          </div>
          <div className="h-full w-fit"></div>
        </div>
        <div className="h-96 grid grid-cols-2 gap-5 justify-center">
          <Window>
            <div className="max-w-64 h-full p-2 border-2 overflow-y-auto border-x-purple-200 border-y-transparent bg-white">
              <h1 className="text-purple-900 text-xl text-center font-bold mb-1.5">Bem-vindo(a)<br/>ao meu blog!</h1>
              <p className="mb-2.5">
                Olá, eu me chamo Ahri e eu te dou as boas vindas ao meu site! Espero de coração que você se sinta confortável neste site, ele ainda está em desenvolvimento e eu estou colocando muito esforço nele.
                <br />
                Ok, mas antes de tudo:
              </p>
              <h2 className="text-purple-800 text-lg font-bold mb-1.5">Quem sou eu?</h2>
              <p className="mb-2.5">
                Eu sou uma artista e programadora, eu gosto de desenhar coisas simples como você pode ver pela minha OC ao lado, meu estilo é mais voltado para o cartoon mas eu já desenhei em outros estilos também.
                Eu também sou uma programadora, estive estudando desde o início de 2025 e agora eu estou construindo este site para ser o meu "cantinho" na internet
              </p>
              <h2 className="text-purple-800 text-lg font-bold mb-1.5">Sobre o site</h2>
              <p className="mb-2.5">
                Como eu disse acima, este site ainda está em desenvolvimento, a princípio ele é um blog mesmo onde eu estarei compartilhando de assuntos variados que eu acho interessante, tanto sobre tecnologia quanto coisas artísticas e criativas, neste site eu vou estar compartilhando minhas opiniões e pensamentos em relação à alguns assuntos dentro desses temas, também contarei minhas experiências com estes assuntos, como estudos, projetos, etc.
                Eu pretendo expandir este site ainda mais futuramente, adicionando coisas mais divertidas e outras úteis também.
                Caso você seja um programador ou programadora, sinta-se livre para acessar meu perfil no <a href="https://github.com/fabioTB-tech" rel="_blank">Github</a>, este site é open-source, então caso você queira colaborar com alguma ideia, melhorar alguma coisa, ou apenas estudar o código, vá em frente!
                Enfim, no mais é isto por agora, navegue o quanto quiser pelo site, obrigado por ler até aqui! {"(˶>⩊<˶)"}
              </p>
            </div>
          </Window>
          <Window>
            <div className="w-full h-full bg-[url(/square-pattern.jpeg)] bg-size-[auto_25px] flex justify-center">
              <img src="/ahriri-sticker.png" alt="Ahriri's OC" />
            </div>
          </Window>
        </div>
        <div className="w-full h-12 flex justify-center">
          <button className="p-2 px-11 bg-button border-button-border border rounded-md text-white cursor-pointer hover:bg-button-hover">
            <Link to="/blog">Ler postagens</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
