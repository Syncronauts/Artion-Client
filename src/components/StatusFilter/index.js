import React from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import FilterActions from 'actions/filter.actions';
import FilterWrapper from 'components/FilterWrapper';

const useStyles = makeStyles(() => ({
  body: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '8px',
    backgroundColor: '#142233',
  },
  formControl: {
    width: '100%',
    height: 40,
    boxSizing: 'border-box',
    borderRadius: 10,
    cursor: 'pointer',
    margin: '0 !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    backgroundColor: 'transparent',
    border: '1px solid #213752',
    fontVariant: 'small-caps',
  },
  selected: {
    // backgroundColor: '#1969FF',
    background: 'linear-gradient(187deg, #1969FF, #505DD4)',
    color: '#FFF',
    fontWeight: 800,
    border: 0,
    fontVariant: 'small-caps',
  },
}));

const ExploreStatus = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const {
    statusBuyNow,
    statusHasBids,
    statusHasOffers,
    statusOnAuction,
  } = useSelector(state => state.Filter);

  const handleStatusChange = (field, selected) => {
    dispatch(FilterActions.updateStatusFilter(field, selected));
  };

  return (
    <FilterWrapper title="Status" classes={{ body: classes.body }}>
      <div
        className={cx(
          classes.formControl,
          statusBuyNow ? classes.selected : null
        )}
        onClick={() => handleStatusChange('statusBuyNow', !statusBuyNow)}
      >
        Buy Now
      </div>
      <div
        className={cx(
          classes.formControl,
          statusHasBids ? classes.selected : null
        )}
        onClick={() => handleStatusChange('statusHasBids', !statusHasBids)}
      >
        Has Bids
      </div>
      <div
        className={cx(
          classes.formControl,
          statusHasOffers ? classes.selected : null
        )}
        onClick={() => handleStatusChange('statusHasOffers', !statusHasOffers)}
      >
        Has Offers
      </div>
      <div
        className={cx(
          classes.formControl,
          statusOnAuction ? classes.selected : null
        )}
        onClick={() => handleStatusChange('statusOnAuction', !statusOnAuction)}
      >
        On Auction
      </div>
    </FilterWrapper>
  );
};

export default ExploreStatus;
