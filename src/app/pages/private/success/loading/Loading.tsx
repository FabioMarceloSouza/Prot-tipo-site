import script from './script.json';
import Lottie from 'react-lottie-player';

export const Loading = () => {
    return <Lottie 
    loop
    animationData={script}
    play
    style={{ width: 400, height: 400 }}
    />
}