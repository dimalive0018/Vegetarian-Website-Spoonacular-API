import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"
import { SeoHelmet } from '../comp/SeoHelmet'
import { Spinner } from '../comp/Spinner'
import { ResultsNotFound } from '../comp/ResultsNotFound'
import { ButtonRecipe } from '../comp/ButtonRecipe'
import { base } from '../service/AxiosClient'

export const RecipePage = () => {
    const [information, setInformation] = useState({});
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState('info')
    let params = useParams();
    const apiId = async () => {
        const api = await base.get(`${params.id}/information?apiKey=${process.env.API_KEY}`).then(({data}) => data);
        try {
            if (typeof api !== 'undefined'){
                return api;
            } else {
                setLoading('');
                return null;
            };
        } catch (e) {
            console.error(e);
        }
    }

    const handleLoader = (t) => {
        setTimeout(() => {
          setLoading(false);
          setInformation(t);
        }, 2500);
    };

    useEffect(() => {
        setLoading(true);
        apiId().then((information) => handleLoader(information));
    }, [params.id])

  return (
    <>
    <SeoHelmet title={information.title} image={information.image} />
    {loading === '' && (
        <AnimatePresence mode='wait'>
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
          <ResultsNotFound />
        </motion.div>
        </AnimatePresence>
    )}
    {loading === true && (
        <AnimatePresence mode='wait'>
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
            <Spinner />
        </motion.div>
        </AnimatePresence>
    )}
    {loading === false && (
        <AnimatePresence mode='wait'>
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        className='flex flex-col m-10 justify-center'
        >
        <div className='flex flex-col justify-center'>
            <h2 className='text-center font-bold text-3xl md:text-4xl xl:text-5xl mb-10'>{information.title}</h2>
            <img className='rounded-xl mx-auto h-36 w-52 md:h-[350px] md:w-[600px] xl:h-[400px] xl:w-[600px]' src={information.image} alt=''></img>
        </div>
        <div className='flex flex-row justify-center border-b-2 border-[#608E43]'>
            <ButtonRecipe onClick={() => setType('info')} title={'Description'} />
            <ButtonRecipe onClick={() => setType('prep')} title={'Instructions'} />
            <ButtonRecipe onClick={() => setType('ingr')} title={'Ingredients'} />
        </div>
        {type === 'info' && (
            <div>
                <h3 className='m-1 text-justify text-lg md:text-xl xl:text-2xl' dangerouslySetInnerHTML={{ __html: information.summary }}></h3>
            </div>
        )}
        {type === 'prep' && (
            <div>
                <h3 className='m-1 text-justify text-lg md:text-xl xl:text-2xl' dangerouslySetInnerHTML={{ __html: information.instructions }}></h3>
            </div>
        )}
        {type === 'ingr' && (
            <ul className='list-disc my-1 mx-5'>
                {information.extendedIngredients.map((info) => (
                    <li className='text-justify text-lg md:text-xl xl:text-2xl'>{info.original}</li>
                ))}
            </ul>
        )}
        </motion.div>
        </AnimatePresence>
    )}
    </>
  )
}
