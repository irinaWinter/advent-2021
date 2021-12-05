import { ErrorIndicatorProps } from './ErrorIndicator.props';

const ErrorIndicator = ({ error }: ErrorIndicatorProps): JSX.Element => {
  return (
    <div className="error">
      <p className="error__text">{error}</p>
    </div>
  );
};

export default ErrorIndicator;
