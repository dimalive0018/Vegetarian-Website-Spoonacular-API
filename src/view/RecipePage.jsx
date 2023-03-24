import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion"

export const RecipePage = () => {
    const [information, setInformation] = useState({});
    const [type, setType] = useState('info')
    let params = useParams();
    const apiId = async () => {
        const api = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=6177107e0e6c4215bcadc9f1b23c2ccc`).then(({data}) => data);
        try {
            if (typeof api !== 'undefined'){
              return api;
            } else {
              return null;
            };
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        apiId().then((information) => setInformation(information));
    }, [params.id])

  return (
    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        className='flex flex-col m-10 justify-center'
    >
        <div className='flex flex-col justify-center'>
            <h2 className='text-center font-bold text-base md:text-xl xl:text-2xl'>{information.title}</h2>
            <img className='rounded-xl mx-auto h-80 w-80 md:h-[420px] md:w-[600px] xl:h-[600px] xl:w-[780px]' src={information.image} alt=''></img>
        </div>
        <div className='flex flex-row justify-center'>
            <button className='text-center m-5 text-[8px] md:text-[10px] xl:text-xs rounded-xl shadow-nav hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9] h-7 w-14 md:h-10 md:w-16 xl:h-12 xl:w-20 font-extrabold' onClick={() => setType('info')}>About</button>
            <button className='text-center m-5 text-[8px] md:text-[10px] xl:text-xs rounded-xl shadow-nav hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9] h-7 w-14 md:h-10 md:w-16 xl:h-12 xl:w-20 font-extrabold' onClick={() => setType('prep')}>Instructions</button>
            <button className='text-center m-5 text-[8px] md:text-[10px] xl:text-xs rounded-xl shadow-nav hover:shadow-image active:shadow-active bg-[#DD4124] text-white hover:bg-white hover:text-black hover:opacity-60 active:scale-[0.9] h-7 w-14 md:h-10 md:w-16 xl:h-12 xl:w-20 font-extrabold' onClick={() => setType('ingr')}>Ingredients</button>
        </div>
        {type === 'info' && (
            <div>
                <h3 className='m-10 text-justify text-base md:text-xl xl:text-2xl' dangerouslySetInnerHTML={{ __html: information.summary }}></h3>
            </div>
        )}
        {type === 'prep' && (
            <div>
                <h3 className='m-10 text-justify text-base md:text-xl xl:text-2xl' dangerouslySetInnerHTML={{ __html: information.instructions }}></h3>
            </div>
        )}
        {type === 'ingr' && (
            <ul className='list-disc m-10'>
                {information.extendedIngredients.map((info) => (
                    <li className='text-justify text-base md:text-xl xl:text-2xl'>{info.original}</li>
                ))}
            </ul>
        )}
    </motion.div>
  )
}
