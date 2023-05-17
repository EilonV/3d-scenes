import Spline from "@splinetool/react-spline"
import { Loader } from "../components/loader"

export const Rocket = () => {
    return <section className="rocket-wrapper">
        <Loader />
        <Spline scene="https://prod.spline.design/Si-4Wv2VwS00YGrt/scene.splinecode" />
    </section>
}