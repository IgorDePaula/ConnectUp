import Image from 'next/image'
export default function Message({me}){
    return me ? <div className={'w-full flex flex-row'}>
        <div className={'w-1/12'}></div>
        <div className={'w-11/12  flex flex-col items-stretch'}>
            <p className={''}>Donec sollicitudin vulputate aliquet. Nulla quis tempor odio. Ut nec
                sapien elit. Sed sed lorem interdum, scelerisque odio a, molestie sapien. Mauris eget
                euismod erat. Donec nisl odio, posuere eget neque in, aliquam dapibus tellus. Sed
                fringilla massa ante, vel lacinia leo posuere finibus. Donec porta vestibulum rutrum.
                Morbi nec leo a nisi ornare efficitur quis nec ex. Fusce eget nisl quis metus fringilla
                facilisis. Morbi accumsan imperdiet turpis, eget dapibus lorem sagittis vel. Integer
                tincidunt ultricies ante eu faucibus. Nulla facilisi. Duis lectus lorem, scelerisque
                eget eros quis, finibus hendrerit arcu. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Sed sed mi augue. </p>
            <p className={'text-xs text-gray-500 align-top font-bold w-full flex justify-end'}>14:08</p>
        </div>
        <div className={'w-1/12 flex justify-center'}>
            <Image src="https://source.unsplash.com/random" alt="" className={'w-10 h-10 rounded-full'}/>
        </div>
    </div> :
        <div className={'w-full flex flex-row'}>
            <div className={'w-1/12 flex justify-center'}>
                <Image src="https://source.unsplash.com/random" alt="" className={'w-10 h-10 rounded-full'}/>
            </div>
            <div className={'w-11/12  flex flex-col items-stretch'}>
                <p className={''}>Donec sollicitudin vulputate aliquet. Nulla quis tempor odio. Ut nec
                    sapien elit. Sed sed lorem interdum, scelerisque odio a, molestie sapien. Mauris eget
                    euismod erat. Donec nisl odio, posuere eget neque in, aliquam dapibus tellus. Sed
                    fringilla massa ante, vel lacinia leo posuere finibus. Donec porta vestibulum rutrum.
                    Morbi nec leo a nisi ornare efficitur quis nec ex. Fusce eget nisl quis metus fringilla
                    facilisis. Morbi accumsan imperdiet turpis, eget dapibus lorem sagittis vel. Integer
                    tincidunt ultricies ante eu faucibus. Nulla facilisi. Duis lectus lorem, scelerisque
                    eget eros quis, finibus hendrerit arcu. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas. Sed sed mi augue. </p>
                <p className={'text-xs text-gray-500 align-top font-bold w-full flex justify-end'}>14:08</p>
            </div>
        </div>
}
