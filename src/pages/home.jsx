import Spline from '@splinetool/react-spline';

export const Home = () => {
    
    return (
        <section className='canvas-wrapper'>
            <Spline scene="https://prod.spline.design/LJZ1gNK-OfLHoCpa/scene.splinecode" />
            <div className="scene">
                <div className="cube">
                    <div className="cube__face cube__face--front"></div>
                    <div className="cube__face cube__face--back"></div>
                    <div className="cube__face cube__face--right"></div>
                    <div className="cube__face cube__face--left"></div>
                    <div className="cube__face cube__face--top"></div>
                    <div className="cube__face cube__face--bottom"></div>
                </div>
            </div>

        </section>
    );
}
