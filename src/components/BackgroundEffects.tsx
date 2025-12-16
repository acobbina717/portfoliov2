"use client";

import classes from "./BackgroundEffects.module.css";

export function BackgroundEffects() {
  return (
    <div className={classes.backgroundContainer}>
      {/* Single subtle gradient */}
      <div className={classes.gradientMesh}>
        <div className={classes.gradient1}></div>
      </div>

      {/* Static grid */}
      <div className={classes.gridPattern}></div>
    </div>
  );
}
