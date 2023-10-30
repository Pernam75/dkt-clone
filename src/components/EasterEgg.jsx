import { BsLinkedin } from 'react-icons/bs';
import { VtmnTooltip } from '@vtmn/react';

export const EasterEgg = () => {
    return (
        <div className='flex flex-row items-center pt-4'>
            <a href="https://www.linkedin.com/in/jules-rubin//" target="_blank" rel="noreferrer">
                <BsLinkedin size={24} className='text-[#001018] ml-1' color='#007dbc'/>
            </a>
            <VtmnTooltip
                position='top'
                tooltip='Made with love by Jules Rubin'
            >
                <p className="text-[#001018] ml-7 font-condensed text-[0.9rem]">A la recherche d'un <strong>stagiaire</strong> ?</p>
            </VtmnTooltip>
        </div>
    );
}