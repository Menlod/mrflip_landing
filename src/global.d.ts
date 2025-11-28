// For CSS Modules
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// Optional: for non-module SCSS files (if you use them)
declare module "*.scss" {
  const content: string;
  export default content;
}
