export const cls = (classes: (undefined | null | boolean | string)[]) =>
  classes.filter(Boolean).join(' ');