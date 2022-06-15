function Main({isLoading, images, handleClick}) {
  return (
    <main>
        {!isLoading && images.map(image => {
          return (
            <div
              className="image-container"
              key={image.id}
              data-id={image.id}
              onClick={handleClick} >
              <img src={image.src.medium} alt={image.alt ? image.alt : "image"} />
            </div>
          )
        })}
      </main>
  );
}

export default Main;