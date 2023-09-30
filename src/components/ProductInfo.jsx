import { VtmnPrice, VtmnRating } from '@vtmn/react';
const ProductInfo = () => {
    return (
        <div className="text-left px-5 pt-8 pb-8 flex flex-col">
            <h2 className="text-[#001018] text-[1.6rem] leading-[1.23] font-bold">T-shirt Fitness Femme - 500 <br></br>Essentials noir</h2>
            <div className="flex pt-2">
                <VtmnPrice
                    size="large"
                    variant="accent">
                    9 €
                </VtmnPrice>
            </div>
            <div className="flex pt-2 flex-row space-x-3">
                <VtmnRating
                    className=""
                    comments=""
                    name="rating"
                    onChange={function noRefCheck(){}}
                    readonly
                    showValue
                    size="small"
                    value={4.5}
                />
                <a className="text-[0.875rem] text-link visited:text-link underline font-bold" href="/">Voir les 100 avis</a>
            </div>
            {/* font is roboto condensed */}
            <p className="font-condensed text-[#001018] text-[0.875rem] leading-[1.43] pt-2">
                Éco-conçu avec 30% de coton recyclé ce tee-shirt, 190g/m², de fitness femme à manches courtes, se porte à la salle de sport, comme en ville !
                <br></br>
                <br></br>
                Pièce maitresse de notre collection ESSENTIEL, ce tee-shirt femme intemporel est conçu pour le sport comme pour la vie quotidienne. Notre choix de matière contribue à la durabilité du produit.
            </p>
            <h2 className='font-condensed italic text-[#001018] text-[0.9rem] leading-[1.23] font-bold pt-8'>TAILLE :</h2>
            <div className="dropdown pt-2">
                <label tabIndex={0} className="justify-start m-0 p-0 pl-2 btn w-full rounded-none font-condensed font-thin border-lightgrey hover:border-lightgrey bg-[white] hover:bg-[white]">SÉLECTIONNEZ UNE TAILLE</label>
                <ul tabIndex={0} className="dropdown-content z-[1] rounded-none  menu shadow bg-base-100 w-full p-0">
                    <li><a className='hover:bg-[#f0f1f3] hover:rounded-none'><p>XS</p><p className='text-right text-[#05be8b]'>En stock</p></a></li>
                    <li><a className='hover:bg-[#f0f1f3] hover:rounded-none'><p>S</p><p className='text-right text-[#05be8b]'>En stock</p></a></li>
                    <li><a className='hover:bg-[#f0f1f3] hover:rounded-none'><p>M</p><p className='text-right text-[#05be8b]'>En stock</p></a></li>
                    <li><a className='hover:bg-[#f0f1f3] hover:rounded-none'><p>L</p><p className='text-right text-[#05be8b]'>En stock</p></a></li>
                    <li><a className='hover:bg-[#f0f1f3] hover:rounded-none'><p>XL</p><p className='text-right text-[#05be8b]'>En stock</p></a></li>
                    <li><a className='hover:bg-[#f0f1f3] hover:rounded-none'><p>2XL</p><p className='text-right text-[#05be8b]'>En stock</p></a></li>
                    <li><a className='hover:bg-[#f0f1f3] hover:rounded-none'><p>3XL</p><p className='text-right text-[#05be8b]'>En stock</p></a></li>
                </ul>
            </div>
        </div>
    );
}

export default ProductInfo;