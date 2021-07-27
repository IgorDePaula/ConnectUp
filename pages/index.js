import User from "../components/User";
import Message from "../components/Message";
import Image from 'next/image'
export default function Home() {
    return <div>
        <div className={'w-full h-64 bg-green-500 shadow'}></div>
        <div className={'container'}>
            <div
                className={'h-screen border border-gray-500 rounded bg-gray-200 -mt-48 grid grid-rows-9 grid-cols-4 grid-flow-col'}>
                <div className={'row-span-9 divide-y divide-gray-500'}>
                    <User main/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                </div>
                <div className={'col-span-3 border-l border-gray-500'}>
                    <div className={`w-full h-full flex shadow `}>
                        <div className={'w-1/12  flex items-center justify-center'}>
                            <Image src="https://source.unsplash.com/random" alt="" className={'w-16 h-16 rounded-full'}/>
                        </div>
                        <div className={'w-11/12  flex flex-col justify-center '}>
                            <p className={'font-bold'}>user</p>
                            <p className={'truncate'}>las message kabnsdkajdaklsdb kahbsdk adj asdja oidsoaisd oasid oasd ahdkjahlskdjhalksdhaskdh akhdkasda  </p>
                        </div>
                    </div>
                </div>
                <div className={'col-span-3 row-span-7 border-l border-gray-500 p-2 divide-y-8 flex overflow-y-scroll flex-col divide-transparent'}>
                    <Message />
                    <Message me />
                    <Message me />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />

                </div>
                <div className={'col-span-3 border-l border-gray-500 flex flex-row border-t'}>
                    <div className={'w-10/12 flex items-center justify-center p-2'}><input className={'w-full h-10'}
                                                                                           type="text"/></div>
                    <div className={'w-2/12 flex items-center justify-center p-2'}>
                        <button className={'w-full bg-green-500 h-10'}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
