export const isDev = process.env.NODE_ENV !== 'production';

const androidBridge = window.AndroidBridge;
const iosBridge = window.webkit && window.webkit.messageHandlers;
export const isWeb = !androidBridge && !iosBridge;