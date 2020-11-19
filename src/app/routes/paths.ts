const slugUrl = ":slug([a-z-0-9]+)/:id([0-9]+)/";
export const baseUrl = "/";
export const searchUrl = `${baseUrl}search/`;
export const categoryUrl = `${baseUrl}category/${slugUrl}`;
export const collectionUrl = `${baseUrl}collection/${slugUrl}`;
export const cartUrl = `${baseUrl}cart/:token?/`;
export const checkoutLoginUrl = `${baseUrl}login/`;
export const pageUrl = `${baseUrl}page/:slug/`;
export const guestOrderDetailsUrl = `/order-history/:token/`;
export const accountUrl = `${baseUrl}account/`;
export const accountConfirmUrl = `${baseUrl}account-confirm/`;
export const orderHistoryUrl = `${baseUrl}order-history/`;
export const addressBookUrl = `${baseUrl}address-book/`;
export const passwordResetUrl = `${baseUrl}reset-password/`;
export const orderFinalizedUrl = `${baseUrl}order-finalized/`;

export const checkoutUrl = `${baseUrl}checkout/`;
export const productUrl = `${baseUrl}product/[slug]/[id]/`;
