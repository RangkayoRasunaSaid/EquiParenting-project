// Loading.js
import loadingImage from '../src/assets/loading.webp';

const Loading = () => (
  <div className="loading">
    <img className='rounded-full size-24' src={loadingImage} alt="Loading..." />
  </div>
);

export default Loading;
