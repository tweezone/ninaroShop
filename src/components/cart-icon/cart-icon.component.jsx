import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';


const CartIcon = ({toggleCartHidden, itemCount})=> (
    
    <div className='cart-icon' >
    <ShoppingIcon className='shopping-icon' onClick = {toggleCartHidden} />
    <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount

});
export default connect(mapStateToProps, mapDispatchToProps) (CartIcon)