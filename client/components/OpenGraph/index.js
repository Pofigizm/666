import './index.scss';

import generic from './Generic';
import twitter from './Twitter';
import youtube from './Youtube';

const plugins = [
  youtube,
  twitter,
  generic,
];

export default ({ meta }) => plugins.reduce(
  (result, plugin) => result || plugin(meta), null
);
