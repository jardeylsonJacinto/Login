
const Login = () => {
    return (
        <>
            <main className="w-full min-h-screen overflow-hidden bg-[#355B3E] p-8 flex items-center justify-center">

                <div className="box relative w-full max-w-[1020px] h-[640px] bg-white shadow-[0_60px_40px_-30px_rgba(0,0,0,0.27)] rounded-3xl p-8">

                    <div className="inner-box absolute w-[calc(100%-4.1rem)] h-[calc(100%-4.1rem)] ">

                        <div className="forms absolute h-full w-[45%] left-0 top-0">
                            <form action="" autoComplete="off" className="sign max-w-[350px] w-full  h-full mx-auto my-0 flex flex-col justify-evenly ">

                                <div className="logo flex items-center">
                                    <img src="" alt="" className='w-[40px] items-center mr-4' />
                                    <h3 className=' text-[2rem] mt-[-9px] tracking-[-0.5px] font-bold text-[#355B3E]'>Nômandice</h3>
                                </div>

                                <div className='heading'>
                                    <h2 className='text-2xl font-semibold text-[#355B3E]'>
                                        Bem-vindo, em busca do real, cada destino é um novo portal!
                                    </h2>
                                    <h6 className='font-normal text-base text-[#58745E] inline'>
                                        Nossa jornada é onde encontramos equilíbrio.</h6>

                                </div>

                                <div className='actual-form'>
                                    <div className='input-wrap relative h-[37px] mb-8'>
                                        <input type="text"
                                            minLength={4}
                                            className="input-field  w-full h-full border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                                            autoComplete='off'
                                            id='name'
                                            required
                                        />

                                        <label className="absolute left-0 top-1 text-base font-semibold text-[#2F3D4C] cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all" htmlFor="name">E-mail</label>
                                    </div>

                                    <div className='input-wrap relative h-[37px] mb-8'>
                                        <input type="password"
                                            minLength={4}
                                            className="input-field  w-full h-full border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer"
                                            autoComplete='off'
                                            id='pass'
                                            required
                                        />

                                        <label className="absolute left-0 top-1 text-base font-semibold text-[#2F3D4C] cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all" htmlFor="pass">Senha</label>
                                    </div>


                                    <div className="flex justify-center items-center">
                                        <div className="flex space-x-4">
                                            <input type="submit" value="Entrar" className="sign-btn inline-block w-[175px] h-[48px] bg-[#029664] text-white cursor-pointer text-base font-semibold transition-[0.3s] mb-8 rounded-[0.5rem] border-[none] hover:bg-[#8371fd]" />
                                            <input type="submit" value="Criar Conta" className="sign-btn inline-block w-[175px] h-[48px] bg-[#FFFFFF] text-[#029664] cursor-pointer text-base font-semibold transition-[0.3s] mb-8 rounded-[0.5rem] border-[2px] border-[#029664]" />

                                        </div>
                                    </div>


                                </div>

                            </form>
                        </div>

                        <div className="carousel absolute h-full w-[55%] bg-[#F5DBC4] left-[45%] rounded-3xl top-0">

                            <div className='img-wrapper m-[50px] mt-24'>
                                <img src="" className=" image img-1 w-[500px] " alt="" />
                                <h2 className='text-[1.2rem] font-semibold text-[#355B3E] text-center mt-7'>Explore o mundo com coragem e paixão</h2>

                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Login