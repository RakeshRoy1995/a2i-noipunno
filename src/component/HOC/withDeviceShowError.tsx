import Maintence from "../../layout/Maintence";

const DeviceError = (WrappedComponent) => {
  // This is the actual higher-order component
  return (props) => {
    const isMobileDevice = () => {
      return /Mobi|Android/i.test(navigator.userAgent);
    };

    if (!isMobileDevice()) {
      return <Maintence />
    } else {
        return <WrappedComponent {...props} />;
    }

  };
};

export default DeviceError;
