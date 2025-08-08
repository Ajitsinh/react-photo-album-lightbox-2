import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

import SortableGallery from "./components/SortableGallery";
import photoSet from "./components/photos";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";

export default function App() {
  const [index, setIndex] = useState(-1);
  const [photoList, setPhotoList] = useState(photos);

  return (
    <>
      <RowsPhotoAlbum
        photos={photoList}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photoList}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Zoom]}
      />

      <SortableGallery
        gallery={RowsPhotoAlbum}
        spacing={16}
        padding={10}
        photos={photoList}
        movePhoto={(oldIndex, newIndex) =>
          setPhotoList(arrayMove(photoList, oldIndex, newIndex))
        }
      />
    </>
  );
}
