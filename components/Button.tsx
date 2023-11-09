import Image from 'next/image';
import React from 'react'
type TButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?:boolean;
}

const Button = ({type, title, icon, variant, full}: TButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-2 rounded-full border ${variant} ${full && 'w-full'}`}>
        {icon && <Image src={icon} width={24} height={24} alt={title} />}
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button