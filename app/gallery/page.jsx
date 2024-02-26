"use client";

import Image from "next/image";
import React, { useState } from "react";

// Sample data for albums and photos
const albums = [
  {
    id: 1,
    title: "Abdalla's Bakery",
    description: "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is",
    coverPhoto: "/heroImage1.jpg",
    photos: [
      { id: 1, url: "/heroImage1.jpg", caption: "Photo 1" },
      { id: 2, url: "/heroImage2.jpg", caption: "Photo 2" },
      { id: 3, url: "/heroImage3.jpg", caption: "Photo 2" },
      { id: 4, url: "/heroImage4.jpg", caption: "Photo 2" },
      { id: 5, url: "/heroImage5.jpg", caption: "Photo 2" },
      { id: 6, url: "/heroImage6.jpg", caption: "Photo 2" },
      { id: 7, url: "/heroImage1.jpg", caption: "Photo 1" },
      { id: 8, url: "/heroImage2.jpg", caption: "Photo 2" },
      { id: 9, url: "/heroImage3.jpg", caption: "Photo 2" },
      { id: 10, url: "/heroImage4.jpg", caption: "Photo 2" },
      { id: 11, url: "/heroImage5.jpg", caption: "Photo 2" },
      { id: 12, url: "/heroImage6.jpg", caption: "Photo 2" },
      { id: 13, url: "/heroImage1.jpg", caption: "Photo 2" },
      { id: 14, url: "/heroImage2.jpg", caption: "Photo 2" },
      { id: 15, url: "/heroImage3.jpg", caption: "Photo 2" },
      { id: 16, url: "/heroImage4.jpg", caption: "Photo 2" },
      // Add more photos as needed
    ],
  },
  {
    id: 2,
    title: "Project 2",
    description: "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is",
    coverPhoto: "/heroImage2.jpg",
    photos: [
      { id: 3, url: "/heroImage3.jpg", caption: "Photo 3" },
      { id: 4, url: "/heroImage4.jpg", caption: "Photo 4" },
      // Add more photos as needed
    ],
  },
  {
    id: 3,
    description: "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is",
    title: "Project 3",
    coverPhoto: "/heroImage3.jpg",
    photos: [
      { id: 3, url: "/heroImage3.jpg", caption: "Photo 3" },
      { id: 4, url: "/heroImage4.jpg", caption: "Photo 4" },
      // Add more photos as needed
    ],
  },
  {
    id: 4,
    description: "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is",
    title: "Project 4",
    coverPhoto: "/heroImage4.jpg",
    photos: [
      { id: 3, url: "/heroImage3.jpg", caption: "Photo 3" },
      { id: 4, url: "/heroImage4.jpg", caption: "Photo 4" },
      // Add more photos as needed
    ],
  },
  {
    id: 5,
    description: "lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is",
    title: "Project 5",
    coverPhoto: "/heroImage5.jpg",
    photos: [
      { id: 3, url: "/heroImage3.jpg", caption: "Photo 3" },
      { id: 4, url: "/heroImage4.jpg", caption: "Photo 4" },
      // Add more photos as needed
    ],
  },
  // Add more albums as needed
];

const GalleryPage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const openAlbum = (albumId) => {
    const album = albums.find((album) => album.id === albumId);
    setSelectedAlbum(album);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedPhoto(null);
  };

  const openPhoto = (photoId) => {
    const photo = selectedAlbum.photos.find((photo) => photo.id === photoId);
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction) => {
    if (selectedAlbum) {
      const totalPhotos = selectedAlbum.photos.length;
      let newIndex;
      if (direction === "prev") {
        newIndex = (selectedPhotoIndex - 1 + totalPhotos) % totalPhotos;
      } else {
        newIndex = (selectedPhotoIndex + 1) % totalPhotos;
      }
      setSelectedPhoto(selectedAlbum.photos[newIndex]);
      setSelectedPhotoIndex(newIndex);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-[3.5rem] sm:text-[6rem] text-center underline underline-offset-8 decoration-2 decoration-[#cd9a41] textShadow p-8 mb-10">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {albums.map((album, index) => (
          <div
            key={album.id}
            className={`bg-blue-950 text-white rounded shadow-md overflow-hidden cursor-pointer flex md:h-80 w-full ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className="w-[70%]">
              <Image src={album.coverPhoto} alt={album.title} width={300} height={100} className="w-full h-full" onClick={() => openAlbum(album.id)} />
            </div>
            <div className="w-[30%]">
              <h2 className="font-bold px-4 py-2">{album.title}</h2>
              <h5 className="font-bold px-4 py-2">{album.description}</h5>
            </div>
          </div>
        ))}
      </div>
      {selectedAlbum && (
        <div className="fixed inset-0 flex justify-center items-center z-50 overflow-auto">
          <div className="bg-white rounded-lg p-6 max-w-5xl">
            <h2 className="text-xl font-bold mb-4">{selectedAlbum.title}</h2>
            <div className="grid grid-cols-4 gap-2">
              {selectedAlbum.photos.map((photo) => (
                <div key={photo.id} onClick={() => openPhoto(photo.id)} className="w-full h-auto rounded cursor-pointer">
                  <Image src={photo.url} alt={photo.caption} width={300} height={300} className="w-full h-full" />
                </div>
              ))}
            </div>
            <button className="px-4 py-2 mt-6 bg-blue-500 text-white rounded" onClick={closeAlbum}>
              Close
            </button>
          </div>
        </div>
      )}
      {selectedPhoto && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <button
            className="absolute left-[15rem] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#cd9a41] text-blue-950 text-[1.6rem] rounded-full flex items-center justify-center"
            onClick={() => navigatePhoto("prev")}
          >
            &lt;
          </button>
          <Image src={selectedPhoto.url} alt={selectedPhoto.caption} width={900} height={500} className="w-2/3 h-4/5 rounded" />
          <button
            className="absolute right-[15rem] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#cd9a41] text-blue-950 text-[1.6rem] rounded-full flex items-center justify-center"
            onClick={() => navigatePhoto("next")}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
