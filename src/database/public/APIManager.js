import axios from "axios";

export const GetAllOpenGifts = (
  completion,
  ethereumAddress = "0X038HEF23A54B9B83"
) => {
  /* TODO @Selenne
      - Make this return all recipients, not gifts from a specific address
     TODO @Gabe
      - Filter out this data by which gifts are really open (no ETH address)
     TODO @Gabe and @Selenne
      - Sync up on what the database should look like
   */

  if (completion === undefined) {
    console.warn("Completion block for GetAllOpenGifts is undefined :(");
  }

  axios
    .get(`/api/${ethereumAddress}/activeDonorGiftsList`)
    .then(res => {
      completion(res.data, undefined);
    })
    .catch(err => {
      completion(undefined, err);
    });
};
