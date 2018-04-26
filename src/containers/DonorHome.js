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
import { GetAllOpenGifts } from "../database/public/APIManager";

import "../style/DonorHome.css";

class DonorHome extends Component {
  render() {
    const storeState = this.props.store.getState();
    const selectDonate = request => () => {
      this.props.showRequest(true, request);
    };
    const learnMore = request => () => {
      this.props.history.push({
        pathname: "/gift/" + request.id,
        state: { request }
      });
    };

    const dbCompletion = (data, err) => {
      if (err) {
        alert(err);
      } else {
        console.log(`We got that phat data!`);
        data.map((d, i) => {
          console.log(d);
          return d;
        });
      }
    };

    GetAllOpenGifts(dbCompletion);

    const requests = storeState.globalData.requests;
    const cards = requests.map((r, i) => {
      return (
        <CharityCard
          key={i}
          title={r.charity.title}
          description={r.summary}
          image={ImageLibrary(r.charity.image)}
          onImageClick={learnMore(r)}
          preButtons={DonorPreButtons(r.tags)}
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
