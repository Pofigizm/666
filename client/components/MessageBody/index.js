import React from 'react';

import md from '../../../common/md';
import emoji from '../../../common/emoji';

export default ({ text }) => (
  <article className="md"
    dangerouslySetInnerHTML={{ __html: md(emoji(text)) }} />
);

