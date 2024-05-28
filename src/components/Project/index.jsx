/* eslint-disable react/prop-types */
import { useState } from "react";
import "./project.scss";
import ImagePreviewModal from "../ImagePreviewModal";

const Project = ({ images, title, desc, tags }) => {
  // State untuk menentukan apakah modal sedang terbuka atau tidak
  const [modalOpen, setModalOpen] = useState(false);
  
  // Fungsi untuk membuka modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Modal */}
      {modalOpen && (
        <ImagePreviewModal images={images} closeModal={closeModal} />
      )}
      <div className="project-card">
        <div className="project-image">
          <img src={images[0]} alt="project preview" onClick={openModal} />
        </div>
        <div className="project-desc">
          <h2>{title}</h2>
          <p>{desc}</p>
          <ul>
            {tags.map((tag) => (
              <li key={tag}> # {tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Project;
