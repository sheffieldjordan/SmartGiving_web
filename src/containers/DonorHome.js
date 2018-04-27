import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { toggleDrawer, selectRequest } from "../redux/actions";

import CardPage from "../components/CardPage";

import CharityCard from "../components/CharityCard";
import {
  DonorPreButtons,
  DonorActionButtons
} from "../components/CardComponents";
import DrawerFactory from "../components/DrawerFactory";
import { ImageLibrary } from "../components/ImageLibrary";

import "../style/DonorHome.css";

class DonorHome extends Component {
  render() {
    const storeState = this.props.store.getState();
    const selectDonate = request => () => {
      this.props.showRequest(true, request);
    };
    const learnMore = request => () => {
      this.props.history.push({
        pathname: "/gift/" + request.ethGiftAddr,
        state: { request }
      });
    };

    const recipients = storeState.globalData.recipients
    const cards = recipients.map((r, i) => {
      // Assume it is the first gift
      const gift = r.gifts[0]
      return (
        <CharityCard
          key={i}
          title={r.title}
          description={gift.summary}
          image={ImageLibrary(r.image)}
          onImageClick={learnMore(r)}
          preButtons={DonorPreButtons(gift.tags)}
          buttons={DonorActionButtons(learnMore(r), selectDonate(r))}
          postButtons={[]}
        />
      );
    });

    const drawerRequest = () => {
      if (Object.keys(storeState.updateDrawer.selectedRequest).length === 0) {
        return undefined;
      }
      return storeState.selectedRequest;
    };
    const drawer = (
      <DrawerFactory
        store={this.props.store}
        request={drawerRequest()}
        type="donate"
      />
    );

    return <CardPage cards={cards} drawer={drawer} />;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showRequest: (showDrawer, request = {}) => {
      dispatch(selectRequest(request));
      dispatch(toggleDrawer(showDrawer));
    }
  };
};

DonorHome = connect(null, mapDispatchToProps)(DonorHome);

export default withRouter(DonorHome);
