import { VtmnPrice, VtmnRating, VtmnButton } from '@vtmn/react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';

const ProductInfo = () => {
    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']
    const [selectedSize, setSelectedSize] = useState(null)
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const selectSize = (size) => {
        setSelectedSize(size)
        setIsDropdownVisible(false)
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="text-left px-5 pt-8 pb-8 flex flex-col h-[120vh]">
            <h2 className="text-[#001018] text-[1.6rem] leading-[1.23] font-bold">T-shirt Fitness Femme - 500 <br></br>Essentials noir</h2>
            <div className="flex pt-2">
                <VtmnPrice
                    style={{
                        fontFamily: 'Roboto Condensed',
                        fontWeight: '700',
                        fontSize: '1.5rem',
                        lineHeight: '2rem',
                        borderRadius: "0"
                    }}
                    size="large"
                    variant="accent">
                    9€
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
                <label
                    tabIndex={0}
                    className="justify-between m-0 p-2 pl-2 btn w-full rounded-none font-condensed font-thin border-lightgrey hover:border-lightgrey bg-[white] hover:bg-[white]"
                    onClick={toggleDropdown}
                >
                    {selectedSize ? selectedSize : "SÉLECTIONNEZ UNE TAILLE"}
                    {isDropdownVisible ? (
                        <IoIosArrowUp className="text-[1.2rem]" />
                        ) : (
                        <IoIosArrowDown className="text-[1.2rem]" />
                    )}
                </label>
                {isDropdownVisible && (
                    <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] rounded-none menu shadow bg-base-100 w-full p-0"
                    >
                    {sizeOptions.map((size, index) => (
                        <li key={index}>
                        <p
                            className='hover:bg-[#f0f1f3] hover:rounded-none hover:cursor-pointer'
                            onClick={() => selectSize(size)}
                        >
                            <p>{size}</p>
                            <p className='text-right text-[#05be8b]'>En stock</p>
                        </p>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: 400,
                    paddingTop: '2rem',
                }}
                >
                <VtmnButton
                    style={{
                        fontFamily: 'Roboto Condensed',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        lineHeight: '1.5rem',
                        borderRadius: "0.15rem"
                    }}
                    iconAlone=""
                    iconLeft={null}
                    iconRight={null}
                    size="stretched"
                    variant="conversion"
                >
                    AJOUTER AU PANIER
                </VtmnButton>
            </div>
        </div>
    );
}

export default ProductInfo;