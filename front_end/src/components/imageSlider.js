import { useState } from "react"


const Slider = props => {

    const height = props.height || '600px'
    const slideImages = props.images
    const length = slideImages.length

    // State variables
    const [current, setCurrent] = useState(0)
    let label = null

    const nextSlide = () => {
        setCurrent(current === length-1? 0: current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0? length-1 : current-1)
    }
    
    return <>
        <p className = 'fs-3 text-center fw-bold'>{label}</p>
        <div className = "row justify-content-between align-items-stretch border border-warning">
            <span onClick={prevSlide} className = 'col-sm-1 order-sm-first border border-danger' >Prev</span>
            <span onClick={nextSlide} className = 'col-sm-1 order-sm-last border border-danger' >next</span>
            {slideImages && slideImages.map((slides, index) => {
                return index === current && <img style = {imgStyle} src={slides.images[0]} 
                    className = 'col-sm-10 align-self-center'/>
            })}
        </div>
    </>

}

export default Slider

// styles
const imgStyle = {
    maxWidth: '800px',
    maxHeight: '500px'
}