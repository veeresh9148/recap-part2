import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakesAction";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item -{props.item}</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams

  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction
  }
}

export default connect(null, mapDispatchToProps)(ItemContainer);
