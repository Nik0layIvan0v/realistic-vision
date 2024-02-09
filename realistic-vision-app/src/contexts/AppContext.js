import appContent from "../assets/content/app-content.json";
import { createContext } from "react";

/* EN Version of the app */
const EN_homePageImages = require.context("../assets/images", true);
const EN_homePageVideos = require.context("../assets/videos", true);
const EN_galleryPage_Images = require.context("../assets/images", true);
const EN_galleryPage_Videos = require.context("../assets/videos", true);

/* EN Version of the app */
const BG_homePageImages = require.context("../assets/images", true);
const BG_homePageVideos = require.context("../assets/videos", true);
const BG_galleryPage_Images = require.context("../assets/images", true);
const BG_galleryPage_Videos = require.context("../assets/videos", true);

export const getFileObjects = (files) => {
  if (!files) {
    throw new Error(`getFileObjects: files can't be null!`);
  }

  const fileUrlList = files.keys().map((file) => files(file));
  const fileObjects = fileUrlList.map((fileUrl, index) => {
    return {
      id: index,
      src: fileUrl,
      title: fileUrl.split("/").pop().split(".")[0],
    };
  });

  return fileObjects;
};

export const AppContext = createContext();

export const content = {
  ...appContent,
  ...(appContent.pages.bg.Home.images = getFileObjects(BG_homePageImages)),
  ...(appContent.pages.bg.Home.videos = getFileObjects(BG_homePageVideos)),
  ...(appContent.pages.bg.Gallery.images = getFileObjects(
    BG_galleryPage_Images
  )),
  ...(appContent.pages.bg.Gallery.videos = getFileObjects(
    BG_galleryPage_Videos
  )),

  ...(appContent.pages.en.Home.images = getFileObjects(EN_homePageImages)),
  ...(appContent.pages.en.Home.videos = getFileObjects(EN_homePageVideos)),
  ...(appContent.pages.en.Gallery.images = getFileObjects(
    EN_galleryPage_Images
  )),
  ...(appContent.pages.en.Gallery.videos = getFileObjects(
    EN_galleryPage_Videos
  )),
};
