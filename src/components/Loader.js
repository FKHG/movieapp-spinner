import React from "react";
import "./spinner.css";

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="center">
        <div class="lds-heart">
          <div></div>
        </div>
        ;
      </div>
    );
  };
}
export default WithLoading;
