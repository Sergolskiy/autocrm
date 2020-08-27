import React, {Component} from 'react'
import OutsideAlerter from "../OutsideCliker/OutsideCliker";
// import OutsideAlerter from "../../components/ModalPopups/AddProductPopup/AddProductPopup";


class PopupWrapper extends Component {

  state = {
    isOpen: false,
  }

  componentDidMount() {
    let that = this;
    setTimeout(function () {
      that.setState({
        isOpen: true,
      })
    }, 1);
  }

  handleClose = () => {
    this.setState({
      isOpen: false,
    })

    let that = this;
    setTimeout(function () {
      that.props.closePopup();
    }, 300);

  }


  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        handleClose: this.handleClose
      });
    });

    return (
      <div className={"modal-popup " + (this.props.classPopup) + (this.state.isOpen ? ' open' : '')}>
        <div className="modal-popup__overlay">
          <OutsideAlerter onClick={this.handleClose}>
            {children[0]}
          </OutsideAlerter>
        </div>
      </div>
    )
  }
}

export default PopupWrapper
