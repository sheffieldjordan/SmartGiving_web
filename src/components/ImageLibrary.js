import ImageColombian from '../images/test_colombian.jpg'
import ImageFrog from '../images/test_frog.jpg'
import ImageMexico from '../images/test_mexico.jpg'
import ImageTulip from '../images/test_tulip.jpg'
import ImageMorgan from '../images/Morgan.png'

import Loading from '../images/loading.png'

export const ImageLibrary = (key) => {
	if (key === undefined || key.length === 0) return Loading
	const imageLookUp = {
		test_colombian: ImageColombian,
		test_frog: ImageFrog,
		test_tulip: ImageTulip,
		test_mexico: ImageMexico,
		morgan: ImageMorgan,
	}
	return imageLookUp[key]
}
