/// <reference types="vite/client" />

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.JPG";
declare module "*.svg";

interface ImportMetaEnv {
  readonly VITE_APP_SERVICE_ID: string;
  readonly VITE_APP_TEMPLATE_ID: string;
  readonly VITE_APP_EMAILJS_RECIEVER: string;
  readonly VITE_APP_EMAILJS_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
