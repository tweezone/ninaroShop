import React from  'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items})=>(
    <div className="collection-preview">
    <h2 className='title'>{title.toUpperCase()}</h2>
    <div className="preview">
    {
    items.filter((item, index) =>(index < 4))
    .map((item) => (
        <CollectionItem  key={item.id} item={item}></CollectionItem>)
    )
    }
    </div>
    </div>
);
export default CollectionPreview;