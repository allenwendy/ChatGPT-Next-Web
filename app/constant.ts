export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";

export const DS_URL="https://mp.weixin.qq.com/s?__biz=Mzg2OTk3Mjg3NQ==&mid=2247483664&idx=1&sn=d6281dfc35d1774bb21531c8344f0486&chksm=ce95aff4f9e226e2baa754a8d48c3309f929e6c67698e199cafd198adb7992de96c9459308d7#rd";
export const MZ_URL="https://mp.weixin.qq.com/s?__biz=Mzg2OTk3Mjg3NQ==&mid=2247483666&idx=1&sn=01d8cee7583191d73db924b66fecd6b4&chksm=ce95aff6f9e226e028e0b2b92cbf2d2a7699b1d55542f2da43cde654121f3b0b6120a2271d45#rd";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;
