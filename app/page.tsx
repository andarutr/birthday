"use client"; 

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const galleryImages = [
    "/gallery1.webp",
    "/gallery2.webp",
    "/gallery3.webp",
    "/gallery4.webp",
    "/gallery5.webp",
    "/gallery6.webp",
  ];

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-3">
      <div
        className="position-relative w-100 max-width-lg"
        style={{ maxWidth: "900px" }} >
        <div className="position-absolute top-0 start-0 translate-middle">
          <div
            className="rounded-circle bg-pink opacity-25"
            style={{ width: "100px", height: "100px" }}
          ></div>
        </div>
        <div className="position-absolute bottom-0 end-0 translate-middle">
          <div
            className="rounded-circle bg-warning opacity-25"
            style={{ width: "120px", height: "120px" }}
          ></div>
        </div>

        <main className="bg-white rounded-4 shadow-lg p-4 p-md-5 position-relative z-index-1">
          <div className="d-flex justify-content-center my-5">
            <Image
              className="rounded-circle border border-4 border-pink shadow"
              src="/lina.jpg" 
              alt="Foto Ayang"
              width={200}
              height={200}
              priority
            />
          </div>

          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-gradient text-primary">
              Selamat Ulang Tahun Ayang ❤️
            </h1>
            <p className="lead text-muted fst-italic">
              Hari ini adalah hari ulang tahun ke 25...
            </p>
          </div>

          <hr />

          <div className="my-4">
            <h2 className="h3 text-center">Buat Kamu Yang Paling Disayang</h2>
            <p className="text-dark">
              Selamat ulang tahun yaaa... Ngga kerasa udah 5 tahun bareng kamu. Dari awal kita kenal, aku udah ngerasa kamu itu orang yang spesial banget buat aku. Kamu selalu penuh warna dan kebahagiaan.
            </p>
            <p className="text-dark">
              Semoga di usia 25 tahun ini, kamu makin sukses, bahagia, dan sehat selalu. Aku janji bakal selalu ada buat kamu. Kalo aku lagi ngga ada berarti aku lagi ngoding ya hehe...
            </p>
            <p className="text-dark fw-semibold">
              Terima kasih telah temenin aku dari 0 kayak pertamina (mulai dari 0 ya).
            </p>

            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <button className="btn btn-outline-primary" onClick={handleOpenModal}>
                Kumpulan Foto
              </button>
            </div>
          </div>
        </main>

        <footer className="mt-5 text-center text-muted">
          <small>Made with 💖 Andaru.</small>
        </footer>
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="galleryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl mt-5" role="document">
            <div className="modal-content">
              <div className="modal-header position-relative">
                <h5 className="modal-title" id="galleryModalLabel">Galeri</h5>
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-3"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body scrollable-modal">
                <div className="container mt-5">
                  <div className="row">
                    {galleryImages.map((src, index) => (
                      <div key={index} className="col-md-4 mb-2 p-2">
                        <Image
                          src={src}
                          alt={`Gallery ${index + 1}`}
                          width={300}
                          height={200}
                          className="img-fluid rounded"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                            maxHeight: "200px",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}