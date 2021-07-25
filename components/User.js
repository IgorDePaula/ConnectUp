export default function User({main}){
    return <div className={`w-full h-16 ${main ?'shadow':''} flex  `}>
        <div className={'w-1/6 h-16 flex items-center justify-center'}>
            <img src="https://source.unsplash.com/random" alt="" className={'w-10 h-10 rounded-full'}/>
        </div>
        <div className={'w-5/6  flex flex-col justify-center '}>
            <p className={'font-bold'}>user</p>
            <p className={'truncate'}>las message kabnsdkajdaklsdb kahbsdk adj asdja oidsoaisd oasid oasd ahdkjahlskdjhalksdhaskdh akhdkasda  </p>
        </div>
    </div>
}
