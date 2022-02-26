import React, { useState } from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  wrapper: {
    marginTop: '-1px !important',
    marginRight: '-1px !important',
    boxShadow: 'none',
    borderRadius: '0 !important',
    border: '1px solid #213752',
    overflow: 'hidden',
    backgroundColor: '#142233',
  },
  header: {
    height: 64,
    minHeight: '64px !important',
    backgroundColor: '#142233',
    boxShadow: 'none',
    padding: '0 24px',
  },
  heading: {
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
    // color: '#3D3D3D',
    color: '#fff',
  },
  arrowIcon: {
    color: '#fff',
    opacity: '0.6',
  },
  body: {
    padding: '32px 24px',
    // borderTop: '1px solid #213752',
    boxSizing: 'border-box',
    // backgroundColor: '#D9E1EE1A',
    borderTop: '1px solid #11111188',
    backgroundColor: '#1a2a3a',
  },
  statusSvgDiv: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const FilterWrapper = ({ title, classes: classnames, children }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionCollapse = (_, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <div className={cx(classes.root, classnames.root)}>
      <Accordion
        className={classes.wrapper}
        expanded={expanded}
        onChange={handleAccordionCollapse}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.arrowIcon} />}
          className={classes.header}
        >
          <div className={classes.statusSvgDiv}>
            <span className={classes.heading}>{title}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className={cx(classes.body, classnames.body)}>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterWrapper;
