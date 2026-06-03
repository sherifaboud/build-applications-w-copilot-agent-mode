import { useEffect, useState } from 'react';
import { fetchCollection } from '../api.js';

function useCollection(collectionName) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadCollection() {
      try {
        setLoading(true);
        setError('');
        const result = await fetchCollection(collectionName);

        if (isMounted) {
          setItems(result.items);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError instanceof Error ? requestError.message : 'Unable to load data.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadCollection();

    return () => {
      isMounted = false;
    };
  }, [collectionName]);

  return { items, loading, error };
}

export default useCollection;