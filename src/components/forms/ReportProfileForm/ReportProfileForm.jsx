import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import './ReportProfileForm.css';

import PercentGauge from '../../basic/PercentGauge/PercentGauge';

// onSubmit params:
//  reportingUsername,
//  reportUsername,
//  reportType,
//  reportDescription,
function ReportProfileForm(props) {
  const {
    reportingUsername,
    reportedUsername,
    onSubmit,
  } = props;
  const [hasFocused, setHasFocused] = useState(false);

  useEffect(() => {
    if (!hasFocused) {
      const radioEl = document.querySelector('.report-profile-form input');
      radioEl.focus();
      setHasFocused(true);
    }
  }, []);

  const [showDescription, setShowDescription] = useState(false);
  const [descriptionCharCount, setDescriptionCharCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const maxDescriptionLength = 150;
  const wordCountClass = descriptionCharCount > 135 ? ' red' : '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.target);
    onSubmit(
      reportingUsername,
      reportedUsername,
      data.get('report-type'),
      data.get('report-description'),
    )
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <form
      className="report-profile-form flex-column"
      onSubmit={handleSubmit}
    >
      <fieldset
        className="flex-column"
        name="report-type"
      >
        <legend>
          Report
          <span>
            {reportedUsername}
          </span>
          for
        </legend>
        <label>
          <input
            type="radio"
            name="report-type"
            value="spam"
            onClick={() => setShowDescription(false)}
            required
          />
          Spam
        </label>
        <label>
          <input
            type="radio"
            name="report-type"
            value="harassment"
            onClick={() => setShowDescription(false)}
            required
          />
          Harassment
        </label>
        <label>
          <input
            type="radio"
            name="report-type"
            value="other"
            onClick={() => setShowDescription(true)}
            required
          />
          Other
        </label>
        {showDescription && (
          <label>
            <textarea
              type="text"
              name="report-description"
              rows="3"
              placeholder="Reason for report"
              maxLength={maxDescriptionLength}
              required={showDescription}
              onChange={(e) => {
                setDescriptionCharCount(e.target.value.length);
              }}
            />
            <div className="word-counter">
              <span className={`word-count${wordCountClass}`}>
                {descriptionCharCount}
              </span>
              /
              {maxDescriptionLength}
            </div>
          </label>
        )}
      </fieldset>
      {!isLoading && (
        <input
          type="submit"
          value="Submit"
        />
      )}
      {isLoading && (
        <PercentGauge
          percentFilled={10}
          size="1rem"
        />
      )}
      {error && (
        <span className="error-message center-text">
          {error.message}
        </span>
      )}
    </form>
  );
}

ReportProfileForm.propTypes = {
  reportingUsername: PropTypes.string,
  reportedUsername: PropTypes.string,
  onSubmit: PropTypes.func,
};

ReportProfileForm.defaultProps = {
  reportingUsername: 'Reporting User',
  reportedUsername: 'Reported User',
  onSubmit: () => {},
};

export default ReportProfileForm;
