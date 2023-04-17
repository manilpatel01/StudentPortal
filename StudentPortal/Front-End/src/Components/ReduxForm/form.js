import React from 'react';

export const textInput = (formField) => {
  const { input, meta, ...params } = formField;
  const className = getClassName(meta, params.className);
  return (
    <>
      {renderLabel(params.label, input.name, params)}
      <input className={className} {...input} id={input.name} {...params} />
      {renderError(meta)}
    </>
  );
};

const getClassName = ({ touched, error }, className = 'form-control') => {
  const hasError = touched && error;
  if (hasError) {
    className += ' error';
  }
  return className;
};

export const selectInput = (formField) => {
  const { input, meta, options, ...params } = formField;
  const className = getClassName(meta, params.className);
  return (
    <>
      {renderLabel(params.label, input.name, params)}
      <select className={className} {...input} id={input.name} {...params}>
        <option value="" disabled hidden>
          {params.placeholder}
        </option>
        {renderOption(options)}
      </select>
      {renderError(meta)}
    </>
  );
};

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export class ImageInput extends React.Component {
  state = { error: '', lableImg: null };

  onFileChange = async (e) => {
    const { input } = this.props;
    const file = e.target.files[0];
    var error = '';
    if (file) {
      if (!/^image/.test(file.type)) {
        error = `Only jpg,jpeg,png file type allow.`;
        this.setState({ error });
        return false;
      } else if (file.size > 512000) {
        error = `File size must not exceed 500 KB.`;
        this.setState({ error });
        return false;
      }
      this.setState({ error });
      const val = await getBase64(file);
      //for lable value of input image i'have change state
      this.setState({
        ...this.state,
        lableImg: val,
      });
      //this is onother change for setting form data 'cause backend Excepting multipar-form data
      input.onChange(file);
    } else {
      input.onChange(null);
    }
  };

  render() {
    const { input, meta, ...params } = this.props;
    const { error } = this.state;

    return (
      <>
        <label>
          <img
            src={this.state.lableImg || params.default}
            className={params.className || `upload-${input.name}`}
            alt="Student Img"
          />
          <span className="btn btn-primary btn-lg btn-block mx-auto">
            {params.placeholder}
          </span>
          <input
            type="file"
            accept="image/*"
            className="form-control invisible position-absolute"
            style={{ left: '0' }}
            id={input.name}
            onChange={this.onFileChange}
          />
          {renderError(meta)}
          {error && <label className="error">{error}</label>}
        </label>
        <p>{params.message}</p>
      </>
    );
  }
}

const renderLabel = (label, htmlFor, { require, required }) => {
  return (
    label && (
      <label htmlFor={htmlFor}>
        {label} {(required || require) && <font color="red">*</font>}
      </label>
    )
  );
};

const renderError = ({ touched, error }) => {
  return (
    touched &&
    error && (
      <label
        className="error"
        dangerouslySetInnerHTML={{ __html: error }}
      ></label>
    )
  );
};

const renderOption = (options) => {
  return Object.keys(options).map((key) => (
    <option key={options[key]} value={options[key]}>
      {key}
    </option>
  ));
};

export const scrollToFirstError = () => {
  const el = document.querySelector('input.error');
  if (el) {
    el.focus();
    const position =
      el.getBoundingClientRect().top + document.documentElement.scrollTop;
    const offset = 50;
    window.scrollTo({ top: position - offset, behavior: 'smooth' });
  }
};
