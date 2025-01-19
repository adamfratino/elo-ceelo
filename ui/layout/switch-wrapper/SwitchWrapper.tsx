import React from "react";

type SwitchWrapperProps = {
  condition: boolean;
  trueWrapper: React.ReactElement;
  falseWrapper: React.ReactElement;
  children?: React.ReactNode;
};

export const SwitchWrapper: React.FC<SwitchWrapperProps> = ({
  condition,
  trueWrapper,
  falseWrapper,
  children,
}) => {
  const selectedWrapper = condition ? trueWrapper : falseWrapper;

  return selectedWrapper ? (
    React.cloneElement(selectedWrapper, undefined, children)
  ) : (
    <>{children}</>
  );
};
