import React from 'react'
import Title from '../layouts/Title'
import { featuresData } from '../../assets/data/data'
import Card from './Card'

const Features = () => {
  return (
    <section id='features' className='w-full py-20 dark:bg-black bg-[#0A0F1F] border-b-0'>
      <div className='w-full max-w-screen-xl mx-auto'> 
      <Title title={"My Skills"} des={"My Expertise"}/>
        <div className='w-full max-w-screen-xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
        </div></div>
      
       
    </section>
  )
}

export default Features