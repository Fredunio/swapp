import React from "react";
import classes from "./CategoriesDropdown.module.css";

export default function CategoriesDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={classes.wrapper}>{children}</div>;
}

CategoriesDropdown.Links = function Links({
  children,
  onLinkHover,
  activeIndex,
}: {
  children: React.ReactNode;
  onLinkHover: (index: number) => void;
  activeIndex: number | null;
}) {
  return (
    <div className={classes.links}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          onMouseEnter: () => onLinkHover(index),
          "data-active": index === activeIndex ? "true" : "false", // Set the data-active attribute
        })
      )}
    </div>
  );
};

CategoriesDropdown.Content = function Content({
  children,
  activeIndex,
}: {
  children: React.ReactNode;
  activeIndex: number | null;
}) {
  if (activeIndex === null) {
    return null;
  }

  return (
    <div className={classes.content}>
      {React.Children.map(children, (child, index) =>
        index === activeIndex ? child : null
      )}
    </div>
  );
};
