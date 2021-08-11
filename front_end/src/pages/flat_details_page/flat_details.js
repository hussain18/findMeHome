import './style.css'
import FlatMap from '../../components/google_map'
import ImageSlider from '../../components/imageSlider'


// Image Slider components

// These imgs are only for testing purposes
const hallImg = require('../../assets/test_img/house_hall.jpg').default
const bedroomImg = require('../../assets/test_img/house_bedroom.jpg').default
const bathroomImg = require('../../assets/test_img/house_bathroom.jpg').default
const kitchenImg = require('../../assets/test_img/house_kitchen.jpg').default
const balconyImg = require('../../assets/test_img/house_balcony.jpg').default
const balcony1Img = require('../../assets/test_img/house_balcony_1.jpg').default



const FlatDetails = props => {

    const images = _getImageData()

    return <div className = 'container'>
        <ImageSlider images = {images} />
        <hr/>
        <FlatMap/>
    </div>
}

export default FlatDetails


// Helpers
const _getImageData = () => {
    // Here we get image data from server 
    // ....

    // Categorizing the images
    const images = [
        {
            label: 'hall', 
            images: [hallImg]
        }, {
            label: 'bedroom', 
            images: [bedroomImg]
        }, {
            label: 'bathroom', 
            images: [bathroomImg]
        }, {
            label: 'kitchen', 
            images: [kitchenImg]
        }, {
            label: 'balcony', 
            images: [balconyImg, balcony1Img]
        },
    ]

    return (images)
}