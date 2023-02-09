import {
  React,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

function HomePageContents(props) {
  const { setInAppPageTitle } = props;
  useEffect(() => {
    setInAppPageTitle('Home');
    document.title = 'Music Social | Home';
  }, []);
  return (
    <div>Home Page content</div>
  );
}

HomePageContents.propTypes = {
  setInAppPageTitle: PropTypes.func,
};

HomePageContents.defaultProps = {
  setInAppPageTitle: () => {},
};

export default HomePageContents;
