import Spline from '@splinetool/react-spline';
import { Loader } from '../components/loader';

export const Home = () => {
    
    return (
        <section className='canvas-wrapper'>
            <Loader/>
            <Spline scene="https://prod.spline.design/LJZ1gNK-OfLHoCpa/scene.splinecode" />
        </section>
    );
}
