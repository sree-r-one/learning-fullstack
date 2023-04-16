import React, { useState } from "react";
import { Modal } from "../components";

const Ecommerce = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      Ecommerce
      <button
        className="mt-10 block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Modal
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={setIsModalOpen} />
    </div>
  );
};

export default Ecommerce;
