import expectExtend from "./lib/expectExtend";
import getFakeInstance from "./lib/getFakeInstance";
import { getExtendedSettings } from "../defaults";

import { setBackground, setMultiBackground, setSources } from "../set";

expectExtend(expect);

var outerDiv, settings, instance;

beforeEach(() => {
  outerDiv = document.createElement("div");
  settings = getExtendedSettings();
  instance = getFakeInstance();
});

afterEach(() => {
  outerDiv = null;
  settings = null;
  instance = null;
});

describe("setSources for image", () => {
  let img;
  const url1 = "1.gif";
  const url200 = "200.gif";
  const url400 = "400.gif";

  beforeEach(() => {
    outerDiv.appendChild((img = document.createElement("img")));
  });

  afterEach(() => {
    outerDiv.removeChild(img);
    img = null;
  });

  test("with initially empty src and srcset", () => {
    img.setAttribute("data-src", url200);
    img.setAttribute("data-srcset", url400);
    setSources(img, settings, instance);
    expect(img).toHaveAttributeValue("src", url200);
    expect(img).toHaveAttributeValue("srcset", url400);
  });

  test("with initial values in src and srcset", () => {
    img.setAttribute("data-src", url200);
    img.setAttribute("data-srcset", url400);
    img.setAttribute("src", url1);
    img.setAttribute("srcset", url1);
    setSources(img, settings, instance);
    expect(img).toHaveAttributeValue("src", url200);
    expect(img).toHaveAttributeValue("srcset", url400);
  });
  test("with initial values in src and srcset and empty data-*", () => {
    img.setAttribute("data-src", "");
    img.setAttribute("data-srcset", "");
    img.setAttribute("src", url200);
    img.setAttribute("srcset", url400);
    setSources(img, settings, instance);
    expect(img).toHaveAttributeValue("src", url200);
    expect(img).toHaveAttributeValue("srcset", url400);
  });
});

describe("setSources for iframe", () => {
  let iframe;
  const srcToLoad = "https://www.google.it";
  const preloadedSrc = srcToLoad + "/doodle";

  beforeEach(() => {
    outerDiv.appendChild((iframe = document.createElement("iframe")));
  });

  afterEach(() => {
    outerDiv.removeChild(iframe);
    iframe = null;
  });

  test("with initially empty src", () => {
    iframe.setAttribute("data-src", srcToLoad);
    setSources(iframe, settings, instance);
    expect(iframe).toHaveAttributeValue("src", srcToLoad);
  });
  test("with initial value in src", () => {
    iframe.setAttribute("data-src", srcToLoad);
    iframe.setAttribute("src", preloadedSrc);
    setSources(iframe, settings, instance);
    expect(iframe).toHaveAttributeValue("src", srcToLoad);
  });
  test("with initial value in src and empty data-src", () => {
    iframe.setAttribute("data-src", "");
    iframe.setAttribute("src", preloadedSrc);
    setSources(iframe, settings, instance);
    expect(iframe).toHaveAttributeValue("src", preloadedSrc);
  });
});

describe("setBackground for single background image", () => {
  let innerDiv;
  const url100 = "100.gif";
  const url200 = "200.gif";

  beforeEach(() => {
    outerDiv.appendChild((innerDiv = document.createElement("div")));
    innerDiv.llTempImage = document.createElement("img");
  });

  afterEach(() => {
    outerDiv.removeChild(innerDiv);
    innerDiv = null;
  });

  test("with initially empty style attribute", () => {
    innerDiv.setAttribute("data-bg", url200);
    setBackground(innerDiv, settings, instance);
    // Test cheating: bug in JsDOM doesn't return the url("") with quotes inside
    expect(innerDiv.style.backgroundImage).toBe(`url(${url200})`);
  });
  test("with initially present style attribute", () => {
    innerDiv.setAttribute("data-bg", url100);
    innerDiv.style = {
      padding: "1px"
    };
    setBackground(innerDiv, settings, instance);
    // Test cheating: bug in JsDOM doesn't return the url("") with quotes inside
    expect(innerDiv.style.backgroundImage).toBe(`url(${url100})`);
  });
  test("with initially present style and background", () => {
    innerDiv.setAttribute("data-bg", url200);
    innerDiv.style = {
      padding: "1px",
      backgroundImage: `url(${url100})`
    };
    setBackground(innerDiv, settings, instance);
    // Test cheating: bug in JsDOM doesn't return the url("") with quotes inside
    expect(innerDiv.style.backgroundImage).toBe(`url(${url200})`);
  });
});

describe("setMultiBackground for multiple background image", () => {
  let innerDiv;
  const url100 = "100.gif";
  const url200 = "200.gif";

  beforeEach(() => {
    outerDiv.appendChild((innerDiv = document.createElement("div")));
  });

  afterEach(() => {
    outerDiv.removeChild(innerDiv);
    innerDiv = null;
  });

  test("with initially empty style attribute", () => {
    innerDiv.setAttribute("data-bg-multi", `url(${url200})`);
    setMultiBackground(innerDiv, settings, instance);
    // Test cheating: bug in JsDOM doesn't return the url("") with quotes inside
    expect(innerDiv.style.backgroundImage).toBe(`url(${url200})`);
  });
  test("with initially present style attribute", () => {
    innerDiv.setAttribute("data-bg-multi", `url(${url100})`);
    innerDiv.style = {
      padding: "1px"
    };
    setMultiBackground(innerDiv, settings, instance);
    // Test cheating: bug in JsDOM doesn't return the url("") with quotes inside
    expect(innerDiv.style.backgroundImage).toBe(`url(${url100})`);
  });
  test("with initially present style and background", () => {
    innerDiv.setAttribute("data-bg-multi", `url(${url200})`);
    innerDiv.style = {
      padding: "1px",
      backgroundImage: `url(${url100})`
    };
    setMultiBackground(innerDiv, settings, instance);
    // Test cheating: bug in JsDOM doesn't return the url("") with quotes inside
    expect(innerDiv.style.backgroundImage).toBe(`url(${url200})`);
  });
});

describe("setSources for video", () => {
  let video, source1, source2;
  const videoUrlMp4 = "foobar.mp4";
  const videoUrlAvi = "foobar.avi";
  const videoUrlWebm = "foobar.webm";

  beforeEach(() => {
    outerDiv.appendChild((video = document.createElement("video")));
    /* video.appendChild(document.createElement("source"));
    video.appendChild(document.createElement("source")); */
  });

  afterEach(() => {
    outerDiv.removeChild(video);
    source1 = null;
    source2 = null;
    video = null;
  });

  test("with initially empty src", () => {
    video.load = jest.fn();
    video.setAttribute("data-src", videoUrlAvi);
    setSources(video, settings, instance);
    expect(video).toHaveAttributeValue("src", videoUrlAvi);
    expect(video.load).toHaveBeenCalled();
  });

  test("with source elements", () => {
    video.load = jest.fn();
    video.setAttribute("data-src", videoUrlAvi);
    video.appendChild((source1 = document.createElement("source")));
    video.appendChild((source2 = document.createElement("source")));
    source1.setAttribute("data-src", videoUrlMp4);
    source2.setAttribute("data-src", videoUrlWebm);
    setSources(video, settings, instance);
    expect(video).toHaveAttributeValue("src", videoUrlAvi);
    expect(source1).toHaveAttributeValue("src", videoUrlMp4);
    expect(source2).toHaveAttributeValue("src", videoUrlWebm);
    expect(video.load).toHaveBeenCalled();
  });
});

describe("setSources for picture", () => {
  let img, picture, source1, source2;
  const url1 = "1.gif";
  const url200 = "200.gif";
  const url400 = "400.gif";

  beforeEach(() => {
    outerDiv.appendChild((picture = document.createElement("picture")));
    picture.appendChild((source1 = document.createElement("source")));
    picture.appendChild((source2 = document.createElement("source")));
    picture.appendChild((img = document.createElement("img")));
  });

  afterEach(() => {
    outerDiv.removeChild(picture);
    picture = null;
    source1 = null;
    source2 = null;
    img = null;
  });

  test("with initially empty srcset", () => {
    source1.setAttribute("data-srcset", url200);
    source2.setAttribute("data-srcset", url400);
    setSources(img, settings, instance);
    expect(source1).toHaveAttributeValue("srcset", url200);
    expect(source2).toHaveAttributeValue("srcset", url400);
  });

  test("with initial value in srcset", () => {
    source1.setAttribute("data-srcset", url200);
    source2.setAttribute("data-srcset", url400);
    source1.setAttribute("srcset", url1);
    source2.setAttribute("srcset", url1);
    setSources(img, settings, instance);
    expect(source1).toHaveAttributeValue("srcset", url200);
    expect(source2).toHaveAttributeValue("srcset", url400);
  });

  test("with initial value in srcset and empty data-srcset", () => {
    source1.setAttribute("data-srcset", "");
    source2.setAttribute("data-srcset", "");
    source1.setAttribute("srcset", url200);
    source2.setAttribute("srcset", url400);
    setSources(img, settings, instance);
    expect(source1).toHaveAttributeValue("srcset", url200);
    expect(source2).toHaveAttributeValue("srcset", url400);
  });
});
