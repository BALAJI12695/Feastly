import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'

const Work = () => {

    const workInfoData = [
        {
        image:PickMeals,
        title:'Pick Meals',
        text:'Choose from a variety of delicious and nutritious meals tailored to your taste and diet.'
    },
        {
        image:ChooseMeals,
        title:'Choose How Often',
        text:'Customize your meal plan by choosing how often you want your meals delivered."'
    },
        {
        image:DeliveryMeals,
        title:'Fast Deliveries',
        text:'Enjoy quick and reliable meal deliveries, ensuring fresh and tasty food at your doorstep.'
    },
     
]

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top' >
            <p className='primary-subheading' >Work</p>
            <h1 className='primary-heading' >How it Works</h1>
            <p className='primary-text'>
                Enjoy fresh, delicious meals Effortless, convenient, and designed to fit your lifestyle!
            </p>
        </div>
        <div className='work-section-bottom' >
            {
                workInfoData.map((data)=>(
                    <div className='work-section-info' >
                        <div className='info-boxes-img-conainer' >
                            <img src={data.image} alt="" />
                        </div>
                        <h2 >{data.title}</h2>
                        <p>{data.text}</p>

                    </div>
                ) )
            }
        </div>
    </div>
  )
}

export default Work