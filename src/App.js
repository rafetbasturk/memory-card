import { useGlobalContext } from "./context";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { shuffle, checkIfIncludes } from "./helper";

const modalInitialState = { message: "Next Level", className: "success", button: "Continue" }

function App() {
  const { isLoading, images, level, setLevel } = useGlobalContext()
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(modalInitialState)
  shuffle(images)

  const handleClick = e => {
    const id = e.currentTarget.dataset.id
    if (checkIfIncludes(selected, id)) {
      setSelected([])
      setLevel(1)
      setScore(0)
      setModal({ message: "You lost!", className: "warning", button: "Try again" })
      setIsModalOpen(true)
    }
    else if (selected.length === (level * 4) - 1) {
      setLevel(prev => prev + 1)
      setSelected([])
      setScore(prev => prev + 1)
      setModal(modalInitialState)
      setIsModalOpen(true)
    }
    else {
      setScore(prev => prev + 1)
      setSelected(prev => [...prev, id])
    }
    shuffle(images)
  }

  return (
    <>
      <Header score={score} level={level} />
      <Main
        isLoading={isLoading}
        images={images}
        handleClick={handleClick}
        setLevel={setLevel}
      />
      {
        isModalOpen &&
        <Modal
          setIsModalOpen={setIsModalOpen}
          modal={modal}
          level={level}
          score={score}
        />
      }
      <Footer />
    </>
  );
}

export default App;
