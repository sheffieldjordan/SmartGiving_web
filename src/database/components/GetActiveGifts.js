import React, { Component } from "react";
import axios from "axios";
import style from "./style";

class GetActiveGifts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      ethereumAddress: ""
    };
    this.handleEthereumAddressChange = this.handleEthereumAddressChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleSubmit(e) {
    e.preventDefault();
    let ethereumAddress = this.state.ethereumAddress.trim();
    // console.log(ethereumAddress);

    axios
      .get(`/api/${ethereumAddress}/activeGiftsList`)
      .then(res => {
        console.log("inside GetActiveGifts", res.data);
        this.setState({
          listToShow: "gifts",
          data: res.data
          // recipient_id: id
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleEthereumAddressChange(e) {
    this.setState({ ethereumAddress: e.target.value });
  }

  render() {
    return (
      <div>
        <form style={style.recipientForm} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter the Ethereum address"
            style={style.recipientFormDescription}
            value={this.state.ethereumAddress}
            onChange={this.handleEthereumAddressChange}
          />
          <button>Get ActiveGifts</button>
        </form>
        <div>{JSON.stringify(this.state.data)}</div>
      </div>
    );
  }
}

export default GetActiveGifts;
