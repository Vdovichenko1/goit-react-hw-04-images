import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DotLoader from 'react-spinners/DotLoader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { PixabayApi } from './utils/GalleryApi';
import Button from './Button';
import { DotLoaderStyle } from './App.styled';

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [btn, setBtn] = useState(false)

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    PixabayApi(query, page)
      .then(data => {
        if (data.data.total === 0) {
          return toast.error(`Image by request ${query} not found`, {
            position: "bottom-center",
            theme: "dark",
          });
        }
        setImages(prevState => [...prevState, ...data.data.hits]);
      })
      .catch(error => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  const formSubmit = e => {
    setQuery(e);
    setPage(1);
    setImages([]);
  };

  // метод загрузить еще
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={formSubmit} />
      {error && <h1>{error.message}</h1>}
      {loading && (
        <DotLoaderStyle>
          <DotLoader color="#36d7b7" />
        </DotLoaderStyle>
      )}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length >= 12 && <Button onClick={loadMore} />}
      <ToastContainer autoClose={2000} />
    </>
  );
}
