import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid gap-10 my-16 md:grid-cols-2'>
                {
                   items.map(item => <MenuItem
                    key={item._id} item = {item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;