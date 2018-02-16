import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import className from 'classnames/bind';

const cx = className.bind(require('./Home.css'));

@injectIntl
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="columns">
          <section className="column">
            <section>
              <h1 className={cx('title', 'title-color')}>
                <FormattedMessage
                  id="TITLE"
                  defaultMessage={'Hai Loves React!'}
                />
              </h1>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
