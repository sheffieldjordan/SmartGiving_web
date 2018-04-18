import ImageColombian from '../images/test_colombian.jpg'
import ImageFrog from '../images/test_frog.jpg'
import ImageMexico from '../images/test_mexico.jpg'
import ImageTulip from '../images/test_tulip.jpg'

export const ImageLibrary = (key) => {
	const imageLookUp = {
		test_colombian: ImageColombian,
		test_frog: ImageFrog,
		test_tulip: ImageTulip,
		test_mexico: ImageMexico
	}
	return imageLookUp[key]
}
