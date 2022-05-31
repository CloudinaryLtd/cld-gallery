---
to: src/components/<%= Name %>/<%= Name %>.js
---
import { h } from 'preact';

import "./<%= Name %>.styles.scss";

const <%= Name %> = props => {
  return (
    <div className="<%=h.inflection.transform(name, ['underscore', 'dasherize']) %>">
      <h1>CLD-GALLERY <%= Name %> COMPONENT</h1>
    </div>
  );
};

export default <%= Name %>;


