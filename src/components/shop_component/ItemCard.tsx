import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/Home.module.css';

const ItemCard = ({ name, image, size, path }: { name: string, image: string, size: string[], path: string }) => {
    return (
        <div>
            <div className="card">
                <div className="imgBx">
                    <Image src={image} width={270} height={270} alt={`${name}`} />
                </div>
                <div className="contentBx">
                    <h2>{name}</h2>
                    <div className="size m-7">
                        <h3>Size :</h3>
                        {size.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                    <Link href={'/product'}>
                        <div className="m-7">Buy Now</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
