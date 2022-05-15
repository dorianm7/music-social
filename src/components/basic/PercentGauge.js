import React from 'react';
import PropTypes from 'prop-types';

function percentToDegrees(percent) {
  return (360 * (percent / 100.0));
}

function renderContents(text, textColor, textFontSize, imgSrc, imgAlt) {
  const spanStyle = {
    position: 'absolute',
    margin: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: textFontSize,
    color: textColor,
  };

  const textContent = text === 'none' ? <></> : (
    <span style={spanStyle}>{text}</span>
  );

  const imgContent = imgSrc === 'none' ? <></> : (
    <img src={imgSrc} alt={imgAlt} />
  );

  return (
    <>
      {imgContent}
      {textContent}
    </>
  );
}

function getGaugeStyle(size, emptyGaugeColor, filledGaugeColor, degrees) {
  return {
    display: 'inline-flex',
    backgroundImage: `conic-gradient(from 0deg, ${filledGaugeColor} ${degrees}deg, ${emptyGaugeColor} 0deg)`,
    width: size,
    height: size,
    borderRadius: '50%',
  };
}

function getInnerCircleStyle(innerCircleColor) {
  return {
    backgroundColor: innerCircleColor,
    width: '82%',
    height: '82%',
    borderRadius: '50%',
    margin: 'auto',
  };
}

function getInnerCircleContentsStyle() {
  return {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: 'auto',
    borderRadius: '50%',
  };
}

function PercentGauge(props) {
  const {
    size,
    percentFilled,
    emptyGaugeColor,
    filledGaugeColor,
    innerCircleColor,
    text,
    textColor,
    fontSize,
    imageSrc,
    imageAlt,
  } = props;

  const degrees = percentToDegrees(percentFilled);
  const gaugeStyle = getGaugeStyle(size, emptyGaugeColor, filledGaugeColor, degrees);
  const innerCircleStyle = getInnerCircleStyle(innerCircleColor);
  const innerCircleContentsStyle = getInnerCircleContentsStyle();
  const contents = renderContents(text, textColor, fontSize, imageSrc, imageAlt);

  return (
    <div className="percent-gauge" style={gaugeStyle}>
      <div className="inner-circle" style={innerCircleStyle}>
        <div className="inner-circle-contents" style={innerCircleContentsStyle}>
          { contents }
        </div>
      </div>
    </div>
  );
}

PercentGauge.propTypes = {
  size: PropTypes.string,
  percentFilled: PropTypes.string,
  innerCircleColor: PropTypes.string,
  emptyGaugeColor: PropTypes.string,
  filledGaugeColor: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};

PercentGauge.defaultProps = {
  size: '100px',
  percentFilled: '50',
  innerCircleColor: 'white',
  emptyGaugeColor: 'hsl(0, 0%, 70%)',
  filledGaugeColor: 'hsl(0, 0%, 40%)',
  text: 'none',
  textColor: 'black',
  fontSize: '19px',
  imageSrc: 'none',
  imageAlt: 'No image',
};

export default PercentGauge;
