import { BiComment } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { BiMessageAltCheck } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
import { StyledDescription, StyledFirstStep, StyledHome, StyledImgPrinc, StyledSecondStep, StyledStepByStep, StyledSteps, StyledStepsContainer, StyledSub, StyledText, StyledThirdStep } from "./Home.style";
import Layout from "./layout";
import Image from 'next/image';

export default function Home() {
    return (
        <Layout>
            <section className="mt-8">

                <div className="flex">

                    <div className="flex flex-col ml-60 mr-40 mt-28">
                        <h1 className="font-extrabold text-2xl">Conheça nossa inteligência artificial avançada, <br /> 
                        projetada para simplificar <br />
                        o processo de diagnóstico do seu veículo.</h1>

                        <p className="mt-4 text-[1.3rem]">O Brain Drive irá analisar e compreender as informações que você <br />
                        fornece sobre o problema do seu carro, oferecendo um <br />
                        auto-diagnóstico preciso e facilitando sua visita às nossas agências.
                        </p>
                    </div>

                    <div className="relative">
                      <Image className='absolute ml-80 w-24 h-24 sm:ml-52 md:ml-52 lg:ml-84 w-24 h-24' src="/BolinhasDeco.png" alt="Decoração" />
                      <Image className='sm:ml-0 sm:mr-0 md:ml-12 md:h-68 md:w-68 lg:ml-12 lg:h-88 lg:w-88' src="/InteligenciaArt.png" alt="Logo Porto" />
                    </div>

                </div>

                <div className=" mt-24 ml-16">
                    <h2>Usando a IA em alguns passos:</h2>
                </div>

                <article className="min-h-[10rem] m-0 mt-16 mb-16 rounded-[6rem] bg-[#dbe3ff] flex justify-center
                      sm:min-h-[45rem] sm:min-w-[20rem] sm:mt-8 sm:mr-8 sm:ml-8 sm:box-border sm:rounded-[6rem] 
                      md:min-h-[10rem] md:m-20 md:mt-16 md:mb-16 md:rounded-[6rem] md:flex md:justify-center md:items-center
                      lg:h-[50rem] lg:mt-12 lg:mb-[2.5rem] lg:mr-20 lg:ml-20 lg:box-border lg:rounded-[6rem] lg:flex lg:justify-center">

                    <div className="flex m-4 min-w-[300px]
                          sm:flex-wrap sm:w-full sm:mx-auto sm:justify-center sm:items-center sm:ml-0
                          md:flex-col md:m-4 md:min-w-[300px] md:justify-center md:items-center
                          lg:max-w-full lg:max-h-[400px] 
                          xl:flex-wrap xl:w-full xl:mx-auto xl:items-center xl:justify-center">

                        <StyledFirstStep>
                            <StyledSteps>
                                <img  src="/public/WatsonIA.png" alt="Icone watson" />
                                <h3>Passo 1: Inicie a conversa</h3>
                                <p>Clique no ícone do chatbot para iniciar a conversa com nossa inteligência artificial.</p>
                            </StyledSteps>
            
                            <StyledSteps>
                                <BiComment size="2rem"/>
                                <h3>Passo 2: Descreva o Problema</h3>
                                <p>
                                  Descreva o problema que você está enfrentando com o seu carro de forma clara e detalhada.
                                  Exemplo: "Meu carro está fazendo um barulho estranho quando eu viro à esquerda."
                                </p>
                            </StyledSteps>
                        </StyledFirstStep>

                        <StyledSecondStep>
                            <StyledSteps>
                                <BiListUl size="2.5rem"/>
                                <h3>Passo 3: Responda às Perguntas</h3>
                                <p>O chatbot fará uma série de perguntas para entender melhor o problema do seu carro.</p>
                            </StyledSteps>
            
                            <StyledSteps>
                                <BiMessageAltCheck size="2rem"/>
                                <h3>Passo 4: Receba o Diagnóstico</h3>
                                <p>Com base nas suas respostas, o chatbot fornecerá um diagnóstico preliminar do problema do seu carro, juntamente com possíveis causas.</p>
                            </StyledSteps>
                        </StyledSecondStep>

                        <StyledThirdStep>
                            <StyledSteps>
                                <BiCar size="2.2rem"/>
                                <h3>Passo 5: Vá até a agencia Porto mais próxima.</h3>
                            </StyledSteps>
                        </StyledThirdStep>

                    </div>

                </article>
            </section>
        </Layout>
    )
}
