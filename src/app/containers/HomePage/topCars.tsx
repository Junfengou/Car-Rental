import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import tw from "twin.macro"
import { ICar } from '../../../typings/car';
import Car from "../../components/car";
import { useMediaQuery } from "react-responsive"
import { SCREENS } from '../../components/responsive';
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css";
import carService from '../../services/carService';


const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  const cars = [
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
  ]


function TopCars() {
    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    const fetchTopCars = async () => {
        const cars = await carService.getCars().catch(err => console.error(err)
        )

        console.log("cars: ", cars);
    }

    useEffect(() => {
        fetchTopCars();
    }, [])

    return (
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            <CarsContainer>
                <Carousel value={current} 
                onChange={setCurrent} 
                slides={cars} 
                plugins={[
                    "clickToChange",
                    {
                        resolve: slidesToShowPlugin,
                        options: { numberOfSlides: 3 }
                    }
                ]}
                breakpoints={{
                    // Mobile width 640 or less...else fall back to default above
                    640: {
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {numberOfSlides: 1 }
                            }
                        ]
                    },
                    900: {
                        plugins: [
                            {
                                resolve: slidesToShowPlugin,
                                options: {numberOfSlides: 2 }
                            }
                        ]
                    },

                }}
                />
                <Dots value={current} onChange={setCurrent} number={numberOfDots} />
            </CarsContainer>
        </TopCarsContainer>
    )
}

export default TopCars


const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        gap-5
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `}
`
const Title = styled.h2`
    ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `}
`


const CarsContainer = styled.div`
    /* border: solid red; */
    ${tw`
        w-full
        flex
        flex-wrap
        gap-5
        justify-center
        mt-7
        md:mt-10
    `}
`

const EmptyCars = styled.div`
    ${tw`
        w-full
        flex
        justify-center
        items-center
        text-sm
        text-gray-500
    `}
`

const LoadingContainer = styled.div`
    ${tw`
        w-full
        mt-9
        flex
        justify-center
        items-center
        text-base
        text-black
    `}
`