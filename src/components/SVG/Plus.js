import React from 'react'
import PropTypes from 'prop-types'

const Plus = ({ className, style }) => {
  return (
    <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g>
        <g>
          <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z" />
        </g>
      </g>

    </svg>
  )
}

Plus.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Plus.defaultProps = {
  className: '',
  style: {}
}

export default Plus
