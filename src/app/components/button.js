import Image from 'next/image';

export default function GlobalButton({buttonValue}) {


    return (        
        <div className='globalButton'>            
            <p> {buttonValue} </p>
        </div>
        )
    }
    