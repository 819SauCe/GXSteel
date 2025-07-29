import { F as head } from "../../../chunks/index.js";
import { L as Loading } from "../../../chunks/loading.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<meta http-equiv="refresh" content="0;url=/catalogo"/>`;
  });
  Loading($$payload);
}
export {
  _page as default
};
