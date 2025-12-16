import classes from "./SectionDivider.module.css";

export function SectionDivider() {
  return (
    <div className={classes.divider}>
      <div className={classes.line}></div>
    </div>
  );
}
