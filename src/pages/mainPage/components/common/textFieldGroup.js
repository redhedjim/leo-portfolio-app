import React from 'react';

const TextFieldGroup = ({ type, id, placeholder }) => {
  return (
    <div className="form-group col-xs-12">
      <input type={type} id={id} className="form-control" placeholder={placeholder} />
    </div>
  );
};

TextFieldGroup.propTypes = {
  type: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
}

TextFieldGroup.defaultProps = {
  type: 'text'
}
export default TextFieldGroup;