import axios from "axios";
import requests from '../data/requests'

export const FakeData = false;

export const GetAllOpenGifts = completion => {
  /* TODO @Selenne
      - Make sure this returns *all* gifts, not just ones by a specific donor
     TODO @Gabe
      - Filter out this data by which gifts are really open (no ETH address)
     TODO @Gabe and @Selenne
      - Sync up on what the database should look like
   */

  if (completion === undefined) {
    console.warn("Completion block for GetAllOpenGifts is undefined :(");
  }

  if (FakeData) {
    completion(requests.recipients, undefined)
    return
  }

  axios
    .get(`/api/activeRecipientsList`)
    .then(res => {
      completion(res.data, undefined);
    })
    .catch(err => {
      completion(undefined, err);
    });
};

export const CreateNewGift = (gift, completion) => {
  axios
    .put(`/api/addGift`, gift)
    .then(res => {
      completion()
    })
    .catch(err => {
      completion(err)
    });
}

