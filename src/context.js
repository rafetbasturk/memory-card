import { createContext, useContext, useEffect, useState } from "react";

const baseUrl = "https://api.pexels.com/v1/curated?page=1&per_page="
const apikey = "563492ad6f91700001000001d144cfbcf28e4c9e8fd886e49347234f"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [images, setImages] = useState([])
  const [level, setLevel] = useState(1)

  const url = `${baseUrl}${level * 4}`

  useEffect(() => {
    setIsLoading(true)
    try {
      const fetchData = async () => {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: apikey,
          },
        });
        const data = await res.json()
        setImages(data.photos)
        setIsLoading(false)
      }
      fetchData()
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }, [url])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        images,
        level,
        setLevel
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }