import React from 'react';
import { connect } from 'react-redux';
import styles from './crowdSaleContainer.scss';
import Icon from '../../../icons';
import { updateCountdown } from './actions';

function mapStateToProps(appState) {
  return {
    aboutCrowdSale: appState.aboutCrowdSale,
  };
}

class CrowdSaleContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { aboutCrowdSale } = this.props;
    return (
      <div className={styles.crowdSaleContainer}>
        <div className={styles.ticketContainer}>
          <Icon icon="CROWDSALE_TICKET" />
          <div className={styles.ticketTitle}>
            <strong>CROWDSALE</strong> Starts on <strong>August 15th</strong>, 2017
          </div>
          <div className={styles.timeCounter}>
            <div className={styles.counterCell}>
              <div className={styles.counterNumber}>
                {aboutCrowdSale.get('days')}
              </div>
              <div className={styles.counterTag}>Days</div>
            </div>
            <div className={styles.timeColon}>:</div>
            <div className={styles.counterCell}>
              <div className={styles.counterNumber}>
                {aboutCrowdSale.get('hours')}
              </div>
              <div className={styles.counterTag}>Hours</div>
            </div>
            <div className={styles.timeColon}>:</div>
            <div className={styles.counterCell}>
              <div className={styles.counterNumber}>
                {aboutCrowdSale.get('minutes')}
              </div>
              <div className={styles.counterTag}>Minutes</div>
            </div>
            <div className={styles.timeColon}>:</div>
            <div className={styles.counterCell}>
              <div className={styles.counterNumber}>
                {aboutCrowdSale.get('seconds')}
              </div>
              <div className={styles.counterTag}>Seconds</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  updateTimer() {
    const { dispatch } = this.props;
    dispatch(updateCountdown());
  }
}
export default connect(mapStateToProps)(CrowdSaleContainer);