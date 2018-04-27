import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { toggleDrawer, selectCharity } from "../redux/actions";

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
    const selectDonate = charity => () => {
      this.props.showCharity(true, charity);
    };
    const learnMore = charity => () => {
      this.props.history.push({
        pathname: "/charity/" + charity.ethRecipientAddr,
        state: { charity }
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

    const drawerCharity = () => {
      if (Object.keys(storeState.updateDrawer.selectedCharity).length === 0) {
        return undefined;
      }
      return storeState.updateDrawer.selectedCharity;
    };
    const drawer = (
      <DrawerFactory
        store={this.props.store}
        charity={drawerCharity()}
        type="donate"
      />
    );

    return <CardPage cards={cards} drawer={drawer} />;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showCharity: (showDrawer, charity = {}) => {
      dispatch(selectCharity(charity));
      dispatch(toggleDrawer(showDrawer));
    }
  };
};

DonorHome = connect(null, mapDispatchToProps)(DonorHome);

export default withRouter(DonorHome);
