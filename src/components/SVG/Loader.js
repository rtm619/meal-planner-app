import React from 'react'
import PropTypes from 'prop-types'

const Loader = ({ className, style }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="84" cy="50" r="0.182058" fill="rgba(0, 5, 79, 0.23329029698525705)">
        <animate attributeName="r" repeatCount="indefinite" dur="0.3676470588235294s" calcMode="spline" keyTimes="0;1" values="9;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
        <animate attributeName="fill" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="rgba(0, 5, 79, 0.23329029698525705);#00054f;rgba(0, 5, 79, 0.828774167952999);rgba(0, 5, 79, 0.5771612647271925);rgba(0, 5, 79, 0.23329029698525705)" begin="0s"></animate>
      </circle>
      <circle cx="49.3122" cy="50" r="9" fill="rgba(0, 5, 79, 0.23329029698525705)">
        <animate attributeName="r" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;9;9;9" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
        <animate attributeName="cx" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
      </circle>
      <circle cx="83.3122" cy="50" r="9" fill="rgba(0, 5, 79, 0.5771612647271925)">
        <animate attributeName="r" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;9;9;9" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.3676470588235294s"></animate>
        <animate attributeName="cx" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.3676470588235294s"></animate>
      </circle>
      <circle cx="16" cy="50" r="0" fill="rgba(0, 5, 79, 0.828774167952999)">
        <animate attributeName="r" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;9;9;9" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.7352941176470588s"></animate>
        <animate attributeName="cx" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.7352941176470588s"></animate>
      </circle>
      <circle cx="16" cy="50" r="8.81794" fill="#00054f">
        <animate attributeName="r" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;9;9;9" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.102941176470588s"></animate>
        <animate attributeName="cx" repeatCount="indefinite" dur="1.4705882352941175s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.102941176470588s"></animate>
      </circle>
    </svg>
  )
}

Loader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Loader.defaultProps = {
  className: '',
  style: {}
}

export default Loader
